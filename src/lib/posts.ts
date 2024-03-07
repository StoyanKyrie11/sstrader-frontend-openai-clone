import { GraphQLClient } from "graphql-request";

type graphQLReqProps = {
  query: string;
  variables?: Record<string, any>;
  preview?: boolean;
};

export default async function graphQLReq({
  query,
  variables,
  preview,
}: graphQLReqProps): Promise<any> {
  const endpoint = preview
    ? `https://graphql.datocms.com/preview`
    : `https://graphql.datocms.com/`;
  const grahpQLClient = new GraphQLClient(endpoint, {
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
  });
  return grahpQLClient.request(query, variables);
}
