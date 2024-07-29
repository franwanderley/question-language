export interface Language {
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
       icon: string;
     }[];
   }[];
 }