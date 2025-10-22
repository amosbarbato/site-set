import type { ComponentProps } from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";

export const buttonVariants = cva(
  "flex items-center gap-2 justify-center font-medium text-sm rounded-full cursor-pointer transition-colors duration-300",
  {
    variants: {
      variant: {
        primary: "bg-blue-300 hover:bg-blue-200",
        secondary: "bg-gray-100 text-gray-800 hover:bg-blue-100",
        outline:
          "border border-gray-400 bg-gray-700 hover:text-blue-200 hover:border-blue-200",
        menu: "bg-gray-400 text-gray-100 hover:text-blue-300",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

interface ButtonProps
  extends VariantProps<typeof buttonVariants>,
    Omit<ComponentProps<"button">, "size"> {}

export default function Button({
  className,
  variant,
  size,
  type = "button",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
}
