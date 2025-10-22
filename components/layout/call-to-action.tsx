import Link from "next/link";
import Button from "@/components/ui/button";
import { ArrowRight, Store } from "lucide-react";

export default function CallToActionSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 block bg-[url(/background-footer.svg)] bg-cover bg-center bg-no-repeat" />

      <div className="absolute top-0 left-1/2 w-fit -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-300 p-4 text-cyan-100">
        <Store className="size-6 md:size-8" />
      </div>

      <div className="padding-container relative flex flex-col items-center gap-10 py-12 md:gap-12 md:pt-22 md:pb-18">
        <h2 className="heading-xl text-center font-sans text-gray-100 md:w-[488px]">
          Crie uma loja online e inicie suas vendas ainda hoje
        </h2>

        <Button>
          <Link href="/criar-loja" className="flex gap-2">
            Criar loja grátis
            <ArrowRight size={20} />
          </Link>
        </Button>
      </div>
    </section>
  );
}
