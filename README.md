# Course Compass

Course Compass is a small course catalog built for the first Advanced Web
Technologies lab. It demonstrates the Next.js 16 App Router, typed dynamic
routes, Server Components, a focused Client Component, and mock asynchronous
data loading.

## Lab 2 styling

The catalog is styled with Tailwind CSS and shadcn/ui. Course cards use the
shadcn `Card` and `Button` components, the course list adapts from one to two
to three columns, and the shared navigation has spacing, separation, and hover
states.

All optional Lab 2 bonuses are also included: a custom `course-accent` Tailwind
color, system-aware dark mode for the cards and navigation, a custom `course`
button variant, and the additional shadcn/ui `Badge` component for course
credits.

## Routes

- `/` — home page
- `/about` — project overview
- `/courses` — server-rendered course list
- `/courses/[id]` — statically generated course detail page
- `/courses/does-not-exist` — custom course not-found state

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server may
choose the next available port if port 3000 is already in use.

## Quality checks

```bash
npm run lint
npm run build
```
