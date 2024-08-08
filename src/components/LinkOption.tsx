'use client'

import Link from "next/link";

interface LinkOptionProps {
   text: string;
   icon: string;
   router: string;
}

export const LinkOption = ({ router, icon, text } : LinkOptionProps) => {
   return (
      <Link
         className="dark:bg-secondary bg-cyan-200 p-3 mb-4 flex items-center cursor-pointer dark:text-white text-black border-spacing-1 rounded-xl w-full" 
         href={router}
      >
         <img src={icon} className="w-10 h-10 align-middle" alt={text} />
         <span className="bold text-xl max-md:text-sm ml-2">{text}</span>
      </Link>
   );
}