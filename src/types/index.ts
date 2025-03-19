export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  githubUrl: string;
  liveUrl?: string;
}

export interface GitHubStats {
  stars: number;
  commits: number;
  repositories: number;
  contributions: number;
} 