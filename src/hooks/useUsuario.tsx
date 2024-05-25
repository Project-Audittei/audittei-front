import { useContext } from "react";
import { UsuarioContext } from "../contexts/UsuarioContext";

export default function useUsuario() {
    const context = useContext(UsuarioContext);

    return context;
}