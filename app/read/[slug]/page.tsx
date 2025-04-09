import { ReadHeader } from '@/components/PostHeader';
import { ReadingPost } from '@/types';
import { Newsletter } from '@/components/Newsletter';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { BlogCard } from '@/components/Card';
import { GetAllPosts, GetPost
  //  RelatedPosts
   } from '@/data';
import { Asterisk } from 'lucide-react';
const postsData = await GetAllPosts();
export const generateStaticParams = async () =>  postsData.map((post) => ({ slug: post.category }))

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {

  const slug = (await params).slug

  const post = await GetPost(slug)
  
  if (!post) {
    notFound()
  }

  return { title: post.title }

}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  const post = await GetPost(slug)
  if (post === undefined) {
    notFound()
  }

  return (
    <>
      {post && <ReadHeader item={post} />}

      {post?.imageurl && <div className="my-10  relative aspect-[4/3] overflow-hidden">
        <Image
          src={post.imageurl}
          alt={post.title}
          className="object-fill"
          fill
          sizes="(max-width: 768px) 100vw, 40vw"
        />
      </div>
      }
     <article
    className="px-6 container mx-auto max-w-6xl prose dark:prose-invert lg:prose-xl"
    dangerouslySetInnerHTML={{ __html: String(post.content) }}
  />

      <div className="my-10 flex w-full items-center rounded-full">
        <div className="flex-1 border-b border-fd-border"></div>
        <span className=" flex flex-row text-lg font-semibold leading-8 px-8 py-3"> <Asterisk /> <Asterisk /> <Asterisk /> </span>
        <div className="flex-1 border-b border-fd-border"></div>
      </div>


      {/* {
        getRelatedPosts.length !== 0 && <div className="mt-28 mx-auto container">
          <h1 className="text-3xl font-extrabold lg:text-6xl"> Related Posts </h1>
          {
            getRelatedPosts?.map(
              (item) => {
                return <BlogCard key={item.id} item={item} />
              }
            )
          }
        </div>
      } */}
    </>
  );
}

