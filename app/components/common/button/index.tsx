// button common

"use client";

import React from "react";
import Link from "next/link";

type Variant = "default" | "pill";

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  variant?: Variant;
}

export const Button = ({
  children,
  className = "",
  href,
  onClick,
  disabled = false,
  type = "button",
  variant = "default",
}: ButtonProps) => {
  const base =
    "inline-flex items-center justify-center px-10  py-2  text-sm sm:text-base border border-gray-300 focus:outline-none hover:opacity-80 transition-colors";

  const variants = {
    default: "rounded-md ",
    pill: "rounded-full",
  };

  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed" : "";

  const finalClassName = `${base} ${variants[variant]} ${disabledClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} className={finalClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={finalClassName}>
      {children}
    </button>
  );
};
