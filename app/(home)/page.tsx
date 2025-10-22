import HeroSection from "./sections/hero";

export default function Home() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
    </article>
  );
}
