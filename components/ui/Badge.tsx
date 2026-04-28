"use client";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "secondary" | "earth";
  className?: string;
}

export function Badge({ children, variant = "primary", className = "" }: BadgeProps) {
  const variantClasses = {
    primary: "bg-carbon/8 text-carbon border border-carbon/12",
    accent: "bg-earth/12 text-earth border border-earth/25",
    secondary: "bg-stone/8 text-stone border border-stone/15",
    earth: "bg-earth/10 text-earth",
  };

  return (
    <span className={`text-label inline-block px-3 py-1.5 rounded-full ${variantClasses[variant]} ${className}`}>
      {children}
    </span>
  );
}
