import { ACCESS_TOKEN, GITHUB_URI, USERNAME } from "@/config";
import { NextResponse } from "next/server";


export const GET = async () => {
  const reqBodyContent = {
    query: `{
        user(login: "${USERNAME}") {
          pinnedItems(first: 6, types: REPOSITORY) {
            nodes {
              ... on Repository {
                name
                description
                url
                createdAt
                updatedAt
              }
            }
          }
        }
      }`,
  };
  const reqConfig = {
    method: "POST",
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(reqBodyContent),
  };

  const {data} = await fetch(`${GITHUB_URI}`, reqConfig).then((data) => {
    return data.json();
  });
  return NextResponse.json({ data });
}
