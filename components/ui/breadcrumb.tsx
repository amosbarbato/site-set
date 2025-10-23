import {
  forwardRef,
  type ComponentPropsWithoutRef,
  type ComponentProps,
  type ReactNode,
} from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import { ChevronRight, MoreHorizontal } from "lucide-react";

const breadcrumbListVariants = cva(
  "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
);

const breadcrumbItemVariants = cva("inline-flex items-center gap-1.5");

const breadcrumbLinkVariants = cva("transition-colors hover:text-foreground");

const breadcrumbPageVariants = cva("font-normal text-foreground");

const breadcrumbSeparatorVariants = cva("[&>svg]:w-3.5 [&>svg]:h-3.5");

const breadcrumbEllipsisVariants = cva(
  "flex h-9 w-9 items-center justify-center",
);

const Breadcrumb = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<"nav"> & {
    separator?: ReactNode;
  }
>(({ ...props }, ref) => <nav ref={ref} {...props} aria-label="breadcrumb" />);
Breadcrumb.displayName = "Breadcrumb";

const BreadcrumbList = forwardRef<
  HTMLOListElement,
  ComponentPropsWithoutRef<"ol"> & VariantProps<typeof breadcrumbListVariants>
>(({ className, ...props }, ref) => (
  <ol ref={ref} className={breadcrumbListVariants({ className })} {...props} />
));
BreadcrumbList.displayName = "BreadcrumbList";

const BreadcrumbItem = forwardRef<
  HTMLLIElement,
  ComponentPropsWithoutRef<"li"> & VariantProps<typeof breadcrumbItemVariants>
>(({ className, ...props }, ref) => (
  <li ref={ref} className={breadcrumbItemVariants({ className })} {...props} />
));
BreadcrumbItem.displayName = "BreadcrumbItem";

const BreadcrumbLink = forwardRef<
  HTMLAnchorElement,
  ComponentPropsWithoutRef<"a"> &
    VariantProps<typeof breadcrumbLinkVariants> & {
      asChild?: boolean;
    }
>(({ asChild, className, ...props }, ref) => {
  const Comp = asChild ? Slot : "a";
  return (
    <Comp
      ref={ref}
      className={breadcrumbLinkVariants({ className })}
      {...props}
    />
  );
});
BreadcrumbLink.displayName = "BreadcrumbLink";

const BreadcrumbPage = forwardRef<
  HTMLSpanElement,
  ComponentPropsWithoutRef<"span"> & VariantProps<typeof breadcrumbPageVariants>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    role="link"
    aria-disabled="true"
    aria-current="page"
    className={breadcrumbPageVariants({ className })}
    {...props}
  />
));
BreadcrumbPage.displayName = "BreadcrumbPage";

const BreadcrumbSeparator = ({
  children,
  className,
  ...props
}: ComponentProps<"li"> & VariantProps<typeof breadcrumbSeparatorVariants>) => (
  <li
    role="presentation"
    aria-hidden="true"
    className={breadcrumbSeparatorVariants({ className })}
    {...props}
  >
    {children ?? <ChevronRight />}
  </li>
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";

const BreadcrumbEllipsis = ({
  className,
  ...props
}: ComponentProps<"span"> &
  VariantProps<typeof breadcrumbEllipsisVariants>) => (
  <span
    role="presentation"
    aria-hidden="true"
    className={breadcrumbEllipsisVariants({ className })}
    {...props}
  >
    <MoreHorizontal size={16} />
    <span className="sr-only">More</span>
  </span>
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
