import dotenv from "dotenv";

dotenv.config();

const ACCESS_TOKEN = process.env.GITHUB_PERSONAL_ACCESS_TOKEN || "";
const USERNAME = process.env.GITHUB_USERNAME || "";
const GITHUB_URI = process.env.GITHUB_URI || "https://api.github.com/graphql";

export { ACCESS_TOKEN, USERNAME, GITHUB_URI };
