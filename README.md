# Course Compass

Course Compass is a Next.js course catalog. In Lab 5 it was connected to the
FastAPI backend: Server Components load current course data from the API, while
Client Components send filtering, like, and enrollment requests from the
browser.

## How to run both projects

Start the backend first:

```bash
cd course-catalog-api
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
fastapi dev main.py
```

Then start the frontend in a second terminal:

```bash
cd course-catalog
npm install
npm run dev
```

Open <http://localhost:3000>. The backend must be running at
<http://localhost:8000>.

## Environment variables

Create `.env.local` in the `course-catalog` root:

```dotenv
API_URL=http://localhost:8000
NEXT_PUBLIC_API_URL=http://localhost:8000
```

`API_URL` is used only by Server Components. `NEXT_PUBLIC_API_URL` is included
in browser JavaScript and is used by Client Components, so it must not contain
secrets. The `.env.local` file is ignored by Git.

## Routes

- `/` — home page
- `/about` — project overview
- `/courses` — course list loaded by the Next.js server from FastAPI
- `/courses/[id]` — current course details, server-backed like, and enrollment
- `/filter` — browser-side SWR filter for elective courses
- `/courses/does-not-exist` — custom not-found state

## Decisions

`generateStaticParams` was removed because the course list now belongs to the
backend and can change without a frontend rebuild. Removing it also allows
`npm run build` to pass while the backend is stopped; `cache: "no-store"` keeps
the course pages dynamic and current.

The like is a simple POST with no body or special request headers, so the
browser sends it without a preflight. Enrollment sends JSON with
`Content-Type: application/json`, so the browser first sends an OPTIONS
preflight to check the CORS permission.

## Bonus tasks

### OpenAPI-generated TypeScript types

`lib/schema.d.ts` was generated from the backend OpenAPI schema. The frontend
imports `Course` and `Enrollment` from that file instead of maintaining manual
copies of the API models. With the backend running, regenerate the types after
an API model change:

```bash
npx openapi-typescript http://localhost:8000/openapi.json -o lib/schema.d.ts
```

As an experiment, the backend field `likes` was temporarily renamed to
`like_count`. Regeneration changed the JSON type to `likeCount`, and
`npx tsc --noEmit` found all three stale frontend uses of `likes`. The original
backend field was restored after the experiment.

### Next.js rewrite experiment

A temporary Next.js rewrite forwarded `/api/:path*` to the FastAPI server. The
frontend successfully loaded `/api/courses` with the backend CORS middleware
removed because the browser then contacted the same Next.js origin. The final
project uses direct browser requests again so that the laboratory's CORS
requirements remain visible and testable.

### Fetch-cache experiment

Removing `{ cache: "no-store" }` made `/courses` a static (`○`) route during a
production build. Its generated HTML kept 21 likes even after the live API had
23. The option was restored, so `/courses` is again dynamic (`ƒ`) and does not
serve frozen catalog data.

### Backend configuration bonuses

The backend reads its allowed frontend origins from `CORS_ORIGINS` and uses
explicit CORS method and header lists. See the backend README for configuration
examples.

## Breakage journal

### Breakage 1: CORS middleware removed

- What I did: commented out the complete `app.add_middleware(...)` block.
- Console: `No 'Access-Control-Allow-Origin' header is present on the requested resource`.
- Network: browser GET and like POST were marked as CORS errors even though the backend logged 200; enrollment OPTIONS returned 405 and the POST was not sent; the Server Component `/courses` page still worked.
- Cause: FastAPI returned no CORS permission headers because the middleware was not connected.
- How I found it: checked the missing response header, then saw that OPTIONS returned 405 at step 4 of the diagnostic algorithm.

### Breakage 2: trailing slash in the allowed origin

- What I did: changed the allowed origin to `http://localhost:3000/`.
- Console: `No 'Access-Control-Allow-Origin' header is present on the requested resource`.
- Network: browser GET and like POST were blocked; enrollment OPTIONS returned 400 with `Disallowed CORS origin` and its POST was not sent.
- Cause: an origin contains only scheme, host, and port; the trailing slash made it different from `http://localhost:3000`.
- How I found it: compared the page origin and `allow_origins` character for character at step 3.

### Breakage 3: allowed methods removed

- What I did: removed `allow_methods=["*"]` from the CORS configuration.
- Console: the enrollment reported that the preflight response did not have an HTTP OK status.
- Network: the filter GET and simple like POST worked; enrollment OPTIONS returned 400 with `Disallowed CORS method`, so the POST was not sent.
- Cause: CORSMiddleware allows only GET by default, but the preflight requested permission for POST.
- How I found it: inspected the OPTIONS status and response body at step 4.

### Breakage 4: frontend opened from another origin

- What I did: temporarily allowed the Next.js dev host and opened the frontend at `http://127.0.0.1:3000` while FastAPI allowed only `http://localhost:3000`.
- Console: a request from origin `http://127.0.0.1:3000` was blocked because no matching allow-origin header was present.
- Network: browser requests were marked as CORS errors while the backend logged successful requests; Server Component course pages still loaded.
- Cause: `localhost` and `127.0.0.1` are different hosts and therefore different origins.
- How I found it: compared the Origin request header with `allow_origins` at step 3.

### Breakage 5: Python error that looked like CORS

- What I did: temporarily changed `p["offset"]` to `p["ofset"]` in `list_courses`.
- Console: the filter showed the familiar missing allow-origin message.
- Network: browser GET `/courses` was a CORS error; like and enrollment still worked; the Server Component `/courses` page showed `error.tsx`.
- Cause: the route raised `KeyError: 'ofset'` and returned 500 before CORS headers were added; CORS configuration itself was correct.
- How I found it: the backend terminal showed a 500 traceback at step 5 of the diagnostic algorithm.

All five temporary breakages were restored. The final code contains the working
CORS and API configuration.

## Quality checks

```bash
npm run lint
npm run build
```
