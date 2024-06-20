'use client'


interface ButtonOptionProps {
   text: string;
   icon: string;
   action: () => void;
}

export const ButtonOption = (props : ButtonOptionProps) => {
   return (
      <button className="bg-secondary p-3 mb-4 flex items-center cursor-pointer placeholder-white border-spacing-1 rounded-xl w-full" onClick={props.action}>
         <img src={props.icon} className="w-10 h-10 align-middle" alt={props.text} />
         <span className="bold text-xl uppercase ml-2">{props.text}</span>
      </button>
   );
}