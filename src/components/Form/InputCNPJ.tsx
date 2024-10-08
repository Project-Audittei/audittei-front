import { useEffect, useState } from "react";
import { CNPJMascara, CNPJSanitize } from "../../helpers/CNPJSanitize";
import { ValidarCNPJ } from "../../helpers/ValidadorCNPJ";
import Input, { InputPropsType } from "./Input";
import { InputError } from "../../@types/InputErro";

interface InputCNPJProps extends InputPropsType {
    value: string;
    setValue: (cnpj: string) => void;
    isCarregando?: boolean;
    disabled?: boolean
}

export default function InputCNPJ({ value, setValue, isCarregando, mensagensValidacao, estado, disabled = false }: InputCNPJProps) {

    const [cnpj, setCNPJ] = useState<string>('');
    const [cnpjErro, setCNPJErro] = useState<InputError | null>(null);

    useEffect(() => {
        setCNPJ(value);
    }, [value]);

    useEffect(() => {
        if(estado && mensagensValidacao) {
            setCNPJErro({
                estado: estado,
                mensagem: mensagensValidacao.erro ?? ''
            });
        }
    }, [estado, mensagensValidacao]);

    const HandleOnChange = (e: any) => {
        let entrada = e.target.value;

        if(CNPJSanitize(entrada).split('').length > 14) return;

        setCNPJ(entrada);
        if (CNPJSanitize(entrada).split('').length === 14) {
            if(ValidarCNPJ(CNPJMascara(entrada))) {
                setCNPJErro(null);
                setValue(CNPJSanitize(entrada));
            } else {
                setCNPJErro({
                    estado: "erro",
                    mensagem: "CNPJ inválido"
                })
            }
        } else {
            setCNPJErro(null);
        }
    }

    return (

        <>
            <Input
                max={14}
                type="text"
                label="CNPJ"
                value={ CNPJMascara(cnpj) ?? ''}
                onChange={HandleOnChange}
                mensagensValidacao={{
                    erro: cnpjErro?.mensagem
                }}
                estado={ cnpjErro?.estado ?? 'padrao' }
                disabled={disabled}
            />
            { isCarregando ? <span className="loader"></span> : ''}
        </>
    );
}