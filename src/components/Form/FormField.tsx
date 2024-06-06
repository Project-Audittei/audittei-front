import Input from "./Input";
import Selecao, { SelectOptionsType } from "./Selecao";

interface FormFieldProps {
    label: string;
    value: any;
    tipo: React.HTMLInputTypeAttribute | "select";
    setValue: React.Dispatch<React.SetStateAction<any>>;
    modoEdicao?: boolean;
    opcoes?: SelectOptionsType[];
}

export default function FormField({ 
    label,
    value,
    tipo,
    setValue,
    modoEdicao,
    opcoes
 }: FormFieldProps) {
    
    if(modoEdicao) {
        switch(tipo) {
            case 'select':
                if(!opcoes) {
                    throw new Error("Campo 'opcoes' não pode ser nulo neste tipo de campo.");
                }
                return (
                    <Selecao
                        opcoes={ opcoes }
                    />
                );

            default:
                return <Input
                    type={tipo}
                    label={label}
                    value={value}
                    onChange={ setValue }
                />;
        }
    }

    return (
        <div className="form-field">
            <div className="label mb-1">{ label }</div>
            <div className="valor">{ value }</div>
        </div>
    );

}