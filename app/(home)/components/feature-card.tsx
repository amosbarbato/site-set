import Image from "next/image";
import Link from "next/link";
import Badge from "@/components/ui/badge";
import Button from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FeatureItemProps {
  tag: string;
  label: string;
  isHandled?: boolean;
}

export default function FeatureItem({
  tag,
  label,
  isHandled,
}: FeatureItemProps) {
  return (
    <div className="flex flex-col gap-4 rounded-xl bg-gray-500 p-6 md:p-12">
      {!isHandled ? (
        <>
          <Badge>{tag}</Badge>
          <h2 className="heading-lg text-gray-100">{label}</h2>
        </>
      ) : (
        <div className="flex flex-col max-sm:gap-8 md:grid md:grid-cols-2">
          <div className="flex flex-col gap-4 md:mr-22">
            <Badge>{tag}</Badge>
            <h2 className="heading-lg text-gray-100">{label}</h2>

            <Button className="mt-auto md:w-fit">
              <Link href="/criar-loja" className="flex gap-2">
                Criar loja grátis
                <ArrowRight size={20} />
              </Link>
            </Button>
          </div>

          <div className="flex w-full flex-col items-center justify-center">
            <div className="overflow-hidden">
              <Image
                src="/feature.svg"
                alt="Features"
                width={440}
                height={330}
                className="w-full object-contain"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
