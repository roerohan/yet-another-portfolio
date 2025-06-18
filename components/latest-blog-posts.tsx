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
        category: post.frontmatter.category ?? 'Blog Post',
        slug: `/blog/${post.fields.slug}`,
      }));
    } else {
      // Fallback to default posts if the API call fails
      posts = [
        {
          title: "The setup that keeps me sane as a developer",
          excerpt: "I have a borderline obsession with good dev setups. The right tools don’t just make me faster, they keep me from slowly losing my mind. This…",
          date: "April 04, 2025",
          category: "Tech",
          slug: "/blog/the-setup-that-keeps-me-sane-as-a-developer"
        },
        {
          title: "How to Protect Yourself Online",
          excerpt: "Even the most intelligent individuals may find themselves outsmarted under stress, as the pressure of the moment can cloud judgment and…",
          date: "March 03, 2024",
          category: "General",
          slug: "/blog/how-to-protect-yourself-online"
        },
        {
          title: "Type fast, and master your text editor",
          excerpt: "Whether you're a software developer or a technical writer, your primary job is to edit text. It is surprising that most people whose jobs…",
          date: "October 25, 2023",
          category: "Technology",
          slug: "/blog/type-fast-and-master-your-text-editor"
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
