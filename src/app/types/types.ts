export interface Repo {
  name: string;
  commitsCount: number;
}

export interface UserData {
  id: string;
  name: string;
  totalCommitsCount: number;
  commitsPerWeek: number;
  repos: Repo[];
}

export interface ContributorData {
  totalCommits: number;
  commitsPerWeek: number;
  totalNumberOfReposContributedTo: number;
}
