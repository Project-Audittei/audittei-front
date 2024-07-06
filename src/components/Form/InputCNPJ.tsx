import { CNPJMascara } from "../../helpers/CNPJSanitize";
import Input, { InputPropsType } from "./Input";

interface InputCNPJProps extends InputPropsType {
    value: string;
    setValue: (e: any) => void;
    isCarregando?: boolean;
    disabled?: boolean
}

export default function InputCNPJ({ value, setValue, isCarregando, disabled = false, mensagensValidacao, estado }: InputCNPJProps) {

    const HandleOnChange = (e: any) => {
        setValue(e);
    }

    return (

        <div className="col-6 col-inline">
            <Input
                type="text"
                label="CNPJ"
                value={CNPJMascara(value) ?? ''}
                onChange={HandleOnChange}
                mensagensValidacao={mensagensValidacao}
                estado={estado}
                disabled={disabled}
            />
            { isCarregando ? <span className="loader"></span> : ''}
        </div>
    );
}