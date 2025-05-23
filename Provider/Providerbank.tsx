import { View, Text } from 'react-native'
import React, { Children, useState } from 'react'
import ContexBanco from '../Context/ContextBanco'
import {Transferencia} from '../Modelos/Transferencia'
import { Plantilla } from '../Modelos/Plantilla'

export default function Providerbank(props: React.PropsWithChildren<Plantilla>) {
    const [balance, setbalance] = useState(1000);
    const [transferencias, setTransferencias] = useState<Transferencia[]>([]);

    const deposito = () =>{
        const newTransferencia: Transferencia = {
            id: Date.now(),
            Descripcion:"Deposito de 500"
    };
    setbalance(prev => prev + 500);
    setTransferencias(prev => [newTransferencia, ...prev].slice(0,100));
    };
    const tranferencia = (Monto: number, to: string):boolean => {
        if (Monto > balance) return false;
        const newTransferencia: Transferencia = {
            id: Date.now(),
            Descripcion: `Transferencia de ${Monto} a ${to}`
        };

        setbalance(prev => prev - Monto);
        setTransferencias(prev => [newTransferencia, ...prev].slice(0,100));
        return true;
    };
    const value = {
        balance,
        transferencias,
        deposito,
        tranferencia
    };

  return (
    <ContexBanco.Provider value={value}>
      {props.children}
    </ContexBanco.Provider>
  )
}

export const UseBancoContext=()=>{
    return React.useContext(ContexBanco);
}