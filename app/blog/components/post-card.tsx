import Image from "next/image";
import Link from "next/link";

export default function PostCard() {
  return (
    <Link
      href="/blog"
      className="space-y-2 rounded-xl border border-gray-400 bg-gray-600 p-2 transition-colors duration-300 hover:border-blue-300 hover:bg-gray-500"
    >
      <div className="relative">
        <div className="absolute right-0 rounded-bl-md bg-gray-600 pr-1.5 pb-2.5 pl-3.5">
          <span className="body-xs text-gray-300">20/12/2024</span>
        </div>
        <Image
          src="/assets/primeiro-post.png"
          alt=""
          width={288}
          height={144}
          className="w-full rounded-md object-cover object-center"
        />
      </div>

      <div className="space-y-3 p-2">
        <div className="space-y-2">
          <h2 className="heading-xs font-sans text-gray-200">
            Transformando seu negócio em uma loja virtual
          </h2>
          <p className="body-xs line-clamp-3 h-9 text-gray-300">
            Se você está buscando uma maneira simples e eficaz de vender seus
            produtos online, o Site.Set é a solução perfeita para você. Criar
            uma loja virtual de sucesso nunca foi tão fácil. Com nossa
            plataforma intuitiva, você pode criar um site profissional para sua
            loja em minutos, sem precisar de conhecimentos técnicos.
          </p>
        </div>
        <div className="flex items-center gap-2 border-t border-gray-400 pt-3">
          <Image src="/customer-01.png" width={24} height={24} alt="" />

          <span className="body-xs text-gray-300">Aspen Dokidis</span>
        </div>
      </div>
    </Link>
  );
}
