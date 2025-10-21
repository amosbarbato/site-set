import type { ReactNode } from "react";
import Header from "./header";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="mt-10 mb-12 flex flex-1 flex-col">{children}</main>
    </div>
  );
}
