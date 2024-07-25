'use client'


interface ButtonOptionProps {
   text: string;
   icon: string;
   action: () => void;
   marked: boolean;
}

export const ButtonOption = ({ marked, action, icon, text } : ButtonOptionProps) => {
   return (
      <button 
         style={{border: marked ? `.8px solid #a729f6` : 'none'}} 
         className="bg-secondary p-3 mb-4 flex items-center cursor-pointer placeholder-white border-spacing-1 rounded-xl w-full" 
         onClick={action}
      >
         <img src={icon} className="w-10 h-10 align-middle" alt={text} />
         <span className="bold text-xl max-md:text-sm ml-2">{text}</span>
      </button>
   );
}