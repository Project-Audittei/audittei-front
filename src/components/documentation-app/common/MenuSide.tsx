import { Type, LayoutGrid, Brush, MousePointer2, Component, TextCursorInput, BookOpen, Award, BetweenHorizonalStart, Navigation, Info, TriangleAlert } from "lucide-react";
import Botao from "../../Botoes/Botao";
import { Link } from "react-router-dom";

export default function MenuSide() {
    return (
        <ul className="menu">
            <li><Link to={'/docs'}><Botao estilo="Menu" icone={<LayoutGrid size={16} />} label="Grid" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/margem'}><Botao estilo="Menu" icone={<BetweenHorizonalStart size={16} />} label="Margem" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/tipografia'}><Botao estilo="Menu" icone={<Type size={16} />} label="Tipografia" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/icones'}><Botao estilo="Menu" icone={<Award size={16} />} label="Ícones" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/cores'}><Botao estilo="Menu" icone={<Brush size={16} />} label="Cores" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/botoes'}><Botao estilo="Menu" icone={<MousePointer2 size={16} />} label="Botões" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/campos-de-texto'}><Botao estilo="Menu" icone={<TextCursorInput size={16} />} label="Elementos de Formulário" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/tooltip'}><Botao estilo="Menu" icone={<Info size={16} />} label="Tooltip" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/notificacoes'}><Botao estilo="Menu" icone={<TriangleAlert size={16} />} label="Notificações" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/paginacao'}><Botao estilo="Menu" icone={<BookOpen size={16} />} label="Paginação" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/navegacao-interna'}><Botao estilo="Menu" icone={<Navigation size={16} />} label="Navegação Interna" tamanho="Small" /></Link></li>
            <li><Link to={'/docs/modal'}><Botao estilo="Menu" icone={<Component size={16} />} label="Modal" tamanho="Small" /></Link></li>
        </ul>
    );
}