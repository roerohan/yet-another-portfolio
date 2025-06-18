import BlogPostCard from "./blog-post-card";

interface BlogPost {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  slug: string;
}

interface BlogPostData {
  result: {
    data: {
      allMarkdownRemark: {
        nodes: Array<{
          excerpt: string;
          fields: {
            slug: string;
          };
          frontmatter: {
            title: string;
            date: string;
            description?: string;
            category?: string;
          };
        }>;
      };
    };
  };
}

export default async function LatestBlogPosts() {
  try {
    const response = await fetch('https://blog.roerohan.com/page-data/index/page-data.json', {
      next: { revalidate: 3600 } // Cache for 1 hour
    });

    let posts: BlogPost[] = [];

    if (response.ok) {
      const data: BlogPostData = await response.json();
      
      // Get the first 3 posts
      const latestPosts = data.result.data.allMarkdownRemark.nodes.slice(0, 3);
      
      posts = latestPosts.map(post => ({
        title: post.frontmatter.title,
        excerpt: post.excerpt || post.frontmatter.description || '',
        date: post.frontmatter.date,
        category: post.frontmatter.category || 'General',
        slug: post.fields.slug
      }));
    } else {
      // Fallback to default posts if the API call fails
      posts = [
        {
          title: "Building Secure WebRTC Applications",
          excerpt: "Best practices for securing your WebRTC applications against common vulnerabilities",
          date: "May 15, 2023",
          category: "Security",
          slug: "#"
        },
        {
          title: "From Startup to Acquisition: The Dyte Journey",
          excerpt: "Lessons learned from founding a YC startup and joining Cloudflare",
          date: "March 22, 2023",
          category: "Startup",
          slug: "#"
        },
        {
          title: "Edge Computing: The Future of Web Performance",
          excerpt: "How Cloudflare Workers are changing the landscape of web application architecture",
          date: "January 10, 2023",
          category: "Technology",
          slug: "#"
        }
      ];
    }

    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <BlogPostCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            category={post.category}
            slug={post.slug}
          />
        ))}
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return (
      <div className="text-center py-8">
        <p className="text-zinc-400">Unable to load blog posts. Please try again later.</p>
      </div>
    );
  }
}
