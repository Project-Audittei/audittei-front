import VisaoBasica from "../../components/VisaoBasica";
import { useEffect, useState } from "react";
import { Printer, Pencil } from "lucide-react";
import Botao from "../../components/Botoes/Botao";
import FormViewer, { IForm } from "../../components/Form/FormViewer";
import { EscritorioModel } from "../../models/EscritorioModel";
import { useNavigate } from "react-router-dom";
import useUsuario from "../../hooks/useUsuario";
import { TelefoneMascara } from "../../helpers/TelefoneSanitize";

import { CNPJMascara } from "../../helpers/CNPJSanitize";

export default function PaginaVerEscritorio() {
    const { usuario } = useUsuario();
    const [escritorio, setEscritorio] = useState<EscritorioModel | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if(usuario) setEscritorio(usuario.escritorio);
    }, [usuario]);

    if(!escritorio) return (
        <VisaoBasica breadcrumbSecao="Gerenciar Escritório:" menuAtivo="/gerenciar-escritorio"></VisaoBasica>
    );

    const form: IForm = {
        secoes: [
            {
                title: "Dados cadastrais",
                campos: [
                    {
                        label: "CNPJ",
                        value: CNPJMascara(escritorio.cnpj),
                        tipo: "number",
                        setValue: e => setEscritorio({ ...escritorio, cnpj: e.currentTarget.value })
                    },
                    {
                        label: "Razão Social",
                        value: escritorio.razaoSocial,
                        tipo: "text",
                        setValue: e => setEscritorio({ ...escritorio, razaoSocial: e.currentTarget.value })
                    },
                    {
                        label: "E-mail do Escritório",
                        value: escritorio.email,
                        tipo: "text",
                        setValue: e => setEscritorio({ ...escritorio, email: e.currentTarget.value })
                    },
                    {
                        label: "Telefone do Escritório",
                        value: TelefoneMascara(escritorio.telefone),
                        tipo: "text",
                        setValue: e => setEscritorio({ ...escritorio, telefone: e.currentTarget.value })
                    },
                ]
            },
            {
                title: "Dados de Localização",
                campos: [
                    {
                        label: "CEP",
                        value: escritorio.cep,
                        tipo: "text",
                        setValue: e => setEscritorio({ ...escritorio, cep: e.currentTarget.value }),
                        opcoes: [
                            { id: 1, name: "Indústria" }
                        ]
                    },
                    {
                        label: "Logradouro",
                        value: escritorio.logradouro,
                        tipo: "text",
                        setValue: e => setEscritorio({ ...escritorio, logradouro: e.currentTarget.value })
                    },
                    {
                        label: "Bairro",
                        value: escritorio.bairro,
                        tipo: "text",
                        setValue: e => setEscritorio({ ...escritorio, bairro: e.currentTarget.value })
                    },
                    {
                        label: "Cidade",
                        value: escritorio.cidade,
                        tipo: "text",
                        setValue: e => setEscritorio({ ...escritorio, cidade: e.currentTarget.value })
                    },
                    {
                        label: "Número",
                        value: escritorio.numero,
                        tipo: "text",
                        setValue: e => setEscritorio({ ...escritorio, numero: e.currentTarget.value })
                    },
                    {
                        label: "Complemento",
                        value: escritorio.complemento ?? '-',
                        tipo: "text",
                        setValue: e => setEscritorio({ ...escritorio, complemento: e.currentTarget.value })
                    },
                    {
                        label: "UF",
                        value: escritorio.uf,
                        tipo: "text",
                        setValue: e => setEscritorio({ ...escritorio, uf: e.currentTarget.value })
                    }
                ]
            }
        ]
    };
    return (
        <VisaoBasica breadcrumbSecao="Gerenciar Escritório:" menuAtivo="/gerenciar-escritorio">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h3>Gerenciar Escritório</h3>
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
                            onClick={() => navigate('/gerenciar-escritorio/editar')}
                            label="Editar"
                        />
                    </div>
                </div>
            </div>            
            { form ? form.secoes.map( secao => (
                <FormViewer secao={secao} />
            ) ) : '' }

        </VisaoBasica>
    );
}