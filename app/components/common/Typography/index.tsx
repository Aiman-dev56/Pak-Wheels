import React, { type ElementType } from "react";
import { cn } from "@/app/lib/utils";

type Variant =
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "h5"
  | "h5bold"
  | "h5light"
  | "h6"
  | "p"
  | "span"
  | "label"
  | "bodyregular"
  | "bodysmall"
  | "bodymedium"
  | "extrasmallregular"
  | "extrasmallmedium"
  | "extrasmallbold";

const tags: Record<Variant, ElementType> = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h5bold: "h5",
  h5light: "h5",
  h6:  "h6",
  p: "p",
  span: "span",
  label: "label",
  bodyregular: "p",
  bodysmall: "p",
  bodymedium: "p",
  extrasmallregular: "span",
  extrasmallmedium: "span",
  extrasmallbold: "span",
};

const sizes: Record<Variant, string> = {
  h1: "2xl:text-5xl lg:text-4xl first-letter:uppercase md:text-3xl text-2xl font-semibold",
  h2: "lg:text-4xl text-3xl first-letter:uppercase font-semibold",
  h3: "lg:text-2xl  text-2xl first-letter:uppercase font-medium",
  h4: "lg:text-2xl text-xl first-letter:uppercase font-medium",
  h5: "lg:text-xl text-lg first-letter:uppercase font-medium",
  h5bold: "lg:text-[17px] text-lg first-letter:uppercase font-semibold",
  h5light: "lg:text-[17px] text-lg font-light",
  h6: "lg:text-[16px]",
  p: "text-base font-normal lg:text-sm",
  span: "text-base font-normal",
  label: "text-sm font-medium",
  bodyregular: "text-base font-normal",
  bodymedium: "text-base font-medium",
  bodysmall: "text-sm font-normal",
  extrasmallregular: "text-xs font-normal",
  extrasmallmedium: "text-xs font-medium",
  extrasmallbold: "text-xs font-bold",
};

interface Props {
  variant?: Variant; // ✅ optional
  children: React.ReactNode;
  className?: string;
  as?: ElementType;
}

export const Typography = ({
  variant = "bodyregular",
  children,
  className = "",
  as,
}: Props): React.ReactElement => {
  const Tag = as ?? tags[variant];

  return (
    <Tag className={cn`${sizes[variant]} ${className}`}>
      {children}
    </Tag>
  );
};
