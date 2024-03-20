import { createContext, useContext } from "react";

export const DataContext = createContext<any>({});

export const useDataContext = () => useContext(DataContext);
