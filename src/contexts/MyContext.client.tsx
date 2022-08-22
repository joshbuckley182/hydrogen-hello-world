import React, { createContext, useContext } from "react";

const context = createContext<{
  translations: any;
} | null>(null);

type MyContextProviderProps = {
  translations: any;
  children: React.ReactNode;
};

export function MyContextProvider({
  translations,
  children,
}: MyContextProviderProps) {
  return (
    <context.Provider value={{ translations }}>{children}</context.Provider>
  );
}

export function useMyContext() {
  const value = useContext(context);

  if (!value) {
    throw new Error("Translations not initialised");
  }

  const { translations } = value;
  return translations;
}
