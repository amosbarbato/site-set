import Image from "next/image";

interface CustomerStoryProps {
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
}

export default function CustomerCard({ content, author }: CustomerStoryProps) {
  return (
    <div className="space-y-10 rounded-xl border border-gray-400 bg-gray-600 p-6 md:p-10">
      <p className="body-md text-gray-200 italic">{content}</p>

      <div className="flex items-center gap-3">
        <div className="relative size-10 overflow-hidden rounded-full">
          <Image
            src={author.avatar}
            alt={author.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-col">
          <strong className="text-sm text-gray-200">{author.name}</strong>
          <span className="text-xs text-gray-300">{author.role}</span>
        </div>
      </div>
    </div>
  );
}
