import { UseBancoContext } from "../Provider/Providerbank";


export const UseBanco = () => {
    const context = UseBancoContext();
    if (!context) {
        throw new Error("UseBanco debe ser usado dentro de un Provider");
    }
    return context;
}