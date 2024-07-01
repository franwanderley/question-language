'use client'


interface ButtonOptionProps {
   text: string;
   icon: string;
   action: () => void;
   marked: boolean;
}

export const ButtonOption = (props : ButtonOptionProps) => {
   return (
      <button 
         style={{border: props.marked ? `.8px solid #a729f6` : 'none'}} 
         className="bg-secondary p-3 mb-4 flex items-center cursor-pointer placeholder-white border-spacing-1 rounded-xl w-full" 
         onClick={props.action}
      >
         <img src={props.icon} className="w-10 h-10 align-middle" alt={props.text} />
         <span className="bold text-xl max-md:text-sm ml-2">{props.text}</span>
      </button>
   );
}