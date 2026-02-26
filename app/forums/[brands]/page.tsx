"use client"; // <-- MUST be at the very top

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import AuthModal from "@/app/components/auth/AuthModel";
import { useAuth } from "@/app/context/AuthContext";
import { FaArrowLeft } from "react-icons/fa";
import { Typography } from "@/app/components/common/Typography";
import Avator from "@/app/components/common/Avatar";
import { IoIosSend } from "react-icons/io";
import { Footer } from "@/app/components/Footer";

interface CommentType {
  id: string;
  message: string;
  user: string;
  createdAt: string;
}


const defaultComments: CommentType[] = [
  { id: "1", message: "This brand has really good performance!", user: "Admin", createdAt: "2026-02-20 10:00" },
  { id: "2", message: "I love their latest model.", user: "Admin", createdAt: "2026-02-19 14:30" },
];

export default function BrandForumPage() {
  const params = useParams();
const brand = Array.isArray(params.brands)
  ? params.brands[0]
  : params.brands;
  const router = useRouter(); 
  const { user } = useAuth();

  const [comments, setComments] = useState<CommentType[]>([]);
  const [newComment, setNewComment] = useState("");
  const [openAuth, setOpenAuth] = useState(false);

  // Load user-added comments from localStorage
  useEffect(() => {
    const saved = localStorage.getItem(`forums-${brand}`);
    if (saved) setComments(JSON.parse(saved));
  }, [brand]);

  const saveComments = (updated: CommentType[]) => {
    localStorage.setItem(`forums-${brand}`, JSON.stringify(updated));
  };

  const handleAddComment = () => {
    if (!user) {
      setOpenAuth(true);
      return;
    }
    if (!newComment.trim()) return;

    const newEntry: CommentType = {
      id: crypto.randomUUID(),
      message: newComment,
      user: user.name,
      createdAt: new Date().toLocaleString(),
    };

    const updated = [...comments, newEntry];
    setComments(updated);
    saveComments(updated);
    setNewComment("");
  };

  const displayedComments = [...defaultComments, ...comments];

  return (
    <div>
      <div className="container mt-10 lg:mt-0 lg:p-6 lg:pl-16 lg:pr-80 lg:max-w-5xl ">
      <div className="lg:p-10 p-4">
         <button
        className="mb-8 text-gray-600 cursor-pointer "
        onClick={() => router.push("/forums")} 
      >
        <FaArrowLeft size={20}/>
      </button>

      <h1 className="text-3xl mb-6 capitalize font-light">{brand}</h1>

      <Typography variant="h5light" className="mt-8 mb-8">All discussion related to {brand} cars goes into this section. Find solution to your problems, ask questions and talk about your {brand} cars, all in one place.</Typography>
      </div>


      <div className="mt-4 lg:ml-16 ml-8 space-y-4">
        <Typography variant="h2" className="!font-normal">Clients Replies </Typography>
        {displayedComments.length === 0 ? (
          <p className="text-gray-500">No comments yet. Be the first to comment!</p>
        ) : (
          displayedComments
            .slice()
            .reverse()
            .map((comment) => (
              <div key={comment.id} className="lg:p-8 p-6 ">
                <div className="flex items-center gap-2">
                  <Avator name={comment.user} size={40}/>
                  <div className="flex flex-col">
                    <p>{comment.user}</p>
                    <p className="text-gray-500 text-sm">{comment.createdAt}</p></div>
                  
                </div>
                
                <p className="mt-8 text-sm font-light">{comment.message}</p>
              </div>
            ))
        )}
      </div>
  <div className="w-full bg-white   sm:p-4">
  <div className="max-w-3xl">

    <div className="relative w-full">

      {/* Textarea */}
      <textarea
        rows={1}
        className="w-full resize-none rounded-md border bg-gray-100 px-5 py-3 pr-14 sm:py-4 text-sm sm:text-base"
        placeholder={
          user
            ? "Type a message..."
            : "Login to post a comment..."
        }
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        disabled={!user}
      />

      {/* Send Icon Inside */}
      <button
        onClick={handleAddComment}
        disabled={!user}
        className="absolute right-2 top-1/2 -translate-y-1/2
                   text-blue-700 rounded-md
                   w-9 h-9 sm:w-11 sm:h-11
                   flex items-center justify-center
                   transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        <IoIosSend size={36} />
      </button>

    </div>

  </div>

  <AuthModal isOpen={openAuth} onClose={() => setOpenAuth(false)} />
</div>

     
     

      
    </div>
    <Footer />
    </div>
    
  );
}