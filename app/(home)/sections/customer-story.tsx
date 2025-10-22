import CustomerCard from "../components/customer-card";

const customerStories = [
  {
    content:
      "Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos.",
    author: {
      name: "Annete Bones",
      role: "CEO na Anne Corp",
      avatar: "/customer-01.png",
    },
  },
  {
    content:
      "Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a simplicidade para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!",
    author: {
      name: "Jacob Jones",
      role: "CEO na JJ Corp",
      avatar: "/customer-02.png",
    },
  },
];

export default function CustomerStorySection() {
  return (
    <section className="padding-container relative py-20 md:pt-32 md:pb-[168px]">
      <div className="flex flex-col items-center gap-8">
        <h2 className="heading-xl text-center font-sans text-gray-100">
          Quem utiliza, aprova!
        </h2>

        <div className="grid gap-4 md:grid-cols-2 md:gap-8">
          {customerStories.map((story, index) => (
            <CustomerCard key={index} {...story} />
          ))}
        </div>
      </div>
    </section>
  );
}
