import type { Post, ReadingPost } from "@/types";

function slugify(slug: string) {
  return slug.toLowerCase().trim().split(" ").join("-");
}

// Home Page
export async function GetAllPosts(): Promise<Post[]> {
  const res = await fetch("https://blog-backend-3lxt.onrender.com/api/blogList", {
    cache: "no-store", // ensures fresh fetch
  });
  const allPosts: Post[] = await res.json();
  return allPosts;
}

// Read Page
export async function GetPost(slug: string): Promise<ReadingPost> {
  const res = await fetch(`https://blog-backend-3lxt.onrender.com/api/blog/${slug}`, {
    cache: "no-store",
  });
  const post: ReadingPost = await res.json();
  return post;
}

// Tag Page - Posts by Tag
export async function GetTagsPost(slug: string): Promise<Post[]> {
  const allPosts = await GetAllPosts();
  const tagPosts = allPosts.filter(
    (post) =>
      post.category &&
      slugify(post.category) === slug
  );
  return tagPosts;
}

// Tag Page - List of Tags
export async function GetTags(): Promise<{ slug: string }[]> {
  const allPosts = await GetAllPosts();
  const tagSet = new Set<string>();

  allPosts.forEach((post) => {
    if (post.category) {
      tagSet.add(slugify(post.category));
    }
  });

  return Array.from(tagSet).map((tag) => ({ slug: tag }));
}
