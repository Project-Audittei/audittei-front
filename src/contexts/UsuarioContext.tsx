import { ReactNode, createContext, useEffect, useState } from "react";
import { UsuarioModel } from "../models/UsuarioModel";
import { jwtDecode } from "jwt-decode";

interface UsuarioContextProviderProps {
    children: ReactNode;
}

interface UsuarioContextData {
    usuario: UsuarioModel | null;
    ChecarUsuarioAnonimo: (login: string, senha: string) => boolean;
    VerificaSessao: () => Promise<boolean>;
    HandleSignIn: (usuario: UsuarioModel, token: string, isUsuarioAnonimo?:boolean) => boolean;
    HandleLogOut: () => boolean;
    AtualizarUsuario: (usuario: UsuarioModel) => void;
}

export const UsuarioContext = createContext({} as UsuarioContextData);

export default function UsuarioContextProvider({ children }: UsuarioContextProviderProps) {
    const LOCALSTORAGE_KEY = 'audittei_logged_user';

    const [usuario, setUsuario] = useState<UsuarioModel | null>(null);

    useEffect(() => {
        VerificaSessao();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const AtualizarUsuario = (usuario: UsuarioModel) => {
        setUsuario(usuario);
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify( usuario ));
    };

    const VerificaSessao = async () => {
        let usuarioStorage = await localStorage.getItem(LOCALSTORAGE_KEY);
        let usuarioLogado = usuarioStorage ? JSON.parse(usuarioStorage) as UsuarioModel : null;

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

    const HandleSignIn = (usuario: UsuarioModel, token: string, isUsuarioAnonimo?: boolean) : boolean => {
        let usuarioLogado = usuario;

        if(!isUsuarioAnonimo) {
            usuarioLogado.access_token = token;
            usuarioLogado.expires_in = obterDataExpiracaoToken(token);
        } else {
            const today = new Date();
            const newYear = today.getFullYear() + 2;
            today.setFullYear(newYear);
            usuarioLogado.expires_in = Math.floor(today.getTime() / 1000) ;
        }

        usuarioLogado.iniciais = obterIniciais(usuarioLogado.nomeCompleto);

        if(usuarioLogado.nomeCompleto.split(" ")) {
            usuarioLogado.nomeSimples = usuarioLogado.nomeCompleto.split(" ")[0]
        } else usuarioLogado.nomeSimples = usuarioLogado.nomeCompleto;

        setUsuario(usuarioLogado);
        localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify( usuarioLogado ));
        
        return true;
    }

    const HandleLogOut = () : boolean => {
        localStorage.removeItem(LOCALSTORAGE_KEY);
        return true;
    }

    const ChecarUsuarioAnonimo = (login: string, senha: string) => {
        if(login === 'anonimo.usuario' && senha === 'Audittei2024!') {
            const usuario = {
                userId: 38,
                email: "anonimo.usuairo@audittei.com",
                telefone: "21979333142",
                nomeCompleto: "Homologação Da Silva",
                nomeEmpresa: "HOMOLOGACAO",
                status: true,
                userRole: "SUPER_ADMIN",
                password: "$2a$10$fNprTGUp87WEj3qVl6zz6u2nJpe6gbHtiyfNQBIss3ZuPWYXazBMS",
                username: "anonimo.usuairo"
            };

            return HandleSignIn(usuario as UsuarioModel, '', true);
        }

        return false;
    }

    function obterIniciais(nome: string) : string {
        let nomes = nome.split(' ');

        return nomes.length > 1 ? nomes[0].split('')[0] + nomes[1].split('')[0] : nomes[0].split('')[0] + nomes[0].split('')[1];
    }

    function obterDataExpiracaoToken(token: string) : number {
        const decoded = jwtDecode(token);
        return decoded.exp!;
    }

    return (
        <UsuarioContext.Provider value={{ usuario, ChecarUsuarioAnonimo, VerificaSessao, HandleSignIn, HandleLogOut, AtualizarUsuario }}>
            { children }
        </UsuarioContext.Provider>
    );
}