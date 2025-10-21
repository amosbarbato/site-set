import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" title="Página Inicial">
      <Image src="/logo.svg" alt="Site.Set" width={116} height={32} />
    </Link>
  );
}
