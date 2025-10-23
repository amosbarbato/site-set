import Search from "@/components/search";
import Badge from "@/components/ui/badge";
import PostCard from "./components/post-card";

export default function Blog() {
  return (
    <article>
      <section className="padding-container space-y-14 pt-20 pb-[136px]">
        {/* header */}
        <div className="grid grid-cols-2 items-end">
          <div className="space-y-3">
            <Badge variant="secondary">Blog</Badge>
            <h1 className="heading-xl font-sans">
              Dicas e estratégias para impulsionar seu negócio
            </h1>
          </div>

          <div className="flex justify-end">
            <Search />
          </div>
        </div>

        {/* list */}
        <div className="grid gap-4 md:grid-cols-3 md:gap-6">
          <PostCard
            title="Transformando seu negócio em uma loja virtual"
            description="Se você está buscando uma maneira simples e eficaz de vender seus produtos online, o Site.Set é a solução perfeita para você. Criar uma loja virtual de sucesso nunca foi tão fácil. Com nossa plataforma intuitiva, você pode criar um site profissional para sua loja em minutos, sem precisar de conhecimentos técnicos."
            date="20/12/2024"
            slug="transformando"
            image="/assets/primeiro-post.png"
            author={{
              name: "Aspen Dokidis",
              avatar: "/customer-01.png",
            }}
          />
          <PostCard
            title="5 motivos para escolher o Site.Set"
            description="O Site.Set oferece tudo o que você precisa para criar uma loja online eficiente e personalizada. Desde a integração com sistemas de pagamento até a criação de páginas de vendas, veja por que milhares de empreendedores escolhem nossa plataforma."
            date="26/11/2024"
            slug="transformando"
            image="/assets/segundo-post.png"
            author={{
              name: "Dulce Westervelt",
              avatar: "/customer-03.png",
            }}
          />

          <PostCard
            title="Como atrair consumidores"
            description="Atrair consumidores para sua loja online é uma das chaves para o sucesso no e-commerce. Para conquistar novos clientes, é essencial adotar estratégias eficazes de marketing e criar uma experiência de compra que os faça voltar. Aqui estão algumas dicas para aumentar o tráfego e a conversão na sua loja:"
            date="24/09/2024"
            slug="transformando"
            image="/assets/terceiro-post.png"
            author={{
              name: "Aspen Dokidis",
              avatar: "/customer-01.png",
            }}
          />
        </div>
      </section>
    </article>
  );
}
