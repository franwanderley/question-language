import { Language } from "@/app/types/Language";
import { useRouter } from "next/navigation";

export const ScoreQuestion = (props: { language?: Language, score: number }) => {
   const router = useRouter();
   return (
      <main className="flex flex-row justify-between p-16 mt-3 max-sm:flex-col">
          <div className="basis-2/4 flex-col pl-10 max-md:p-0 mr-5 max-md:mr-0 max-md:mb-6">
            <h3 className="font-normal max-md:text-center text-3xl max-md:text-2xl text-left placeholder-cyan-50">Quiz Completed <b className="block">You scored...</b></h3>
          </div>
          <div className="basis-2/4 p-4 rounded-xl bg-secondary">
            <div className="flex flex-row">
              <img className="w-10 h-10 align-middle mr-2" src={props?.language?.icon} alt={props?.language?.name} />
              <p className="ml-4 font-normal text-2xl text-left max-md:text-center placeholder-cyan-50">{props?.language?.name}</p>
            </div>
            <div>
              <p className="text-6xl font-bold placeholder-cyan-50 mt-4 text-center mb-3">{props?.score}</p>
              <p className="text-sm text-paragraph mt-4 text-center mb-4">out of {props?.language?.questions?.length}</p>
            </div>
            <button className="w-full bg-button rounded-xl p-3 font-semibold cursor-pointer" onClick={() => router.push("/")}>Play Again</button>
          </div>
        </main>
   );
};