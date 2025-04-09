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
            src="https://lalitbansal2004.s3.us-east-1.amazonaws.com/my_img.jpg"
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
