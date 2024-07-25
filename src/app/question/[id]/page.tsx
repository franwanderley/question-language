'use client'

import { Language } from "@/app/types/Language";
import { ButtonOption } from "@/components/ButtonOption";
import { ScoreQuestion } from "@/components/ScoreQuestion";
import { ToggleTheme } from "@/components/Theme";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";


export default function Question({ params }: { params: { id: number } }) {
  let countdownTimeout: NodeJS.Timeout;
  const [language, setLanguage] = useState<Language>();
  const [time, setTime] = useState(60);
  const [countQuestion, setCountQuestion] = useState(0);
  const [optionSelected, setOptionSelected] = useState<Number>();
  const [score, setScore] = useState(0);
  const question = language?.questions?.[countQuestion];

  useEffect(() => {
    if (time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
     }, 1000);
    } else if (language?.questions?.length && countQuestion < language?.questions?.length) {
        setCountQuestion(old => old + 1);
        setTime(60);
    } else {
      clearTimeout(countdownTimeout);
    }
  }, [time]);

  useEffect(() => {
    fetch(`http://localhost:3333/language/${params?.id}`)
     .then((response) => response.json())
     .then((data) => setLanguage(data));
  }, [params]);

  const sendOption = () => {
    if (optionSelected === question?.correct) {
      setScore(old => old + 1);
    }
    setOptionSelected(undefined);
    clearTimeout(countdownTimeout);
    setTime(0);
  };

  return (
    <div className="flex min-h-screen flex-col flex-start bg-main">
      <header className="w-screen flex flex-row justify-start p-12">
        <div className="flex flex-row basis-4/5">
         <img className="w-10 h-10 align-middle" src={language?.icon} alt={language?.name} />
         <h2 className="ml-4 font-normal text-4xl max-sm:text-xl text-left placeholder-cyan-50">{language?.name}</h2>
        </div>
        <div className="basis-1/5 flex justify-end">
          <ToggleTheme theme={true} />
        </div>
      </header>
      {countQuestion < (language?.questions?.length || 0) ? (
        <main className="flex flex-row justify-between p-12 mt-3 max-sm:flex-col">
          <div className="basis-2/4 flex-col pl-10 max-md:p-0 mr-5 max-md:m-0">
            <p className="text-xs text-paragraph mt-4 text-left max-md:text-center mb-3">{`Question ${countQuestion + 1} of ${language?.questions?.length}`} </p>
            <h3 className="font-normal max-md:text-center text-3xl mb-8 max-md:text-2xl text-left placeholder-cyan-50">{question?.name}</h3>
            <div className="w-8/12 max-sm:w-full bg-secondary p-1 max-sm:mb-6 rounded-xl">
              <div className="bg-button p-1 rounded-xl" style={{width: `${time/60 * 100}%`}}/>
            </div>
          </div>
          <div className="basis-2/4">
            {question?.options?.map(option => (
              <ButtonOption 
                marked={optionSelected === option?.id} 
                key={option?.id} 
                icon={option?.icon} 
                text={option?.name} 
                action={() => setOptionSelected(option?.id)} 
              />
            ))}
            <button className="w-full bg-button rounded-xl p-3 font-semibold cursor-pointer" onClick={sendOption}>Submit answer</button>
          </div>
        </main>
      ) : <ScoreQuestion language={language} score={score} />}
    </div>
  );
}
