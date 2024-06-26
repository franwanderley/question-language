'use client'

import { ButtonOption } from "@/components/ButtonOption";
import { ToggleTheme } from "@/components/Theme";
import { useEffect, useState } from "react";

interface Language {
  id: number;
  name: string;
  icon: string;
  questions: {
    id: number;
    name: string;
    correct: number;
    options: {
      id: number;
      name: string;
    }[];
  }[];
}

export default function Question({ params }: { params: { id: number } }) {
  const [language, setLanguage] = useState<Language>();
  const [time, setTime] = useState(60);
  let countdownTimeout: NodeJS.Timeout;

  useEffect(() => {
    if (time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
     }, 1000);
    } else {
      clearTimeout(countdownTimeout);
    }
  }, [time]);

  useEffect(() => {
    fetch(`http://localhost:3333/language/${params?.id}`)
     .then((response) => response.json())
     .then((data) => setLanguage(data));
  }, [params]);

  return (
    <div className="flex min-h-screen flex-col flex-start bg-main">
      <header className="w-screen flex flex-row justify-start p-12">
        <div className="flex flex-row basis-4/5">
         <img className="w-10 h-10 align-middle" src={language?.icon} alt={language?.name} />
         <h2 className="ml-4 font-normal text-4xl text-left placeholder-cyan-50">{language?.name}</h2>
        </div>
        <div className="basis-1/5 flex justify-end">
          <ToggleTheme theme="" />
        </div>
      </header>
      <main className="flex flex-row justify-between p-12 mt-3">
        <div className="basis-2/4 flex-col pl-10 mr-5">
          <p className="text-xs text-paragraph mt-4 text-left mb-3">Question 1 of 5</p>
          <h3 className="font-normal text-3xl text-left placeholder-cyan-50">Qual é o tipo de linguagem que pertence o HTML?</h3>
          <div className="w-96 bg-secondary p-1 mt-10 rounded-xl">
            <div className="bg-button p-1 rounded-xl" style={{width: `${time/60 * 100}%`}}/>
          </div>
        </div>
        <div className="basis-2/4">
          <ButtonOption icon="https://raw.githubusercontent.com/franwanderley/question-language/master/public/imgs/html.png" text="html" action={() => {}} />
          <ButtonOption icon="https://raw.githubusercontent.com/franwanderley/question-language/master/public/imgs/css.png" text="css" action={() => {}} />
          <ButtonOption icon="https://raw.githubusercontent.com/franwanderley/question-language/master/public/imgs/js.PNG" text="js" action={() => {}} />
          <ButtonOption icon="https://raw.githubusercontent.com/franwanderley/question-language/master/public/imgs/java.jpg" text="java" action={() => {}} />
          <button className="w-full bg-button rounded-xl p-3 font-semibold cursor-pointer">Submit answer</button>
        </div>
      </main>
    </div>
  );
}
