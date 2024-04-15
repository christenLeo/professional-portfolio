import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

export async function GET() {
  const ACESS_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;
  const USER_NAME = process.env.GITHUB_USERNAME;
  const reqBodyContent = {
    query: `{
        user(login: "${USER_NAME}") {
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
      Authorization: `Bearer ${ACESS_TOKEN}`,
      "Content-type": "application/json",
    },
    body: JSON.stringify(reqBodyContent),
  };

  const {data} = await fetch("https://api.github.com/graphql", reqConfig).then((data) => {
    return data.json();
  });
  return NextResponse.json({ data });
}
