import { useEffect, useState } from "react";
import Input, { InputPropsType } from "./Input";
import { InputError } from "../../@types/InputErro";
import { CEPMascara, CEPSanitize } from "../../helpers/CEPHelper";


interface InputCEPProps extends InputPropsType {
    value: string;
    setValue: (telefone: string) => void;
    isCarregando?: boolean;
    disabled?: boolean
}

export default function InputCEP({ value, setValue, isCarregando, mensagensValidacao, estado, className, disabled = false }: InputCEPProps) {

    const [cep, setCep] = useState<string>('');
    const [cepErro, setCepErro] = useState<InputError | null>(null);

    useEffect(() => {
        setCep(value);
    }, [value]);

    useEffect(() => {
        if(estado && mensagensValidacao) {
            setCepErro({
                estado: estado,
                mensagem: mensagensValidacao.erro ?? ''
            });
        }
    }, [estado, mensagensValidacao]);

    const HandleOnChange = (e: any) => {
        let entrada = e.target.value;

        if(CEPSanitize(entrada).split('').length > 8) return;

        setValue(entrada);
    }

    return (

        <>
            <Input
                max={8}
                type="string"
                label="CEP"
                className={ className }
                value={ CEPMascara(cep) ?? ''}
                onChange={HandleOnChange}
                mensagensValidacao={{
                    erro: cepErro?.mensagem
                }}
                estado={ cepErro?.estado ?? 'padrao' }
                disabled={disabled}
            />
            { isCarregando ? <span className="loader"></span> : ''}
        </>
    );
}