import React from 'react';
import Link from 'next/link';
import { Card, CardTitle, CardContent } from "@/components/ui/card";
import { Asterisk, ChevronLeft } from "lucide-react";
import { Button } from '@/components/ui/button';
import { Newsletter } from '@/components/Newsletter';

// pages 
const pages = [{ slug: "about" }]

export function generateStaticParams() {
  return pages
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {

  const slug = (await params).slug

  return { title: slug }

}
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {

  const slug = (await params).slug
  const getTitle = slug?.trim().replaceAll("-", " ");

  return (
    <>
 <div className="min-h-screen bg-[hsl(var(--background))] text-white px-6 py-12 flex flex-col items-center">
      <div className="max-w-4xl w-full space-y-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        <p className="text-lg leading-relaxed text-gray-300">
          Welcome to <span className="text-white font-semibold">AllTypesBlogs</span> – your ultimate destination for diverse, high-quality content. 
          Whether you're into tech, lifestyle, travel, wellness, finance, or food, we’ve got you covered. 
          Our mission is to inspire, inform, and empower readers through a wide range of thoughtful, engaging blogs.
        </p>

        <div className="rounded-2xl overflow-hidden shadow-lg">
          <img
            src="https://lalitbansal2004.s3.us-east-1.amazonaws.com/bloglistimages/image.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA5C5E627FAEYAYLPB%2F20250406%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250406T172323Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJGMEQCIGmKav%2F5W6GH4nU6qfnBB5rqfUqeomDDrqU4vZTTVLgiAiAzteUM6YD2WHi81DVrxXYF1tWgebIhMQo8NwBDsODsISrsAghLEAAaDDg5OTYwNDczMTg1MCIM3iL4NUciao%2BAjFNrKskCOXC0TyEHGYRUzJabNUBdPwSYT6xK8igw4ZLsWTPv3NIfPfQB3P8RJ8HpNjZsGHdnG0I%2Bc7ypxzYJ1LTCWVB8kvj%2BVd5GqEeeA3aDeqY1ufBrFy%2BdMIVxHdNW68fxA%2Bk1vi2t7U8lPiGFiBaNlkm9AkpBvF2NxVOmd9dHWYEFmamlFmV5yDvcqsv0yAX0rqNGydzPxf7jWqz3%2FjvZbsEdyhoqm5DTE6KOAdk1Sve4aaa1Uzzo8sKFSuvcoTzfcgzsPk%2BrZVmre9sHTixvCynhGRGWx2e1ZZSu3%2FQBYV2WO9ICjlCG4E3UU3%2FM3hSlzzgihKY6Hl0tal2xXiLrWcFrT6RRdw9gCt1eqgpNJ2l2%2B2Wpn8VpJuQS%2Bh3OZKP7aqlZSKgWXp3L5Um8P08OnIQBA3Nx5Wab4VULOIBAhzJszsTHVSYWyDraqYgwlp7KvwY6tAJj7M8%2FL%2B34Lr3elKT6VTNUApgZDpUEjG6WrR0DFBrV44ZYhr0%2BvCFBGhev6r5LyAGTeugsWiCTQdi2saRR6wpHUIDKqFhlQZThF79Irf9M0FXX0cA83qAR8bBYKjminYoApxZcBMEdTO22qmvXsS3FBPydxKVs34lfgb3wSzvEC9aDutm3rffaeKxg6S2HgI7Ey6GkcvO%2BD7qgxuOdIx8Kx8l0KIJCU5kWMBgZ3NLb4%2BZOcqZVCjGbf8lpkdFf5ZWg7n6TIieIFBum3XH%2FawPG4l3BPYwtCMLgOs2r9NJ0prHfiwak%2FnrMGH%2BarZRCXrVA%2FSb0cR2n45AlIA8TqXnORjBe2qHnKBxv3C2lpSDiFXZ%2B0IJiy4GpsxCyL3gvz5UKHKP3m2xMYxpCArG95BVK6RcSoA%3D%3D&X-Amz-Signature=ffe927b438cf38b396e0942038b923982f3ec1256945300754f1325ae45f5ddc&X-Amz-SignedHeaders=host&response-content-disposition=inline"
            alt="Team working together"
            className="w-full object-cover "
          />
        </div>

        <p className="text-lg leading-relaxed text-gray-300">
          <span className="text-white font-medium">AllTypesBlogs</span> is proudly owned and operated by a passionate team of creators and writers dedicated to bringing you content that matters. 
          We're not just a blog — we’re a community of storytellers, thinkers, and learners. 
          Our vision is to make knowledge accessible and enjoyable for everyone.
        </p>

        <p className="text-lg leading-relaxed text-gray-300">
          Thank you for being part of our journey. Whether you're a casual reader or a lifelong learner, we’re glad you're here.
        </p>
      </div>
    </div>
    </>
  );
}
