import { forwardRef, type HTMLAttributes } from "react";
import Image, { ImageProps } from "next/image";
import { cva, type VariantProps } from "class-variance-authority";

const avatarContainerVariants = cva("flex items-center", {
  variants: {
    size: {
      sm: "gap-2",
      md: "gap-3",
      lg: "gap-4",
    },
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col items-start",
    },
  },
  defaultVariants: {
    size: "md",
    orientation: "horizontal",
  },
});

const avatarContentVariants = cva("flex flex-col", {
  variants: {
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
    },
  },
  defaultVariants: {
    align: "start",
  },
});

const avatarDescriptionVariants = cva("text-gray-300", {
  variants: {
    size: {
      xs: "body-xs",
      sm: "body-sm",
      md: "body-md",
    },
  },
  defaultVariants: {
    size: "xs",
  },
});

const avatarImageVariants = cva("object-cover", {
  variants: {
    shape: {
      circle: "rounded-full",
      square: "rounded-none",
      rounded: "rounded-md",
    },
    border: {
      none: "",
      light: "border border-gray-400",
      medium: "border-2 border-gray-300",
      heavy: "border-4 border-gray-200",
    },
  },
  defaultVariants: {
    shape: "circle",
    border: "none",
  },
});

const avatarTitleVariants = cva("text-gray-200", {
  variants: {
    size: {
      sm: "body-sm",
      md: "body-md",
      lg: "body-lg",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: {
    size: "sm",
    weight: "semibold",
  },
});

type AvatarContainerProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof avatarContainerVariants>;

type AvatarContentProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof avatarContentVariants>;

type AvatarDescriptionProps = HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof avatarDescriptionVariants>;

type AvatarImageProps = Omit<ImageProps, "width" | "height"> &
  VariantProps<typeof avatarImageVariants> & {
    size?: number;
  };

type AvatarTitleProps = HTMLAttributes<HTMLElement> &
  VariantProps<typeof avatarTitleVariants>;

const AvatarContainer = forwardRef<HTMLDivElement, AvatarContainerProps>(
  ({ className, size, orientation, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={avatarContainerVariants({ size, orientation, className })}
      {...rest}
    >
      {children}
    </div>
  ),
);
AvatarContainer.displayName = "AvatarContainer";

const AvatarContent = forwardRef<HTMLDivElement, AvatarContentProps>(
  ({ className, align, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={avatarContentVariants({ align, className })}
      {...rest}
    >
      {children}
    </div>
  ),
);
AvatarContent.displayName = "AvatarContent";

const AvatarDescription = forwardRef<HTMLDivElement, AvatarDescriptionProps>(
  ({ className, size, children, ...rest }, ref) => (
    <div
      ref={ref}
      className={avatarDescriptionVariants({ size, className })}
      {...rest}
    >
      {children}
    </div>
  ),
);
AvatarDescription.displayName = "AvatarDescription";

const AvatarImage = forwardRef<HTMLImageElement, AvatarImageProps>(
  ({ src, alt, size = 40, shape, border, className, ...props }, ref) => (
    <Image
      ref={ref as any}
      src={src}
      alt={alt}
      width={size}
      height={size}
      className={avatarImageVariants({ shape, border, className })}
      {...props}
    />
  ),
);
AvatarImage.displayName = "AvatarImage";

const AvatarTitle = forwardRef<HTMLElement, AvatarTitleProps>(
  ({ className, size, weight, children, ...props }, ref) => (
    <strong
      ref={ref}
      className={avatarTitleVariants({ size, weight, className })}
      {...props}
    >
      {children}
    </strong>
  ),
);
AvatarTitle.displayName = "AvatarTitle";

export {
  AvatarContainer,
  AvatarContent,
  AvatarDescription,
  AvatarImage,
  AvatarTitle,
};
