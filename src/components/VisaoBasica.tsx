import { ReactNode, useEffect } from "react";
import { Bell, BriefcaseBusiness, Building2, CreditCard, HandCoins, Home, SearchCheck, ShieldHalf, Users } from "lucide-react";
import Botao from "./Botoes/Botao";
import Modal from "./Modal/Modal";
import MenuSide, { MenuLateral } from "./Menu/MenuSide";
import Selecao from "./Form/Selecao";
import CardPerfil from "./CardPerfil/CardPerfil";
import useUsuario from "../hooks/useUsuario";
import { useNavigate } from "react-router-dom";

type VisaoBasicaPropsType = {
    children?: ReactNode;
    menuAtivo?: string;
}

const menu: MenuLateral[] = [
    {
        itens: [
            {
                label: "Inicio",
                link: '/',
                icon: <Home size={16} />
            },
            {
                label: "Fiscal",
                link: '/',
                icon: <SearchCheck size={16} />
            },
            {
                label: "Contábil",
                link: '/',
                icon: <HandCoins size={16} />
            },
            {
                label: "Gestão",
                link: '/',
                icon: <BriefcaseBusiness size={16} />
            },
            {
                label: "Recursos Humanos",
                link: '/',
                icon: <Users size={16} />
            },
        ]
    },
    {
        secao: "ADMINISTRAÇÃO",
        itens: [
            {
                label: "Gerenciar Escritório",
                link: '/',
                icon: <Building2 size={16} />
            },
            {
                label: "Gerenciar Equipe",
                link: '/',
                icon: <ShieldHalf size={16} />
            },
            {
                label: "Gerenciar Empresas",
                link: '/',
                icon: <BriefcaseBusiness size={16} />,
                subitens: [
                    {
                        label: 'Ver todas',
                        link: '/'
                    },
                    {
                        label: 'Adicionar nova empresa',
                        link: '/'
                    },
                ]
            },
            {
                label: "Gerenciar Assinatura",
                link: '/',
                icon: <CreditCard size={16} />
            },
        ]
    }
];

export default function VisaoBasica({ children, menuAtivo }: VisaoBasicaPropsType) {

    const navigate = useNavigate();
    const { VerificaSessao } = useUsuario();

    useEffect(() => {
        VerificaSessao()
            .then( result => {
                if(!result) return navigate('/login');
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="app-container">
            <Modal />
            <aside>
                <div className="header">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="" />
                </div>
                <div className="separador"></div>
                <div className="container h-max flex">
                    <MenuSide menu={menu} ativo={menuAtivo}/>
                    <CardPerfil />
                </div>
            </aside>
            <div className="app-content">
                <header className="app-header">
                    <div className="row">
                        <div className="col-2">
                            <span className="selecao-empresa">Selecione uma empresa</span>
                        </div>
                        <div className="col-5">
                            <Selecao
                                opcoes={[
                                    { id: 1, name: "TV Globo" }
                                ]}
                            />
                        </div>
                        <div className="col">
                            <Botao
                                icone={<Bell size={16} />}
                                estilo="Third"
                                tamanho="Medium"
                                label="Quadro de Avisos"
                                className="float-right"
                                notificacoes={5}
                            />
                        </div>
                    </div>
                </header>
                <main>{ children }</main>
            </div>
        </div>
    );
}