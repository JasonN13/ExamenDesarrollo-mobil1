import { UseBancoContext } from "../Provider/Providerbank";

export const UseBanco = () => {
  const context = UseBancoContext();
  if (!context) throw new Error("UseBanco debe usarse dentro de un Provider");
  return context;
};
