import PageLayout from "@/components/PageLayout";
import Link from "next/link";


export default function ErrorPage(){
return(
  <PageLayout>
    <section className="w-full flex justify-center items-center flex-col">
      <img className="w-1/3 error z-0" src="/img/404.jpg" alt="Pagina no encontrada" />
      <Link 
        className="w-1/3 text-center bg-black_200 transition-all hover:bg-accent_100 rounded-lg z-10  text-2xl py-4" 
        href='/'
      >
        Volver al Home
      </Link>
    </section>
  </PageLayout>
)
}