import ProjectCard from "./project-card";

interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  topics: string[];
  language: string | null;
}

async function getPinnedReposFromBerrySauce() {
  try {
    const response = await fetch('https://pinned.berrysauce.dev/get/roerohan', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('BerrySauce API failed');
    }

    const data = await response.json();
    
    if (!Array.isArray(data)) {
      throw new Error('Invalid response from BerrySauce API');
    }

    return data.map((repo: any) => ({
      name: repo.name || 'Untitled',
      description: repo.description || 'No description provided.',
      html_url: repo.html_url || `https://github.com/roerohan/${repo.name}`,
      homepage: repo.homepage || null,
      topics: repo.topics || [],
      language: repo.language || null
    }));
  } catch (error) {
    console.error('Error fetching from BerrySauce:', error);
    return null;
  }
}

async function getReposFromGitHub() {
  try {
    const response = await fetch('https://api.github.com/users/roerohan/repos?sort=updated&per_page=6', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const repos = await response.json();
    
    return repos
      .filter((repo: any) => !repo.fork && repo.description)
      .map((repo: any) => ({
        name: repo.name,
        description: repo.description || 'No description provided.',
        html_url: repo.html_url,
        homepage: repo.homepage,
        topics: repo.topics || [],
        language: repo.language
      }))
      .slice(0, 6);
  } catch (error) {
    console.error('Error fetching from GitHub:', error);
    return [];
  }
}

export default async function GitHubProjects() {
  try {
    // First try to get pinned repos from berry sauce
    let projects = await getPinnedReposFromBerrySauce();
    
    // If that fails, fall back to GitHub API
    if (!projects || projects.length === 0) {
      projects = await getReposFromGitHub();
    }

    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects ? projects.map((project) => (
          <ProjectCard
            key={project.name}
            title={project.name}
            description={project.description}
            tags={[
              project.language,
              ...project.topics.slice(0, 3) // Limit to 3 topics + language
            ].filter(Boolean) as string[]}
            githubUrl={project.html_url}
            liveUrl={project.homepage || undefined}
          />
        )) : 'Unable to load projects at this time.'}
      </div>
    );
  } catch (error) {
    console.error('Error fetching GitHub projects:', error);
    return (
      <div className="text-center py-8">
        <p className="text-zinc-400">Unable to load projects. Please try again later.</p>
      </div>
    );
  }
}
