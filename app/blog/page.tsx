import Search from "@/components/search";
import Badge from "@/components/ui/badge";
import PostCard from "./components/post-card";
import { allPosts } from "@/.contentlayer/generated";

export default function Blog() {
  const posts = allPosts;

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
            <Search />
          </div>
        </div>

        {/* list */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          {posts.map((post) => (
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
