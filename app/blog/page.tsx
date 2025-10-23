import Search from "@/components/search";
import Badge from "@/components/ui/badge";
import PostCard from "./components/post-card";

export default function Blog() {
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
        <div className="grid grid-cols-3 gap-6">
          <PostCard />
          <PostCard />
          <PostCard />
        </div>
      </section>
    </article>
  );
}
