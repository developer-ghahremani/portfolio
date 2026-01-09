import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface Props {
  className?: string;
  size?: "default" | "sm" | "lg";
  children: ReactNode;
  buttonElements?: ButtonHTMLAttributes<{}>;
}

const AppButton = ({ className, size = "default", children, buttonElements }: Props) => {
  const baseClasses =
    "relative cursor-pointer overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";
  const sizeClasses: { sm: string; default: string; lg: string } = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button className={classes} {...buttonElements}>
      <span className="relative flex items-center justify-center gap-2">{children}</span>
    </button>
  );
};

export default AppButton;
