import { useNavigate } from "react-router-dom";
import { APIConfig } from "../api/APIConfig";
import { consumirAPI } from "../hooks/consumirAPI";
import useUsuario from "../hooks/useUsuario";
import { CNPJModel } from "../models/CNPJModel";
import { EmpresaModel, IEmpresaAtualizar, IEmpresaCadastro } from "../models/EmpresaModel";


export function useEmpresa() {
    const { usuario } = useUsuario();
    const navigate = useNavigate();
    
    const ObterEmpresaPorGUID = async (guid: string) : Promise<EmpresaModel> => {
        const { data } = await consumirAPI<any, EmpresaModel>({
            authToken: usuario?.access_token,
            url: APIConfig.obterEmpresa + "/" + guid
        });

        return data!;
    }

    const ObterEmpresas = async () : Promise<EmpresaModel[]> => {
        const { data } = await consumirAPI<any, EmpresaModel[]>({
            url: APIConfig.obterEmpresas,
            authToken: usuario!.access_token
        });

        return data!;
    }

    const ObterInformacoesCNPJ = async (cnpj: string) : Promise<CNPJModel> => {
        const { data } = await consumirAPI<object, CNPJModel>({
            url: `${APIConfig.buscarCNPJ}`,
            method: 'post',
            dataRequest: {
                "cnpj": cnpj
            },
            authToken: usuario!.access_token
        })

        return data!;
    }

    const CadastrarEmpresa = async (empresa: IEmpresaCadastro) => {
        const { data, success } = await consumirAPI<IEmpresaCadastro, CNPJModel>({
            url: `${APIConfig.cadastrarEmpresa}`,
            method: 'post',
            dataRequest: empresa,
            authToken: usuario!.access_token
        })

        if(success) navigate('/gerenciar-empresas');
    }
    
    const AtualizarEmpresa = async (empresa: IEmpresaAtualizar) => {
        const { success } = await consumirAPI<IEmpresaAtualizar, EmpresaModel>({
            url: `${APIConfig.atualizarEmpresa}`,
            method: 'post',
            dataRequest: empresa,
            authToken: usuario!.access_token
        })

        if(success) navigate('/gerenciar-empresas');
    }

    return { 
        ObterEmpresaPorGUID, 
        ObterEmpresas,
        ObterInformacoesCNPJ,
        CadastrarEmpresa,
        AtualizarEmpresa
    };
}