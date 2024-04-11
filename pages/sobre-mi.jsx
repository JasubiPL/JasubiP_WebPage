import PageLayout from "@/components/PageLayout";
import CSS from "@/components/icons/Css";
import HTML5 from "@/components/icons/Html";
import JavaScript from "@/components/icons/Javascript";
import MySQL from "@/components/icons/MySQL";
import Nodejs from "@/components/icons/Nodejs";
import React from "@/components/icons/React";
import TailwindCSS from "@/components/icons/Tailwind";
import TypeScript from "@/components/icons/Typescript";

export default function SobreMi() {
  return (
    <PageLayout title="Sobre Mi">
      <section className="mt-28 w-full lg:w-3/5 max-w-7xl mb-8">
        <header className="flex flex-col lg:flex-row items-center gap-5">
          <img
            className=" w-48 h-48 aspect-square object-cover rounded-full" 
            src="/img/profile.jpg" 
            alt="foto de biografia" 
          />
          <div className="p-4">
            <h1 className="text-4xl lg:text-6xl">Jasubi Piñeyro</h1>
            <h2 className="text-2xl lg:text-3xl text-accent_100">Desarrollador de Software</h2>
            <section className="flex mt-4 gap-2 flex-wrap justify-center lg:justify-start">
              <span className="rounded-2xl bg bg-orange-500/50 flex px-4 py-1 gap-1">
                HTML
                <HTML5 width='25' height="25"/>
              </span>
              <span className="rounded-2xl bg bg-sky-300/50 flex px-4 py-1 gap-1">
                CSS
                <CSS width='25' height="25"/>
              </span>
              <span className="rounded-2xl bg bg-yellow-300/50 flex px-4 py-1 gap-1">
                JavaScript
                <JavaScript width='25' height="25"/>
              </span>
              
              <span className="rounded-2xl bg-cyan-700/50 flex px-4 py-1 gap-1">
                React
                <React width='25' height="25"/>
              </span>
              <span className="rounded-2xl bg-green-700/50 flex px-4 py-1 gap-1">
                Node.js
                <Nodejs width='25' height="25"/>
              </span>
              <span className="rounded-2xl bg bg-slate-700/50 flex px-4 py-1 gap-1">
                MySQL
                <MySQL width='25' height="25"/>
              </span>
              <span className="rounded-2xl bg bg-blue-700/50 flex px-4 py-1 gap-1">
                TypeScript
                <TypeScript width='20' height="25"/>
              </span>
              <span className="rounded-2xl bg bg-cyan-500/50 flex px-4 py-1 gap-1">
                Tailwind Css
                <TailwindCSS width='25' height="25"/>
              </span>
            </section>
          </div>
        </header>
        <section className="mt-8 lg:mt-16 w-[95%] lg:w-4/5 m-auto bg-slate-100/10 p-8 rounded-xl">
          <p className="text-lg">
            Tengo 26 años, me encanta el software, la tecnología, el fitness y el desarrollo personal. Todos los días trato de ser 1% mejor en cada área de mi vida, creo firmemente en que debemos estar en constante crecimiento y evolución.
          </p>
        </section>
      </section>
    </PageLayout>
  )
}