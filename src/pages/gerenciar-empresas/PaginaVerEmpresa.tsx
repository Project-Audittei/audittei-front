import VisaoBasica from "../../components/VisaoBasica";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmpresaModel } from "../../models/EmpresaModel";
import { Printer, Pencil, CircleX } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import Tabela from "../../components/Tabela/Tabela";
import AssociarUsuarios from "../../components/app/Inputs/AssociarUsuarios";
import FormViewer, { IForm } from "../../components/Form/FormViewer";

const data: EmpresaModel[] = [
    {
        id: 1,
        cnpj: 37764102000193,
        razao_social: "MicroPack LTDA",
        uf: "SP",
        cadastro: "14/05/24",
        bairro: "Perdizes",
        cep: "31837-033",
        cnae: 0,
        email: "joao@micropack.com.br",
        industria: "Indústria",
        logradouro: "Rua ABC",
        municipio: "São Paulo",
        nome_fantasia: "MicroPack",
        numero: "123",
        regimeTributario: "Simples Nacional",
        responsavel: "João Silva",
        complemento: "Frente"
    },
];

const time = [
    {
        id: 1,
        iniciais: "JS",
        nome: "João Silva",
        perfil: "Administrador"
    },
    {
        id: 2,
        iniciais: "MO",
        nome: "Maria Oliveira",
        perfil: "Analista"
    },
    {
        id: 3,
        iniciais: "FS",
        nome: "Felipe Santos",
        perfil: "Cliente"
    },
];

export default function PaginaVerEmpresa() {
    const [empresa, setEmpresa] = useState<EmpresaModel>({} as EmpresaModel);
    const form: IForm = {
        secoes: [
            {
                title: "Dados cadastrais",
                campos: [
                    {
                        label: "CNPJ",
                        value: empresa.cnpj,
                        tipo: "number",
                        setValue: e => setEmpresa({ ...empresa, cnpj: e.currentTarget.value })
                    },
                    {
                        label: "Razão Social",
                        value: empresa.razao_social,
                        tipo: "text",
                        setValue: e => setEmpresa({ ...empresa, razao_social: e.currentTarget.value })
                    },
                    {
                        label: "Nome Fantasia",
                        value: empresa.nome_fantasia,
                        tipo: "text",
                        setValue: e => setEmpresa({ ...empresa, nome_fantasia: e.currentTarget.value })
                    },
                    {
                        label: "Responsável Legal",
                        value: empresa.responsavel,
                        tipo: "text",
                        setValue: e => setEmpresa({ ...empresa, responsavel: e.currentTarget.value })
                    },
                    {
                        label: "E-mail",
                        value: empresa.email,
                        tipo: "text",
                        setValue: e => setEmpresa({ ...empresa, email: e.currentTarget.value })
                    },
                ]
            },
            {
                title: "Dados Tributários",
                campos: [
                    {
                        label: "Atividade",
                        value: empresa.razao_social,
                        tipo: "select",
                        setValue: e => setEmpresa({ ...empresa, razao_social: e.currentTarget.value }),
                        opcoes: [
                            { id: 1, name: "Indústria" }
                        ]
                    },
                    {
                        label: "CNAE",
                        value: empresa.cnpj,
                        tipo: "number",
                        setValue: e => setEmpresa({ ...empresa, cnpj: e.currentTarget.value })
                    },
                    {
                        label: "Regime Tributário",
                        value: empresa.nome_fantasia,
                        tipo: "select",
                        setValue: e => setEmpresa({ ...empresa, nome_fantasia: e.currentTarget.value }),
                        opcoes: [
                            { id: 1, name: "Regime Tributário" }
                        ]
                    }
                ]
            },
            {
                title: "Dados de Localização",
                campos: [
                    {
                        label: "CEP",
                        value: empresa.cep,
                        tipo: "text",
                        setValue: e => setEmpresa({ ...empresa, cep: e.currentTarget.value }),
                        opcoes: [
                            { id: 1, name: "Indústria" }
                        ]
                    },
                    {
                        label: "Logradouro",
                        value: empresa.logradouro,
                        tipo: "text",
                        setValue: e => setEmpresa({ ...empresa, logradouro: e.currentTarget.value })
                    },
                    {
                        label: "Bairro",
                        value: empresa.bairro,
                        tipo: "text",
                        setValue: e => setEmpresa({ ...empresa, bairro: e.currentTarget.value })
                    },
                    {
                        label: "Município",
                        value: empresa.municipio,
                        tipo: "text",
                        setValue: e => setEmpresa({ ...empresa, municipio: e.currentTarget.value })
                    },
                    {
                        label: "Número",
                        value: empresa.numero,
                        tipo: "text",
                        setValue: e => setEmpresa({ ...empresa, numero: e.currentTarget.value })
                    },
                    {
                        label: "Complemento",
                        value: empresa.complemento,
                        tipo: "text",
                        setValue: e => setEmpresa({ ...empresa, complemento: e.currentTarget.value })
                    },
                    {
                        label: "UF",
                        value: empresa.uf,
                        tipo: "text",
                        setValue: e => setEmpresa({ ...empresa, uf: e.currentTarget.value })
                    }
                ]
            }
        ]
    };

    const params = useParams();

    useEffect(() => {
        if (params.id) {
            setEmpresa(data[parseInt(params.id) - 1] as EmpresaModel);
        }

    }, [params]);

    return (
        <VisaoBasica breadcrumbSecao="Gerenciar Empresas:" menuAtivo="/gerenciar-empresas">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h3>{empresa.nome_fantasia}</h3>
                    </div>
                </div>
                <div className="col col-align-center align-right">
                    <div className="row row-align-right gap-0">
                        <Botao
                            tamanho="ExtraSmall"
                            estilo="Secondary"
                            icone={<Printer size={16} />}
                            label="Imprimir"
                        />
                        <Botao
                            className="ml-1"
                            tamanho="ExtraSmall"
                            estilo="Secondary"
                            icone={<Pencil size={16} />}
                            label="Editar"
                        />
                        <Botao
                            className="ml-3"
                            tamanho="ExtraSmall"
                            estilo="Danger"
                            icone={<CircleX size={16} />}
                            label="Inativar"
                        />
                    </div>
                </div>
            </div>
            <div className="row mt-4 mb-3">
                <div className="col">
                    <h5 className="mb-3">Time envolvido</h5>
                    <Tabela primeiroCampo="avatar" campos={['', 'Nome', 'Perfil']} itens={time} eventos={{ onDeletar: () => { } }} />
                </div>
            </div>
            <AssociarUsuarios />
            
            { form ? form.secoes.map( secao => (
                <FormViewer secao={secao} />
            ) ) : '' }

        </VisaoBasica>
    );
}