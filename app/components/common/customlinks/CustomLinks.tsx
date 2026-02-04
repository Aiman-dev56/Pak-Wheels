// custom links component

"use client";

import Link from "next/link";


type customLinksProps = {
    href: string;
    text: string;
    fontSize?: string;
    fontWeight?: string;
    color?: string;
    className?: string;
}


export default function CustomLinks({
    href,
    text,
    fontSize = "20px",
    fontWeight = "400",
    color = "black",
    className = "",
} : customLinksProps){
    return(
        <Link href={href}
        className={`${fontSize} ${fontWeight} ${color} ${className}`}>
            {text}
        </Link>
    )
}