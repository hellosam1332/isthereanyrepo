export interface Repository {
  id: string;
  name: string;
  description: string;
  stargazers: {
    totalCount: number;
  };
}
