"use client";

import { motion } from "framer-motion";
import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "elevated" | "minimal" | "dark";
  interactive?: boolean;
  href?: string;
}

export function Card({ children, className = "", variant = "elevated", interactive = true, href }: CardProps) {
  const variantClasses = {
    elevated: "bg-cream border border-mist shadow-sm hover:shadow-md",
    minimal: "bg-transparent border-b border-mist/30",
    dark: "bg-carbon/40 border border-mist/8 backdrop-blur-sm",
  };

  const Component = href ? "a" : "div";

  return (
    <motion.div whileHover={interactive ? { y: -2 } : {}} transition={{ duration: 0.3 }}>
      <Component
        href={href}
        className={`
          ${variantClasses[variant]}
          p-6 lg:p-8
          rounded-sm
          transition-all duration-300
          ${interactive ? "cursor-pointer" : ""}
          ${className}
        `}
      >
        {children}
      </Component>
    </motion.div>
  );
}
