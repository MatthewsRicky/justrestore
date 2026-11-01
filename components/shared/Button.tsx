import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "light";
  showArrow?: boolean;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  onClick?: () => void;
};

const variants = {
  primary: "bg-ink text-ivory hover:bg-terracotta",
  secondary:
    "border border-ink/30 text-ink hover:border-terracotta hover:text-terracotta",
  light: "bg-ivory text-ink hover:bg-ochre",
};

export default function Button({
  children,
  href,
  variant = "primary",
  showArrow = true,
  className = "",
  type = "button",
  disabled = false,
  onClick,
}: ButtonProps) {
  const classes = `group inline-flex items-center justify-center gap-4 px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.13em] transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-50 ${variants[variant]} ${className}`;

  const content = (
    <>
      {children}

      {showArrow && (
        <ArrowUpRight
          size={16}
          className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
        />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={classes}
    >
      {content}
    </button>
  );
}
