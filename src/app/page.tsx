'use client'

import { ButtonOption } from "@/components/ButtonOption";
import { ToggleTheme } from "@/components/Theme";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col flex-start bg-main">
      <header className="w-screen flex flex-row justify-end p-12">
        <div className="basis-1/5 flex justify-end">
          <ToggleTheme theme="" />
        </div>
      </header>
      <main className="flex flex-row justify-between p-12 mt-3">
        <div className="basis-2/4 flex-col pl-10">
        <h1 className="font-normal text-4xl text-left placeholder-cyan-50">Welcome to the <b className="block">Front-End Quiz</b></h1>
        <p className="text-sm text-paragraph mt-4 text-left">Pick a subject to get started.</p>
        </div>
        <div className="basis-2/4">
          <ButtonOption icon="https://raw.githubusercontent.com/franwanderley/question-language/master/public/imgs/html.png" text="html" action={() => {}} />
          <ButtonOption icon="https://raw.githubusercontent.com/franwanderley/question-language/master/public/imgs/css.png" text="css" action={() => {}} />
          <ButtonOption icon="https://raw.githubusercontent.com/franwanderley/question-language/master/public/imgs/js.PNG" text="js" action={() => {}} />
          <ButtonOption icon="https://raw.githubusercontent.com/franwanderley/question-language/master/public/imgs/java.jpg" text="java" action={() => {}} />
        </div>
      </main>
    </div>
  );
}
