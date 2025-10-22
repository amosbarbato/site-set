import type { ReactNode } from "react";
import Header from "./header";
import CallToActionSection from "./call-to-action";
import Footer from "./footer";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="relative flex min-h-screen flex-col">
      <Header />
      <main className="flex flex-1 flex-col">{children}</main>
      <CallToActionSection />
      <Footer />
    </div>
  );
}
