"use client";

import { motion } from "framer-motion";
import React from "react";

interface ButtonProps {
  variant?: "primary" | "secondary" | "accent" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  className,
  href,
  onClick,
  disabled = false,
  type = "button",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 font-medium text-label transition-all duration-300 ease-out relative overflow-hidden group";

  const variantClasses = {
    primary: "btn-base btn-primary",
    secondary: "btn-base btn-secondary",
    accent: "btn-base btn-accent",
    ghost: "btn-base",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className || ""}`;

  const content = (
    <motion.div
      className="flex items-center justify-center gap-2"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <motion.a href={href} className={classes}>
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {content}
    </motion.button>
  );
}
