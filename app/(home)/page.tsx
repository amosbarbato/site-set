import HeroSection from "./sections/hero";
import FeatureSection from "./sections/feature";
import SupportSection from "./sections/support";
import CustomerStorySection from "./sections/customer-story";

export default function Home() {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
    </article>
  );
}
