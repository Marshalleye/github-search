import { RepositoryData } from "@/types";
import axios from "axios";

const GITHUB_TOKEN = process.env.EXPO_PUBLIC_GITHUB_ACCESS_TOKEN;
const LIMIT_PER_PAGE = 20;

const api = axios.create({
  baseURL: "https://api.github.com/search",
  headers: {
    Accept: "application/vnd.github.v3+json",
    "X-GitHub-Api-Version": "2022-11-28",
    Authorization: `Bearer ${GITHUB_TOKEN}`,
  },
});

export const getReposByQuery = async (query: string, page: number = 1) => {
  try {
    const res = await api.get("/repositories", {
      params: {
        q: query,
        sort: "stars",
        order: "desc",
        per_page: LIMIT_PER_PAGE,
        page,
      },
    });
    return res.data["items"] as RepositoryData[];
  } catch {
    return [];
  }
};
