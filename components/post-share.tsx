"use client";

import { useShare } from "@/hooks/use-share";
import Button from "./ui/button";

type PostShareProps = {
  url: string;
  title: string;
  description: string;
};

export default function PostShare({ url, title, description }: PostShareProps) {
  const { shareButtons } = useShare({
    url,
    title,
    text: description,
  });

  return (
    <aside className="space-y-5">
      <h2 className="heading-xs hidden font-sans md:block">Compartilhar</h2>

      <div className="flex justify-center gap-2 md:flex-col">
        {shareButtons.map((provider) => (
          <Button
            key={provider.provider}
            onClick={() => provider.action()}
            variant="outline"
            size="lg"
            className="w-fit justify-start md:w-full"
          >
            {provider.icon}
            <span className="hidden md:block">{provider.name}</span>
          </Button>
        ))}
      </div>
    </aside>
  );
}
