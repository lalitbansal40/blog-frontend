import React from "react";
import Link from 'next/link';
import { Card, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import type { Post } from "@/types";
import { ChevronLeft, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ReadHeader({ item }: { item: Post }) {
  return (
    <Card className="max-w-6xl border-none shadow-none flex flex-col mx-auto mt-12">
      <CardContent>
        <div className="flex flex-row items-center text-center mb-3">
          <Button className='rounded-2xl' asChild>
            <Link href="/">
              <ChevronLeft /> Back
            </Link>
          </Button>

          <Button variant="link" className="!px-0 font-bold" asChild>
            <Link className="capitalize" href={`/tag/${item.category}`}>
              <Tag /> {item.category}
            </Link>
          </Button>
        </div>

        <CardTitle className="text-3xl font-extrabold lg:text-6xl">
          {item.title}
        </CardTitle>

        <CardDescription className="mt-4 font-semibold  text-xl">
          {item.description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}
