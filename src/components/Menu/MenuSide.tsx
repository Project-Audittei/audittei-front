import { Home, SearchCheck, HandCoins, BriefcaseBusiness, Users, Building2, ShieldHalf, CreditCard } from "lucide-react";
import { Link } from "react-router-dom";
import Botao from "../Botoes/Botao";

export default function MenuSide() {
    return (
        <ul className="menu">
            <li><Link to={'/'}><Botao estilo="Menu" icone={<Home size={16} />} label="Início" tamanho="Small" /></Link></li>
            <li><Link to={'/'}><Botao estilo="Menu" icone={<SearchCheck size={16} />} label="Fiscal" tamanho="Small" subitens={[]}/></Link></li>
            <li><Link to={'/'}><Botao estilo="Menu" icone={<HandCoins size={16} />} label="Contábil" tamanho="Small" subitens={[]}/></Link></li>
            <li><Link to={'/'}><Botao estilo="Menu" icone={<BriefcaseBusiness size={16} />} label="Gestão" tamanho="Small" subitens={[]}/></Link></li>
            <li><Link to={'/'}><Botao estilo="Menu" icone={<Users size={16} />} label="Recursos Humanos" tamanho="Small" subitens={[]}/></Link></li>
            <li><div className="subtitulo">ADMINISTRAÇÃO</div></li>
            <li><Link to={'/'}><Botao estilo="Menu" icone={<Building2 size={16} />} label="Gerenciar Escritório" tamanho="Small" subitens={[]}/></Link></li>
            <li><Link to={'/'}><Botao estilo="Menu" icone={<ShieldHalf size={16} />} label="Gerenciar Equipe" tamanho="Small" subitens={[]}/></Link></li>
            <li><Link to={'/'}><Botao estilo="Menu" icone={<BriefcaseBusiness size={16} />} label="Gerenciar Empresas" tamanho="Small" subitens={[]}/></Link></li>
            <li><Link to={'/'}><Botao estilo="Menu" icone={<CreditCard size={16} />} label="Gerenciar Assinatura" tamanho="Small" subitens={[]}/></Link></li>
        </ul>
    );
}