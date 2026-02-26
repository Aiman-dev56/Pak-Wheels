"use client"

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "@/app/context/AuthContext";
import AuthModal from "@/app/components/auth/AuthModel";
import { Typography } from "@/app/components/common/Typography";
import { FaArrowLeft } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { reviewedCars, reviewedBikes } from "../page";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/app/components/common/shadecn/ui/breadcrumb";
import Image from "next/image";
import { StarRating } from "@/app/components/Home/reviewed/StarRating";
import Avator from "@/app/components/common/Avatar";
import { IoMdTime } from "react-icons/io";
import ReviewForm from "@/app/components/common/Textarea";
import { Footer } from "@/app/components/Footer";




interface ReviewType {
    id: string;
    message: string;
    user: string;
    createdAt: string;
    rating: number;
}



const generateSlug = (title: string) =>
    title.toLowerCase().replace(/\s+/g, "-");

export default function ReviewPage() {
    const params = useParams();
    const slug = params.slug as string;
    const { user } = useAuth();
    const router = useRouter();
    const [openAuth, setOpenAuth] = useState(false);

    const [reviews, setReviews] = useState<ReviewType[]>([]);
    const [newReviews, setNewReview] = useState("");

    const isCar = reviewedCars.some(
        (item) => generateSlug(item.title) === slug
    );

    const categoryName = isCar
        ? "Popular Car Reviews"
        : "Popular Bike Reviews";



    const allProducts = [...reviewedCars, ...reviewedBikes];
    const product = allProducts.find(
        (item) => generateSlug(item.title) === slug
    );
    if (!product) return <p>Product Not Found</p>;
    console.log("url slug:", slug);
    console.log("Generated slugs:", allProducts.map(p => ({ title: p.title, generated: generateSlug(p.title) })));




    useEffect(() => {
        if (!slug || !product) return;

        const staticReviews = product?.reviews || [];

        const stored = localStorage.getItem(`reviews-${slug}`);
        const userReviews: ReviewType[] = stored ? JSON.parse(stored) : [];

        const merged: ReviewType[] = [...staticReviews, ...userReviews];

        merged.sort(
            (a, b) =>
                new Date(b.createdAt).getTime() -
                new Date(a.createdAt).getTime()
        );

        setReviews(merged);
    }, [slug, product]);

    const totalReviews = reviews.length;

    const averageRating = totalReviews > 0 ? reviews.reduce((acc, item) => acc + item.rating, 0) / totalReviews : 0;

    const handleReview = () => {
        if (!user) {
            setOpenAuth(true);
            return;
        }

        if (!newReviews.trim()) return;

        const review: ReviewType = {
            id: Date.now().toString(),
            message: newReviews,
            user: user.name,
            createdAt: new Date().toLocaleString(),
            rating: averageRating,
        }
        const updatedReview = [review, ...reviews];
        setReviews(updatedReview);
        localStorage.setItem(`reviews-${slug}`, JSON.stringify(updatedReview));
        setNewReview("");
    };

    return (
        <>
            <div className="min-h-screen bg-gray-50">

                <button
                    className="mt-8 lg:ml-24 ml-4 text-gray-600 cursor-pointer "
                    onClick={() => router.push("/pages/reviews")}
                >
                    <FaArrowLeft size={20} />
                </button>

                <div className="mt-6 hidden lg:block lg:ml-24">
                    <Breadcrumb>
                        <BreadcrumbList>
                            <BreadcrumbItem>
                                <BreadcrumbLink href="/" className="text-[18px]">Home</BreadcrumbLink>
                            </BreadcrumbItem>
                            <BreadcrumbSeparator />
                            <BreadcrumbItem>
                                <BreadcrumbPage className="text-[18px]">  {categoryName}</BreadcrumbPage>
                            </BreadcrumbItem>
                        </BreadcrumbList>
                    </Breadcrumb>
                </div>

                {/* Header */}
                <div className="lg:ml-18">
                    <Typography variant="h1" className="!text-2xl !font-light  m-6">
                        Reviews for {product?.title}
                    </Typography>

                    <Typography variant="p" className="text-sm mt-8 ml-6">GWM adheres to its corporate social responsibility and adheres to its commitments. This includes user focus and service focus. Good employment relations and excellent work environment We are constantly improving our technical performance and improving our products. open to new technologies new tools and new ideas to create new experiences based on these as well as promoting and supporting technological innovation in all forms.</Typography>

                    <div className="lg:block hidden lg:flex-row max-w-2xl mt-18 mb-8 ">
                        <Image

                            src={product.image}
                            alt={product.title}
                            width={400}
                            height={400}
                        />


                        <Typography variant="h3" className="m-4 mt-10 !text-2xl">{product?.title}</Typography>
                        {totalReviews > 0 ? (
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-yellow-500 font-bold text-lg">
                                    ⭐ {averageRating}
                                </span>
                                <span className="text-gray-500">
                                    ({totalReviews} Reviews)
                                </span>
                            </div>
                        ) : (
                            <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                                No Reviews Yet
                            </span>
                        )}

                    </div>
                    <div className="md:block lg:hidden m-10">
                         <Typography variant="h3" className="m-4 mt-10 !text-2xl">{product?.title}</Typography>
                          {totalReviews > 0 ? (
                            <div className="flex items-center gap-30 ml-5 mt-8">
                                <span className="text-yellow-500 font-bold text-lg">
                                    <StarRating rating={Number(averageRating)} /> 
                                </span>
                                <span className="text-gray-500">
                                    ({totalReviews} Reviews)
                                </span>
                            </div>
                        ) : (
                            <span className="text-sm bg-gray-200 px-3 py-1 rounded-full">
                                No Reviews Yet
                            </span>
                        )}
                          <Image

                            src={product.image}
                            alt={product.title}
                            width={400}
                            height={400}
                            className="mt-20"
                        />

                    </div>


                    

                    {/* Reviews List */}
                    <div className="space-y-4 mb-10">
                        {reviews.length === 0 && (
                            <p className="text-gray-500">No reviews yet.</p>
                        )}

                        {reviews.map((review) => (
                            <div
                                key={review.id}
                                className="p-8 gap-6 flex "
                            >
                                <div>
                                    <Avator name={review.user} className="mt-5" />
                                </div>
                                <div className="flex flex-col justify-between mb-2">
                                    <h3 className="font-semibold mb-2">{review.user}</h3>
                                    <StarRating rating={Number(averageRating)}
                                 /> 
                                    <span className="text-sm text-gray-400 mt-4 flex gap-2">
                                       <IoMdTime size={20}/> {review.createdAt}
                                    </span>
                                    <p className="text-gray-700 mt-4">{review.message}</p>
                                </div>
                                
                            </div>
                        ))}
                    </div>

                    {/* Review Input */}
                    <div className=" m-4">
                        

<ReviewForm onSubmit={handleReview}/>

                       
                            
                    </div>
                </div>

                {/* Auth Modal */}
                <AuthModal
                    isOpen={openAuth}
                    onClose={() => setOpenAuth(false)}
                />
            </div>
            <Footer/>
        </>
    )
}