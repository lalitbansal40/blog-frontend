import type { Post, ReadingPost } from "@/types";

function slugify(slug: string) {
  return slug.toLowerCase().trim().split(" ").join("-")
}

const res = await fetch("https://blog-backend-3lxt.onrender.com/api/blogList");
const allPosts: Post[] = await res.json();

// Home Page
export function GetAllPosts() {
  return allPosts
}

// Read page 
export async function GetPost(slug: string) {
  const res = await fetch(`https://blog-backend-3lxt.onrender.com/api/blog/${slug}`);
  const post: ReadingPost = await res.json();
  return post as ReadingPost;
}

// export function RelatedPosts(tag: string, dontInclude: string) {
//   const RelatedPosts: Post[] = []

//   allPosts.map((post) => {
//     if (post.tags !== undefined) {
//       post.tags.filter(item => {
//         if (slugify(item) === slugify(tag)) {
//           if (dontInclude !== post.slug) {
//             RelatedPosts.push(post)
//           }
//         }
//       })
//     }
//   })
//   return RelatedPosts
// }
// Tag Page
export async function GetTagsPost(slug: string) {

  const TagPosts: Post[] = []

  allPosts.map((post) => {
    if (post.category !== undefined) {
      if (post.category.toLowerCase().trim().split(" ").join("-") === slug) {
        TagPosts.push(post)
      }
    }
  })

  return TagPosts

}
// Tag Page
export async function GetTags() {

  const TagsList: { slug: string; }[] = []

  allPosts.map((post) => {
    if (post.category !== undefined) {
      let formatTag = post.category.toLowerCase().trim().split(" ").join("-")
      if (formatTag) {
        TagsList.push({ slug: formatTag })
      }
    }
  })
  return TagsList
}
