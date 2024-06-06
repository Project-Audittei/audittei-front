import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

interface MenuItem {
    label: string;
    link: string;
    icon?: JSX.Element;
    subitens?: MenuItem[];
}

export interface MenuLateral {
    secao?: string;
    itens: MenuItem[];
}

interface MenuLateralProps {
    baseUrl?: string;
    menu: MenuLateral[];
    ativo?: string;
}

export default function MenuSide({ baseUrl, menu, ativo }: MenuLateralProps) {

    function RenderizarMenu({ label, link, icon, subitens }: MenuItem) {
        let classContainer = "menu-item-container";
        let classMenu = 'menu-item';

        if(subitens) {
            classContainer = classContainer + " menu-item-container-parent";
            let itens: JSX.Element[] = [];

            subitens.map((item) => {
                return itens.push(RenderizarMenu(item));
            });

            return (
                <li className="menu-item">
                    <div className={ classContainer + " " + classMenu }>
                        { icon }
                        <span>{ label }</span>
                        <ChevronDown style={{ marginLeft: 'auto' }} size={16} />
                    </div>
                    <ul className="submenu">
                        { itens.map(item => (item)) }
                    </ul>
                </li>
            );
        }
        
        if(ativo) {
            if(link === ativo) {
                classMenu = classMenu + " ativo";
            }
        }

        return (
            <li className={ classMenu }>
                <Link to={ baseUrl ? `${link}` : link }>
                    <div className={ classContainer }>{ icon } <span>{ label }</span></div>
                </Link>
            </li>
        );
    }

    return (
        <ul className="menu">
            { menu.map(({ secao, itens }, index) => (
                <div key={index}>
                    { secao ? <li><div className="subtitulo mb-2">{ secao }</div></li> : '' }
                    { itens.map((item) => RenderizarMenu(item)) }
                </div>
            )) }
        </ul>
    );
}