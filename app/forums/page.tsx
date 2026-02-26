"use client";

import Link from "next/link";
import { IoCarSport } from "react-icons/io5";
import { Typography } from "@/app/components/common/Typography";
import { Footer } from "../components/Footer";

interface ForumDataType {
  brand: string;
  updatedAt: string;
  commentsCount: number;
}

const forumData: ForumDataType[] = [
  { brand: "Toyota", updatedAt: "2026-02-16", commentsCount: 3 },
  { brand: "BMW", updatedAt: "2026-02-15", commentsCount: 5 },
  { brand: "Audi", updatedAt: "2026-02-14", commentsCount: 2 },
  { brand: "Honda", updatedAt: "2026-02-13", commentsCount: 4 },
];

export default function ForumsPage() {
  return (
    <div>
       <div className="p-10 max-w-4xl mx-auto">
      <Typography variant="h1" className="text-3xl font-bold mb-8">
        Forums
      </Typography>

      <div className="flex flex-col gap-6">
        {forumData.map((forum) => (
          <Link
            key={forum.brand}
            href={`/forums/${forum.brand.toLowerCase()}`}
            className="flex justify-between items-center bg-gray-50 p-6 rounded-lg border hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="p-4 rounded-full border-2 border-gray-300">
                <IoCarSport size={30} className="text-orange-500" />
              </div>
              <div className="flex flex-col">
                <Typography variant="h5light">{forum.brand}</Typography>
                <Typography variant="p" className="text-gray-500">
                  Last Activity: {forum.updatedAt}
                </Typography>
              </div>
            </div>

            <Typography variant="h5light">
              {forum.commentsCount} Replies
            </Typography>
          </Link>
        ))}
      </div>
     
    </div>
     <Footer />
    </div>
   
  );
}
