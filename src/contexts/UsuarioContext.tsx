import { ReactNode, createContext, useState } from "react";
import { UsuarioModel } from "../models/UsuarioModel";
import { jwtDecode } from "jwt-decode";

interface UsuarioContextProviderProps {
    children: ReactNode;
}

interface UsuarioContextData {
    usuario: UsuarioModel;
    VerificaSessao: () => Promise<boolean>;
    HandleSignIn: (usuario: UsuarioModel, token: string) => boolean;
    HandleLogOut: () => boolean;
}

export const UsuarioContext = createContext({} as UsuarioContextData);

export default function UsuarioContextProvider({ children }: UsuarioContextProviderProps) {
    const LOCALSTORAGE_KEY = 'audittei_logged_user';
    const [usuario, setUsuario] = useState<UsuarioModel>({} as UsuarioModel);

    const VerificaSessao = async () => {
        let usuarioStorage = localStorage.getItem(LOCALSTORAGE_KEY);
        let usuarioLogado = usuarioStorage !== null ? JSON.parse(usuarioStorage) as UsuarioModel : null;

        if(usuarioLogado !== null) {
            if(usuarioLogado.expires_in > Math.floor(Date.now() / 1000)) {
                setUsuario(usuarioLogado);
                return true;
            } else {
                HandleLogOut();
                return false;
            }
        }

        return false;
    }

    const HandleSignIn = (usuario: UsuarioModel, token: string) : boolean => {
        
        let usuarioLogado = usuario;

        usuarioLogado.iniciais = obterIniciais(usuarioLogado.nomeCompleto);
        usuarioLogado.access_token = token;
        usuarioLogado.expires_in = obterDataExpiracaoToken(token);
        usuarioLogado.nomeSimples = usuarioLogado.nomeCompleto.split(" ")[0];
        
        setUsuario(usuarioLogado);
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(usuarioLogado));
        
        return true;
    }

    const HandleLogOut = () : boolean => {
        localStorage.removeItem(LOCALSTORAGE_KEY);
        return true;
    }

    function obterIniciais(nome: string) : string {
        let nomes = nome.split(' ');

        return nomes[0].split('')[0] + nomes[1].split('')[0];
    }

    function obterDataExpiracaoToken(token: string) : number {
        const decoded = jwtDecode(token);
        return decoded.exp!;
    }

    return (
        <UsuarioContext.Provider value={{ usuario, VerificaSessao, HandleSignIn, HandleLogOut }}>
            { children }
        </UsuarioContext.Provider>
    );
}