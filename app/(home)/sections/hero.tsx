import Image from "next/image";
import Button from "@/components/ui/button";
import { ArrowRight, Clock, Store } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="padding-container relative">
      <div className="grid grid-cols-1 md:grid-cols-7 md:gap-8">
        <div className="col-span-4 space-y-14 py-8 max-sm:flex max-sm:flex-col max-sm:items-center md:py-20">
          <div className="space-y-8 max-sm:flex max-sm:flex-col max-sm:items-center">
            <h1 className="heading-hg text-center font-sans md:text-start">
              Venda seus produtos como afiliado em um único lugar
            </h1>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <Clock className="text-cyan-100" size={20} />
                <span className="body-md text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Store className="text-cyan-100" size={20} />
                <span className="body-md text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 max-sm:flex max-sm:flex-col max-sm:items-center">
            <Button>
              Criar loja grátis
              <ArrowRight size={20} />
            </Button>
            <p className="body-xs text-gray-300">
              Não precisa de cartão de crédito
            </p>
          </div>
        </div>

        <div className="relative col-span-3 hidden h-full md:flex md:justify-end lg:flex">
          <Image
            src="/background-hero.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={400}
            height={500}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
