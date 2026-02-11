import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";



type StarRatingProps = {
    rating: number;
};

export function StarRating({ rating}: StarRatingProps){
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
return(
    <div className="flex gap-1 text-yellow-400">
        {[...Array(fullStars)].map((_, i) => (
            <FaStar key={`full-${i}`}/>
        ))}

        {hasHalfStar && <FaStarHalfAlt/>}
        {[...Array(emptyStars)].map((_, i)=> (
            <FaRegStar key={`empty-${i}`} />
        ))}

    </div>
)


}