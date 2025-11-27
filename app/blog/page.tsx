import { Suspense } from "react";
import type { Metadata } from "next";
import { allPosts } from "contentlayer/generated";
import Search from "@/components/search";
import Badge from "@/components/ui/badge";
import PostCard from "./components/post-card";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas e estratégias para impulsionar seu negócio",
  robots: "index, follow",
  openGraph: {
    title: "Blog",
    description: "Dicas e estratégias para impulsionar seu negócio",
    url: "https://nextjs-fundamentos.vercel.app/og-image.jpg",
    siteName: "Site.Set",
    locale: "pt-BR",
    type: "website",
    images: [
      {
        url: "https://nextjs-fundamentos.vercel.app/og-image.jpg",
        width: 800,
        height: 600,
        alt: "Site.Set",
      },
    ],
  },
};

export default function Blog() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <article>
      <section className="padding-container space-y-14 pt-20 pb-[136px]">
        {/* header */}
        <div className="grid grid-cols-2 items-end">
          <div className="space-y-3">
            <Badge variant="secondary">Blog</Badge>
            <h1 className="heading-xl font-sans">
              Dicas e estratégias para impulsionar seu negócio
            </h1>
          </div>

          <div className="flex justify-end">
            <Suspense fallback={null}>
              <Search />
            </Suspense>
          </div>
        </div>

        {/* list */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {sortedPosts.map((post) => (
            <PostCard
              key={post._id}
              title={post.title}
              description={post.description}
              date={post.date}
              slug={post.slug}
              image={post.image}
              author={{
                name: post.author.name,
                avatar: post.author.avatar,
              }}
            />
          ))}
        </div>
      </section>
    </article>
  );
}
