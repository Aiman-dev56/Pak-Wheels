import { useState } from "react";



interface ReviewType {
    id: string;
    user: string;
    message: string;
    rating: number;
    createdAt : string;
}

interface ReviewFromProps {
    onSubmit : (review: ReviewType) => void;
}


export default function ReviewForm({ onSubmit } : ReviewFromProps) {
  const [message, setMessage] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!message || rating === 0) return;

  const newReview : ReviewType = {
    id: Date.now().toString(),
    user: "User",
    message,
    rating,
    createdAt: new Date().toISOString(),
  };

  onSubmit(newReview);

    setMessage("");
    setRating(0);
  };

  return (
    <div>
         <div className=" p-4 max-w-3xl">
         <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Write your review..."
        rows={4}
        className="w-full p-3 border rounded-lg  resize-none"
      />

      {/* Rating Stars */}
      <div className=" gap-2 m-6 text-4xl cursor-pointer">
       
        {[1,2,3,4,5].map((star) => (
          <span
            key={star}
            onClick={() => setRating(star)}
            className={star <= rating ? "text-yellow-500" : "text-gray-300" }
          >
            ★
          </span>
        ))}
      </div>

     
      

      {/* Button */}
      <div className="flex justify-end ">
         <button
        onClick={handleSubmit}
        className="flex bg-orange-500 text-sm w-90 mt-8 justify-center text-white max-w-8xl px-18 py-4 rounded-lg cursor-pointer  "
      >
        Submit 
      </button>
      </div>
     
    </div>
    
    </div>
    
   
    
    
  );
}