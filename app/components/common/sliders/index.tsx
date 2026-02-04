"use client";

import React, { ReactNode, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


interface CommonSliderProps<T> {
    items: T[];
    renderItem: (item: T, index: number) => ReactNode;

    // layout
    spaceBetween?: number;

    // responsive slides
    slidesOnPhone?: number;
    slidesOnTablet?: number;
    slidesOnDesktop?: number;
    slidesOnLargeScreens?: number;

    // controls
    autoplay?: boolean;
    showPagination?: boolean;
    showButtons?: boolean;
    emptyMessage?: string;
}

export function CommonSlider<T>({
    items,
    renderItem,

    spaceBetween = 20,

    slidesOnPhone = 1,
    slidesOnTablet = 2,
    slidesOnDesktop = 4,
    slidesOnLargeScreens = 4,

    autoplay = false,
    showPagination = false,
    showButtons = true,

    emptyMessage = "No items found",
}: CommonSliderProps<T>) {
    const swiperRef = useRef<any>(null);

    if (!items || items.length === 0) {
        return (
            <div className="h-48 flex items-center justify-center text-gray-400">
                {emptyMessage}
            </div>
        );
    }

    return (
        <div className="relative w-full">
            <Swiper
                ref={swiperRef}
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={spaceBetween}
                autoplay={
                    autoplay
                        ? { delay: 3000, disableOnInteraction: false }
                        : false
                }
                pagination={showPagination ? { clickable: true } : false}
                breakpoints={{
                    395: { slidesPerView: slidesOnPhone },
                    750: { slidesPerView: slidesOnTablet },
                    1024: { slidesPerView: slidesOnDesktop },
                    1330: { slidesPerView: slidesOnLargeScreens },
                }}
            >
                {items.map((item, index) => (
                    <SwiperSlide key={index}>
                        {renderItem(item, index)}
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* ARROWS (generic, reusable) */}
            {showButtons && (
                <>
                    <button
                        onClick={() => swiperRef.current?.swiper.slidePrev()}
                        className="absolute left-[-1.5rem] top-1/2 -translate-y-1/2 z-40 bg-white h-12 w-12 rounded-full flex justify-center items-center"
                    >
                        <FaChevronLeft className="text-gray-500" />
                    </button>

                    <button
                        onClick={() => swiperRef.current?.swiper.slideNext()}
                        className="absolute right-[-1.5rem] top-1/2 -translate-y-1/2 z-40 bg-white h-12 w-12 rounded-full flex justify-center items-center"
                    >
                        <FaChevronRight className="text-gray-500" />
                    </button>
                </>
            )}
        </div>
    );
}
