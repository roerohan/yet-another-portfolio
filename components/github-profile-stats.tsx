import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Star,
  GitFork,
  Users,
  BookOpen,
  ExternalLink,
  TrendingUp,
  Code2,
  Calendar,
} from "lucide-react";

interface GitHubUser {
  name: string;
  login: string;
  avatar_url: string;
  bio: string;
  public_repos: number;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
}

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  topics: string[];
}

async function getGitHubUser(username: string): Promise<GitHubUser | null> {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching GitHub user:", error);
    return null;
  }
}

async function getTotalStars(username: string): Promise<number> {
  try {
    // Fetch up to 100 repos to get accurate star count
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const repos = await response.json();
    return repos
      .filter((repo: any) => !repo.fork)
      .reduce((total: number, repo: any) => total + repo.stargazers_count, 0);
  } catch (error) {
    console.error("Error fetching total stars:", error);
    return 0;
  }
}

async function getTopRepos(username: string): Promise<GitHubRepo[]> {
  try {
    // Fetch more repos to ensure we get top 6 after filtering forks
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100`,
      {
        next: { revalidate: 3600 }, // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const repos = await response.json();
    return repos
      .filter((repo: any) => !repo.fork)
      .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
      .slice(0, 3)
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        stargazers_count: repo.stargazers_count,
        forks_count: repo.forks_count,
        language: repo.language,
        topics: repo.topics || [],
      }));
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);
    return [];
  }
}

export default async function GitHubProfileStats({
  username,
}: {
  username: string;
}) {
  const [user, topRepos, totalStars] = await Promise.all([
    getGitHubUser(username),
    getTopRepos(username),
    getTotalStars(username),
  ]);

  if (!user) {
    return (
      <div className="text-center py-8">
        <p className="text-zinc-400">Unable to load GitHub profile.</p>
      </div>
    );
  }

  const accountAge = Math.floor(
    (Date.now() - new Date(user.created_at).getTime()) / (1000 * 60 * 60 * 24 * 365)
  );

  return (
    <div className="space-y-8">
      {/* Profile Card */}
      <Card className="border-zinc-800 bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 overflow-hidden relative">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
        <CardContent className="p-8 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Avatar & Basic Info */}
            <div className="flex flex-col items-center text-center space-y-4">
              <div className="relative group">
                <img
                  src={user.avatar_url}
                  alt={user.name}
                  className="w-32 h-32 rounded-full border-4 border-zinc-800 group-hover:border-cyan-500/50 transition-colors"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold">{user.name}</h3>
                <p className="text-zinc-400">@{user.login}</p>
              </div>
              <p className="text-sm text-zinc-400 max-w-xs">{user.bio}</p>
              <Button asChild className="w-full">
                <Link
                  href={user.html_url}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center"
                >
                  View Profile
                  <ExternalLink className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>

            {/* Stats Grid */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700 text-center">
                  <BookOpen className="h-5 w-5 text-cyan-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-500">
                    {user.public_repos}
                  </div>
                  <div className="text-xs text-zinc-500">Repositories</div>
                </div>
                <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700 text-center">
                  <Star className="h-5 w-5 text-yellow-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-yellow-500">
                    {totalStars}+
                  </div>
                  <div className="text-xs text-zinc-500">Total Stars</div>
                </div>
                <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700 text-center">
                  <Users className="h-5 w-5 text-purple-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-500">
                    {user.followers}
                  </div>
                  <div className="text-xs text-zinc-500">Followers</div>
                </div>
                <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700 text-center">
                  <Calendar className="h-5 w-5 text-green-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-green-500">
                    {accountAge}+
                  </div>
                  <div className="text-xs text-zinc-500">Years</div>
                </div>
              </div>

              {/* Contribution Graph */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-zinc-400 flex items-center">
                  <TrendingUp className="h-4 w-4 mr-2" />
                  Contribution Activity
                </h4>
                <div className="rounded-lg bg-zinc-950 border border-zinc-800 p-4 overflow-hidden">
                  <img
                    src={`https://ghchart.rshah.org/22d3ee/${username}`}
                    alt="GitHub Contribution Graph"
                    className="w-full h-auto rounded opacity-60"
                    loading="lazy"
                    style={{
                      imageRendering: 'crisp-edges'
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Top Repositories */}
      {topRepos.length > 0 && (
        <div>
          <h3 className="text-2xl font-bold mb-6 flex items-center">
            <Star className="h-6 w-6 mr-3 text-cyan-500" />
            Top Repositories
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {topRepos.map((repo) => (
              <Card
                key={repo.name}
                className="border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/80 transition-all hover:border-cyan-500/30 group"
              >
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-start justify-between">
                    <h4 className="font-semibold text-lg group-hover:text-cyan-500 transition-colors flex-1 truncate">
                      <a
                        href={repo.html_url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center"
                      >
                        {repo.name}
                        <ExternalLink className="ml-2 h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    </h4>
                  </div>

                  <p className="text-sm text-zinc-400 line-clamp-2">
                    {repo.description || "No description provided"}
                  </p>

                  <div className="flex items-center gap-4 text-xs text-zinc-500">
                    {repo.language && (
                      <div className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-cyan-500 mr-1.5" />
                        {repo.language}
                      </div>
                    )}
                    <div className="flex items-center">
                      <Star className="h-3 w-3 mr-1" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center">
                      <GitFork className="h-3 w-3 mr-1" />
                      {repo.forks_count}
                    </div>
                  </div>

                  {repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 3).map((topic) => (
                        <Badge
                          key={topic}
                          variant="secondary"
                          className="bg-zinc-800 text-xs"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
