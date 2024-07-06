import { ReactNode, useEffect, useState } from "react";
import { Bell, BriefcaseBusiness, Building2, CreditCard, HandCoins, Home, PackageSearch, SearchCheck, ShieldHalf, Upload, Users } from "lucide-react";
import Botao from "./Botoes/Botao";
import Modal from "./Modal/Modal";
import MenuSide, { MenuLateral } from "./Menu/MenuSide";
import CardPerfil from "./CardPerfil/CardPerfil";
import useUsuario from "../hooks/useUsuario";
import { useNavigate } from "react-router-dom";
import Breadcrumb from "./breadcrumb/Breadcrumb";

type VisaoBasicaPropsType = {
    children?: ReactNode;
    menuAtivo?: string;
    breadcrumbSecao?: string;
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
                link: '#',
                icon: <SearchCheck size={16} />,
                desabilitado: true,
                subitens: [
                    { label: "Entradas", link: "#" },
                    { label: "Saídas", link: "#" }
                ]
            },
            {
                label: "Cenários Tributários",
                link: '#',
                icon: <HandCoins size={16} />,
                desabilitado: true,
                subitens: [
                    { label: "Entradas", link: "#" },
                    { label: "Saídas", link: "#" }
                ]
            },
            {
                label: "Parceiros",
                link: '#',
                icon: <Users size={16} />,
                desabilitado: true
            },
            {
                label: "Produtos",
                link: '#',
                icon: <PackageSearch size={16} />,
                desabilitado: true
            },
            {
                label: "Importações",
                link: '#',
                icon: <Upload size={16} />,
                desabilitado: true
            }
        ]
    },
    {
        secao: "ADMINISTRAÇÃO",
        itens: [
            {
                label: "Gerenciar Escritório",
                link: '/gerenciar-escritorio',
                icon: <Building2 size={16} />
            },
            {
                label: "Gerenciar Equipe",
                link: '#',
                icon: <ShieldHalf size={16} />
            },
            {
                label: "Gerenciar Empresas",
                link: '/gerenciar-empresas',
                icon: <BriefcaseBusiness size={16} />,
                subitens: [
                    {
                        label: 'Ver todas',
                        link: '/gerenciar-empresas'
                    },
                    {
                        label: 'Adicionar nova empresa',
                        link: '/gerenciar-empresas/nova'
                    },
                ]
            },
            {
                label: "Gerenciar Assinatura",
                link: '#',
                icon: <CreditCard size={16} />
            },
        ]
    }
];

export default function VisaoBasica({ children, menuAtivo, breadcrumbSecao }: VisaoBasicaPropsType) {
    const navigate = useNavigate();
    const { VerificaSessao } = useUsuario();

    const [sessaoVerificada, setSessaoVerificada] = useState(false);

    useEffect(() => {
        VerificaSessao()
            .then((result) => {
                console.log(result);
                return !result ? navigate('/auth/login') : '';
            }).finally(() => setSessaoVerificada(true));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if(!sessaoVerificada) return <></>;

    return (
        <div className="app-container">
            <Modal />
            <aside>
                <div className="header">
                    <img src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`} alt="" />
                </div>
                <div className="separador"></div>
                <div className="container h-max flex">
                    <MenuSide baseUrl="audittei" menu={menu} ativo={menuAtivo}/>
                    <CardPerfil />
                </div>
            </aside>
            <div className="app-content">
                <header className="app-header">
                    <div className="row">
                        {/* <div className="col-2">
                            <span className="selecao-empresa">Selecione uma empresa</span>
                        </div>
                        <div className="col-5">
                            <Selecao
                                opcoes={[
                                    { id: 1, name: "TV Globo" }
                                ]}
                            />
                        </div> */}
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
                <main>
                    <Breadcrumb secao={ breadcrumbSecao } />
                    { children }
                </main>
            </div>
        </div>
    );
}