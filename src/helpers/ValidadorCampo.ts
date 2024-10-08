import { InputError } from "../@types/InputErro";

type RegraValidacao = 'not-null' | 'not-empty' | 'more-than' | 'less-than' | 'valid-email';

export interface RegraValidacaoCampo {
    regra: RegraValidacao;
    value?: number;
}

export const ValidadorCampo = ( campo: string, regras: RegraValidacaoCampo[], setError?: (value: React.SetStateAction<InputError | null>) => void): boolean => {
    let estado = true;
    
    regras.map( ({ regra, value }) => {
        if(!estado) return false;

        switch(regra) {
            case "less-than":
                estado = campo.split('').length > value!;
                break;

            case 'more-than':
                estado = campo.split('').length < value!;
                break;

            case "not-null":
                estado = campo !== null;
                break;

            case "not-empty":
                estado = campo !== '';
                break;

            case "valid-email":
                estado = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(campo);
                break;
        }

        return estado;
    })

    if(setError && !estado) {
        setError({
            estado: "erro",
            mensagem: `O campo não pode ser vazio`
        });
    }

    return estado;
}

interface CamposParaValidacao {
    campo: string,
    regras: RegraValidacaoCampo[];
    setError: (value: React.SetStateAction<InputError | null>) => void;
    label?: string;
}

export const ValidarCampos = (campos: CamposParaValidacao[]) : boolean => {
    let estado = true;

    campos.map( ({ campo, regras, setError, label }) => {
        if(!ValidadorCampo(campo, regras)) {
            setError({
                estado: "erro",
                mensagem: label ? `O campo '${ label }' não pode ser vazio` : "O campo não pode ser vazio"
            });
            estado = false;
        } else setError(null);

        if(!estado) return estado;

        return true;
    } )

    return estado;
}