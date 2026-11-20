import { API_URL } from "@/lib/api";

export type GraphQLError = {
  message: string;
  path?: (string | number)[];
  extensions?: Record<string, unknown>;
};

type GraphQLResponse<T> = {
  data?: T;
  errors?: GraphQLError[];
};

export class GraphQLRequestError extends Error {
  constructor(public readonly errors: GraphQLError[]) {
    super(errors.map((error) => error.message).join("; "));
    this.name = "GraphQLRequestError";
  }
}

export async function gql<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {
  const response = await fetch(`${API_URL}/graphql`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query, variables }),
    cache: "no-store",
  });
  const body = (await response.json()) as GraphQLResponse<T>;

  if (!response.ok) {
    throw new Error(`GraphQL HTTP error: ${response.status}`);
  }
  if (body.errors?.length) {
    throw new GraphQLRequestError(body.errors);
  }
  if (!body.data) {
    throw new Error("GraphQL response did not contain data");
  }
  return body.data;
}
