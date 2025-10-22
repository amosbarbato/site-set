import FeatureItem from "../components/feature-card";

export default function FeatureSection() {
  return (
    <section className="padding-container relative pt-10 pb-[72px] md:pt-20 md:pb-[120px]">
      <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-6">
        <FeatureItem
          tag="Simples"
          label="Crie um catálogo de produtos online em poucos minutos"
        />
        <FeatureItem
          tag="Prático"
          label="Venda para seu público através de uma plataforma única"
        />
        <div className="col-span-2">
          <FeatureItem
            tag="Personalizável"
            label="Tenha uma loja online personalizada com a cara da sua marca"
            isHandled={true}
          />
        </div>
      </div>
    </section>
  );
}
