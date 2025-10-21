import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <main className="mt-10 mb-12 flex flex-1 flex-col">{children}</main>
    </div>
  );
}
