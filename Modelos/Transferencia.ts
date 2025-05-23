export interface Transferencia {
    id: number,
    Descripcion: string,
}

export interface balance {
    balance: number,
    trasaccion: Transferencia[],
    deposito: () => void,
    Transferencia:(Monto: number, to: string) => boolean;
}