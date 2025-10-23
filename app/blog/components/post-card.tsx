import Image from "next/image";
import Link from "next/link";
import type { PostCard } from "@/types";

export default function PostCard({
  author,
  title,
  description,
  image,
  date,
  slug,
}: PostCard) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="space-y-2 rounded-xl border border-gray-400 bg-gray-600 p-2 transition-colors duration-300 hover:border-blue-300 hover:bg-gray-500"
    >
      <div className="relative">
        <div className="absolute right-0 rounded-bl-md bg-gray-600 pr-1.5 pb-2.5 pl-3.5">
          <span className="body-xs text-gray-300">{date}</span>
        </div>
        <Image
          src={image}
          alt={title}
          width={288}
          height={144}
          className="w-full rounded-md object-cover object-center"
        />
      </div>

      <div className="space-y-3 p-2">
        <div className="space-y-2">
          <h2 className="heading-xs font-sans text-gray-200">{title}</h2>
          <p className="body-xs line-clamp-3 h-9 text-gray-300">
            {description}
          </p>
        </div>
        <div className="flex items-center gap-2 border-t border-gray-400 pt-3">
          <Image src={author.avatar} width={24} height={24} alt={author.name} />
          <span className="body-xs text-gray-300">{author.name}</span>
        </div>
      </div>
    </Link>
  );
}
