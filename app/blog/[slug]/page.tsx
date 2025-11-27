import Link from "next/link";
import Image from "next/image";
import { allPosts } from "contentlayer/generated";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  AvatarContainer,
  AvatarContent,
  AvatarDescription,
  AvatarImage,
  AvatarTitle,
} from "@/components/avatar";
import Markdown from "@/components/markdown";
import PostShare from "@/components/post-share";

type BlogPostPage = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 60;

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: BlogPostPage) {
  const { slug } = await params;

  const post = allPosts.find(
    (post) => post.slug.toLowerCase() === slug.toLowerCase(),
  )!;
  const publishedDate = new Date(post?.date).toLocaleDateString("pt-BR");

  const postUrl = `https://site.set/blog/${slug}`;

  if (!post) {
    return (
      <main className="padding-container">
        <p>Post não encontrado</p>
      </main>
    );
  }

  return (
    <main className="padding-container w-full space-y-8 pt-12 pb-[136px]">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-sm text-blue-200">{post?.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 gap-y-6 md:grid-cols-4 md:gap-5">
        <article className="col-span-3 rounded-xl border border-gray-400 bg-gray-600">
          <figure className="relative h-[264px] w-full overflow-hidden rounded-t-lg">
            <Image
              src={post?.image ?? ""}
              alt={post?.title ?? ""}
              quality={100}
              fill
              className="object-cover object-top"
            />
          </figure>

          <div className="space-y-12 px-16 pt-12 pb-16">
            <div className="space-y-8">
              <h1 className="heading-xl font-sans">{post?.title}</h1>
              <AvatarContainer>
                <AvatarImage
                  src={post?.author.avatar}
                  alt={post?.author.name}
                />

                <AvatarContent>
                  <AvatarTitle>{post?.author.name}</AvatarTitle>
                  <AvatarDescription>
                    Publicado em {""}
                    <time dateTime={post.date}>{publishedDate}</time>
                  </AvatarDescription>
                </AvatarContent>
              </AvatarContainer>
            </div>

            <Markdown content={post.body.raw} />
          </div>
        </article>

        <PostShare
          url={postUrl}
          title={post?.title}
          description={post?.description}
        />
      </div>
    </main>
  );
}
