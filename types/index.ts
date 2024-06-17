export type RootStackParamList = {
  Search: undefined;
  Details: { repoData: RepositoryData };
};

export type RepositoryData = {
  id: number;
  topics: string[];
  owner: { avatar_url: string };
  full_name: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
  watchers_count: number;
  html_url: string;
};
