import { ReactNode, createContext, useState } from "react";
import { UsuarioModel } from "../models/UsuarioModel";

interface UsuarioContextProviderProps {
    children: ReactNode;
}

interface UsuarioContextData {
    usuario: UsuarioModel | null;
    setUsuario: React.Dispatch<React.SetStateAction<UsuarioModel | null>>;
}

export const UsuarioContext = createContext({} as UsuarioContextData);

export default function UsuarioContextProvider({ children }: UsuarioContextProviderProps) {

    const [usuario, setUsuario] = useState<UsuarioModel | null>(null);

    return (
        <UsuarioContext.Provider value={{ usuario, setUsuario }}>
            { children }
        </UsuarioContext.Provider>
    );
}