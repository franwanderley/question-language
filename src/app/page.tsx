'use server'

import { ButtonOption } from "@/components/ButtonOption";
import { ToggleTheme } from "@/components/Theme";
import { Language } from "./types/Language";
import { LinkOption } from "@/components/LinkOption";

export default async function Home() {

  const languages: Language[] | null = await fetch("http://localhost:3333/language")
    .then((response) => response.json())
    .then((data) => data);


  return (
    <div className="flex min-h-screen flex-col flex-start bg-main">
      <header className="w-screen flex flex-row justify-end p-12">
        <div className="basis-1/5 flex justify-end">
          <ToggleTheme theme={true} />
        </div>
      </header>
      <main className="flex flex-row max-sm:flex-col justify-between p-12 mt-3">
        <div className="basis-2/4 flex-col pl-10 max-md:p-0">
        <h1 className="font-normal text-4xl text-left max-md:text-center max-md:text-2xl placeholder-cyan-50">Welcome to the <b className="block max-md:inline-block">Front-End Quiz</b></h1>
        <p className="text-sm max-md:mb-4 text-paragraph mt-4 text-left max-md:text-center">Pick a subject to get started.</p>
        </div>
        <div className="basis-2/4">
          {languages?.map(lan => (
            <LinkOption key={lan?.id} icon={lan?.icon} text={lan?.name} router={`/question/${lan.id}`} />
          ))}
        </div>
      </main>
    </div>
  );
}
