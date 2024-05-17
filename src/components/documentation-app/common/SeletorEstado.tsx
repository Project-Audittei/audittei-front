import Selecao, { SelectOptionsType } from "../../Form/Selecao";

export interface SeletorEstadoPropsType {
    value: any;
    onChange: React.ChangeEventHandler<HTMLSelectElement>;
}

export default function SeletorEstado({ value, onChange }: SeletorEstadoPropsType) {
    const opcoes: SelectOptionsType[] = [
        { id: 1, name: 'Padrão' },
        { id: 2, name: 'Aviso' },
        { id: 3, name: 'Erro' },
        { id: 4, name: 'Carregando' },
        { id: 5, name: 'Válido' },
        { id: 6, name: 'Desligado' },
    ];

    return (
        <Selecao
            opcoes={ opcoes }
            value={value}
            onChange={ onChange }
        />
    );
}