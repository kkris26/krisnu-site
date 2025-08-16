"use client";

import React from "react";
import clsx from "clsx";

export default function AnimatedButton({
  children,
  className,
  underline,
}: {
  children: React.ReactNode;
  className?: string;
  underline?: boolean;
}) {
  return (
    <span
      className={clsx(
        "relative inline-block px-1 py-2 font-medium group overflow-hidden",
        className
      )}
    >
      <span className="relative block h-auto overflow-hidden">
        <span className="block transition-transform duration-500 ease-in-out group-hover:-translate-y-full">
          {children}
        </span>
        <span className="block absolute inset-0 translate-y-full transition-transform duration-500 ease-in-out group-hover:translate-y-0">
          {children}
        </span>
      </span>
      {underline && (
        <span className="flex h-[0.1px] -mb-1 w-0 bg-current transition-all duration-500 ease-in-out group-hover:w-full" />
      )}
    </span>
  );
}
