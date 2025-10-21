import ActiveLink from "../active-link";
import Logo from "../logo";
import Button from "../ui/button";
import NavbarMobile from "./navbar-mobile";

export default function Header() {
  return (
    <header className="fiixed bg-background/95 supports-backdrop-filters:bg-background/60 top-0 z-50 w-full border-b border-white/10 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Logo />

          <nav className="hidden items-center gap-6 md:flex">
            <ActiveLink href="/">Home</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary">Começar</Button>
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            <Button variant="secondary">Começar</Button>
            <NavbarMobile />
          </div>
        </div>
      </div>
    </header>
  );
}
