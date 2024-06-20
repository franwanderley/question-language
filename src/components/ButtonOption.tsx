'use client'

import Image from "next/image";
import cssImage from "../../public/imgs/css.png";

interface ButtonOptionProps {
   text: string;
   icon: string;
   action: () => void;
}

export const ButtonOption = (props : ButtonOptionProps) => {
   return (
      <button className="bg-secondary p-3 mb-4 flex align-middle cursor-pointer placeholder-white border-spacing-1 rounded-xl w-full" onClick={props.action}>
         <Image src={cssImage} height={40} width={40} alt={""} />
         <span className="bold text-xl uppercase ml-2">{props.text}</span>
      </button>
   );
}