import { Home, Type, LayoutGrid, Brush, MousePointer2, Component, TextCursorInput, AlertCircle } from "lucide-react";
import Botao from "../../Botao";
import { Link } from "react-router-dom";

export default function MenuSide() {
    return (
        <ul className="menu">
            <li><Link to={'/docs'}><Botao estilo="Menu" icone={ <Home size={16}/> } label="Home" tamanho="Small"  /></Link></li>
            <li><Link to={'/docs/grid'}><Botao estilo="Menu" icone={ <LayoutGrid size={16}/> } label="Grid" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/tipografia'}><Botao estilo="Menu" icone={ <Type size={16}/> } label="Tipografia" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/cores'}><Botao estilo="Menu" icone={ <Brush size={16}/> } label="Cores" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/botoes'}><Botao estilo="Menu" icone={ <MousePointer2 size={16}/> } label="Botões" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/modal'}><Botao estilo="Menu" icone={ <Component size={16}/> } label="Modal" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/campos-de-texto'}><Botao estilo="Menu" icone={ <TextCursorInput size={16}/> } label="Campos de Texto" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/notificacoes'}><Botao estilo="Menu" icone={ <AlertCircle size={16}/> } label="Notificações" tamanho="Small" /></Link></li>
        </ul>
    );
}