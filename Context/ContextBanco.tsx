import { createContext } from "react";
import { Transferencia } from "../Modelos/Transferencia";

const ContextBanco = createContext<Transferencia>({} as Transferencia);
export default ContextBanco;