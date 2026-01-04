import { ButtonHTMLAttributes, forwardRef, ReactElement } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, asChild, ...props }, ref) => {
    const baseClasses = cn(
      "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2",
      {
        "bg-primary text-white hover:opacity-90 focus:ring-primary": variant === "primary",
        "bg-secondary text-white hover:opacity-90 focus:ring-secondary": variant === "secondary",
        "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-white focus:ring-primary": variant === "outline",
        "py-2 px-4 text-sm": size === "sm",
        "py-3 px-6 text-base": size === "md",
        "py-4 px-8 text-lg": size === "lg",
      },
      className
    );

    const style = {
      borderRadius: "var(--radius)",
    };

    if (asChild && typeof children === "object" && children !== null && "type" in children) {
      const child = children as ReactElement;
      if (child.type === Link) {
        return (
          <Link
            {...(child.props as any)}
            className={cn(baseClasses, child.props.className)}
            style={style}
          >
            {child.props.children}
          </Link>
        );
      }
    }

    return (
      <button
        ref={ref}
        className={baseClasses}
        style={style}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;

