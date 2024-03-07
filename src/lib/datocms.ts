import { cache } from "react";

type PerformRequestProps = {
  query: string;
  variables?: Record<string, any>;
  includeDrafts?: boolean;
  excludeInvalid?: boolean;
  visualEditingBaseUrl?: string;
  revalidate?: boolean;
};

type FetchInit = RequestInit & { next?: { revalidate: boolean } };

const DATO_CMS_URL = "https://graphql.datocms.com/";

const dedupedFetch = cache(async (serializedInit: any) => {
  const response = await fetch(`${DATO_CMS_URL}`, JSON.parse(serializedInit));
  const responseBody = await response.json();
  if (!response.ok) {
    throw new Error(
      `${response.status} ${response.statusText}: ${JSON.stringify(
        responseBody
      )}`
    );
  }
  return responseBody;
});

export const performRequest = async ({
  query,
  variables = {},
  includeDrafts = false,
  excludeInvalid = false,
  visualEditingBaseUrl,
  revalidate,
}: PerformRequestProps): Promise<any> => {
  const { data } = await dedupedFetch(
    JSON.stringify({
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
        ...(includeDrafts ? { "X-Include-Drafts": "true" } : {}),
        ...(excludeInvalid ? { "X-Exclude-Invalid": "true" } : {}),
        ...(visualEditingBaseUrl
          ? {
              "X-Visual-Editing": "vercel-v1",
              "X-Base-Editing-Url": visualEditingBaseUrl,
            }
          : {}),
        ...(process.env.NEXT_DATOCMS_ENVIRONMENT
          ? { "X-Environment": process.env.NEXT_DATOCMS_ENVIRONMENT }
          : {}),
      },
      body: JSON.stringify({ query, variables, revalidate }),
      next: { revalidate },
    } as FetchInit)
  );
  return data;
};
