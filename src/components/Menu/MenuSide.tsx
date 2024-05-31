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
    menu: MenuLateral[];
    ativo?: string;
}

export default function MenuSide({ menu, ativo }: MenuLateralProps) {

    function RenderizarMenu({ label, link, icon, subitens }: MenuItem) {
        if(subitens) {
            let itens: JSX.Element[] = [];

            subitens.map((item) => {
                return itens.push(RenderizarMenu(item));
            });

            return (
                <li className="menu-item">
                    <div className="menu-item-container">
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
        
        let classMenu = 'menu-item';

        if(ativo) {
            if(label === ativo) {
                classMenu += " ativo";
            }
        }

        return (
            <li className={ classMenu }>
                <Link to={link}>
                    <div className="menu-item-container">{ icon } <span>{ label }</span></div>
                </Link>
            </li>
        );
    }

    return (
        <ul className="menu">
            { menu.map(({ secao, itens }) => {
                return(
                    <>
                        { secao ? <li><div className="subtitulo mb-2">{ secao }</div></li> : '' }
                        { itens.map((item) => RenderizarMenu(item)) }
                    </>
                );
            }) }
        </ul>
    );
}