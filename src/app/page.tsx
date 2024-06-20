'use client'

import { ButtonOption } from "@/components/ButtonOption";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col flex-start bg-main">
      <header className="w-screen flex flex-row justify-end p-6">
        <div className="basis-1/5 flex justify-end">Theme</div>
      </header>
      <main className="flex flex-row justify-between p-6 mt-3">
        <div className="basis-2/4 flex-col">
        <h1 className="font-normal text-4xl placeholder-cyan-50">Welcome to the <b className="w-full">Front-End Quiz</b></h1>
        <p className="text-sm text mt-4 text-center">Pick a subject to get started.</p>
        </div>
        <div className="basis-2/4">
          <ButtonOption icon="public\imgs\css.PNG" text="css" action={() => {}} />
          <ButtonOption icon="public\imgs\css.PNG" text="html" action={() => {}} />
          <ButtonOption icon="public\imgs\css.PNG" text="js" action={() => {}} />
          <ButtonOption icon="public\imgs\css.PNG" text="java" action={() => {}} />
        </div>
      </main>
    </div>
  );
}
