import React, { useState } from 'react';
import ContextBanco from '../Context/ContextBanco';
import { Transferencia } from '../Modelos/Transferencia';
import { Plantilla } from '../Modelos/Plantilla';

export default function Providerbank({ children }: Plantilla) {
  const [balance, setBalance] = useState(1000);
  const [transferencias, setTransferencias] = useState<Transferencia[]>([]);

  const deposito = () => {
    const nueva: Transferencia = {
      id: Date.now(),
      Descripcion: "Depósito de 500",
    };
    setBalance(prev => prev + 500);
    setTransferencias(prev => [nueva, ...prev].slice(0, 100));
  };

  const tranferencia = (monto: number, to: string): boolean => {
    if (monto > balance) return false;
    const nueva: Transferencia = {
      id: Date.now(),
      Descripcion: `Transferencia de ${monto} a ${to}`,
    };
    setBalance(prev => prev - monto);
    setTransferencias(prev => [nueva, ...prev].slice(0, 100));
    return true;
  };

  const value = { balance, transferencias, deposito, tranferencia };

  return <ContextBanco.Provider value={value}>{children}</ContextBanco.Provider>;
}

export const UseBancoContext = () => React.useContext(ContextBanco);
