import { createContext } from "react";
import { balance } from "../Modelos/Transferencia";

const ContextBanco = createContext<>balance({} as balance);
export default ContextBanco;