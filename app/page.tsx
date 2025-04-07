import { BlogCard } from "@/components/Card";
import { Hero } from "@/components/Hero";
import { Metadata } from 'next';
import { Post } from "@/types"
import {  GetAllPosts } from "@/data";

export const metadata: Metadata = {
  title: "Home | AllTypeBlogs",
  description: "AllTypeBlogs is an open-source nextjs blog template design with tailwind CSS.",
};


export default async function Page() {
  const posts:Post[] = GetAllPosts();
  return (
    <>
      <Hero />
      <main className='container mx-auto flex flex-col p-3'>

        <p className="text-4xl inline font-bold text-left ml-0  sm:ml-0 md:ml-10 lg:ml-10 xl:ml-10 2xl:ml-24  my-16 leading-[normal]">
          All posts
        </p>
        <div className="mx-auto container">
          {
            posts?.map(
              (item) => {
                return <BlogCard key={item._id} item={item} />
              }
            )
          }
        </div>
      </main>

    </>
  )
}
