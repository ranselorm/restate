import { createContext } from "react";
interface GlobalContextType {}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);
