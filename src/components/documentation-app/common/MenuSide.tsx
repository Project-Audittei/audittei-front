import { Home, Type, LayoutGrid } from "lucide-react";
import Botao from "../../Botao";
import { Link } from "react-router-dom";

export default function MenuSide() {
    return (
        <ul className="menu">
            <li><Link to={'/docs'}><Botao estilo="Menu" icone={ <Home size={16}/> } label="Home" tamanho="Small"  /></Link></li>
            <li><Link to={'/docs/tipografia'}><Botao estilo="Menu" icone={ <Type size={16}/> } label="Tipografia" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/grid'}><Botao estilo="Menu" icone={ <LayoutGrid size={16}/> } label="Grid" tamanho="Small" /></Link></li>
        </ul>
    );
}