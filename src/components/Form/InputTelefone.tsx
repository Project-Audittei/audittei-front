import { useEffect, useState } from "react";
import Input, { InputPropsType } from "./Input";
import { InputError } from "../../@types/InputErro";
import { TelefoneMascara, TelefoneSanitize } from "../../helpers/TelefoneSanitize";


interface InputCNPJProps extends InputPropsType {
    value: string;
    setValue: (telefone: string) => void;
    isCarregando?: boolean;
    disabled?: boolean
}

export default function InputTelefone({ value, setValue, isCarregando, mensagensValidacao, estado, disabled = false }: InputCNPJProps) {

    const [telefone, setTelefone] = useState<string>('');
    const [telefoneErro, setTelefoneErro] = useState<InputError | null>(null);

    useEffect(() => {
        setTelefone(value);
    }, [value]);

    useEffect(() => {
        if(estado && mensagensValidacao) {
            setTelefoneErro({
                estado: estado,
                mensagem: mensagensValidacao.erro ?? ''
            });
        }
    }, [estado, mensagensValidacao]);

    const HandleOnChange = (e: any) => {
        let entrada = e.target.value;

        if(TelefoneSanitize(entrada).split('').length > 11) return;

        setValue(entrada);
    }

    return (

        <>
            <Input
                max={11}
                type="text"
                label="Telefone"
                value={ TelefoneMascara(telefone) ?? ''}
                onChange={HandleOnChange}
                mensagensValidacao={{
                    erro: telefoneErro?.mensagem
                }}
                estado={ telefoneErro?.estado ?? 'padrao' }
                disabled={disabled}
            />
            { isCarregando ? <span className="loader"></span> : ''}
        </>
    );
}