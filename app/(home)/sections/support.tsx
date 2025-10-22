import SupportCard from "../components/support-card";
import { HeartHandshake, PaintbrushVertical, Store } from "lucide-react";

const support = [
  {
    icon: PaintbrushVertical,
    title: "Personalize seu site",
    description:
      "Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara.",
    color: "blue" as const,
  },
  {
    icon: Store,
    title: "Venda de qualquer loja",
    description:
      "Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado.",
    color: "cyan" as const,
  },
  {
    icon: HeartHandshake,
    title: "Receba suporte amigável",
    description:
      "Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso.",
    color: "blue" as const,
  },
];

export default function SupportSection() {
  return (
    <section className="relative">
      <div className="absolute inset-0 block bg-[url(/background-support.svg)] bg-cover bg-center bg-no-repeat" />

      <div className="padding-container relative flex flex-col items-center gap-8 py-12 md:gap-12 md:py-[120px]">
        <h2 className="heading-xl text-center font-sans text-gray-100 md:w-[488px]">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {support.map((item, index) => (
            <SupportCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
