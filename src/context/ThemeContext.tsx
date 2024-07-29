'use client'
import React, { createContext, ReactNode, useState } from "react";

export const ThemeContext = createContext<Theme>({theme: 'light', setTheme: () => {}});

export const ThemeProvider = ({children} : {children: ReactNode}) => {
   const [theme, setTheme] = useState<'light' | 'dark'>('light');
  // ...
  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};