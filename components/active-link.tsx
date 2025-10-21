"use client";

import { usePathname } from "next/navigation";
import Link, { type LinkProps } from "next/link";

type ActiveLinkProps = {
  children: React.ReactNode;
} & LinkProps;

export default function ActiveLink({
  children,
  href,
  ...rest
}: ActiveLinkProps) {
  const linkPath = typeof href === "string" ? href : href.pathname;
  const pathname = usePathname();
  const isActive =
    pathname === linkPath || pathname?.startsWith(`${linkPath}/`);

  return (
    <Link
      {...rest}
      href={href}
      className={`text-sm font-medium transition-colors hover:text-blue-200 ${isActive ? "text-blue-200" : "text-gray-100"}`}
    >
      {children}
    </Link>
  );
}
