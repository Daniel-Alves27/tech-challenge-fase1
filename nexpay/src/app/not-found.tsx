import Link from "next/link";
import Footer from "../components/Footer";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section>
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-center text-2xl py-8">Ops" Não encontramos a página...</h1>
        <div className="mb-15">
          <img className="mx-auto" src="/images/img-man-flag.png" alt="homem com bandeira na mão" />
        </div>
        <div className="mb-5">
          <Link href={'/'}><Button className="cursor-pointer">Voltar</Button></Link>
        </div>
      </div>
      <Footer />
    </section>
  )
}