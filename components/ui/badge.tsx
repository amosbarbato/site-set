import type { ComponentProps } from "react";
import { cva, cx, type VariantProps } from "class-variance-authority";

export const badgeVariants = cva(
  "inline-block rounded-md text-xs uppercase px-3 py-1.5 w-fit",
  {
    variants: {
      variant: {
        primary: "bg-blue-400 text-blue-200",
        secondary: "bg-cyan-300 text-cyan-100",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

interface BadgeProps
  extends VariantProps<typeof badgeVariants>,
    ComponentProps<"div"> {}

export default function Badge({
  className,
  variant,
  children,
  ...props
}: BadgeProps) {
  return (
    <div className={cx(badgeVariants({ variant }), className)} {...props}>
      <span className="font-semibold">{children}</span>
    </div>
  );
}
