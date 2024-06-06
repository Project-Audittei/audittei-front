import VisaoBasica from "../../components/VisaoBasica";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { EmpresaModel } from "../../models/EmpresaModel";

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

export default function PaginaVerEmpresa() {
    const [empresa, setEmpresa] = useState<EmpresaModel>({} as EmpresaModel);

    const params = useParams();

    useEffect(() => {
        if(params.id) {
            setEmpresa(data[parseInt(params.id) - 1] as EmpresaModel);
        }
    }, [params]);

    return (
        <VisaoBasica breadcrumbSecao="Gerenciar Empresas:" menuAtivo="/gerenciar-empresas/nova">
            <div className="row">
                <div className="col">
                    <div className="row">
                        <h3>{empresa.nome_fantasia}</h3>
                    </div>
                </div>
                <div className="col col-align-center align-right">
                </div>
            </div>
            
        </VisaoBasica>
    );
}