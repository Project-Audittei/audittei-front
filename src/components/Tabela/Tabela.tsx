import { CircleX, Eye, Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import Botao from "../Botoes/Botao";
import { EntidadeBasicaModel } from "../../models/EntidadeBasicaModel";
import { CNPJMascara } from "../../helpers/CNPJSanitize";

export type TabelaCamposHeader = string[];
type Evento = (guid: string) => void;

interface TabelaProps<T> {
    campos: TabelaCamposHeader;
    primeiroCampo?: "avatar" | "numerico" | "guid";
    chaves?: (keyof T)[];
    itens: T[];

    eventos?: {
        onEditar?: Evento;
        onVisualizar?: Evento;
        onDeletar?: Evento;
    }
}


export default function Tabela<T extends EntidadeBasicaModel>({ campos, itens, chaves, eventos, primeiroCampo }: TabelaProps<T>) {
    const [chavesObj, setChavesObj] = useState<(keyof T)[]>([]);

    const renderizarTabela = () => {
        if (itens.length > 0) {
            const keys = Object.keys(itens[0] as object);

            keys.splice(keys.indexOf("id"), 1);

            if (chaves) {
                setChavesObj(chaves);
                return;
            }
            setChavesObj(keys as (keyof T)[]);
        }
    }

    useEffect(() => {
        renderizarTabela();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [itens]);

    if (itens === undefined) return <></>;
    
    if (itens.length === 0) return <></>;

    return (
        <table>
            <thead>
                <tr>
                    {campos.map((campo, index) => {
                        if (index === 0 && primeiroCampo) {
                            return (
                                <th className="avatar" key={index}>{campo}</th>
                            );
                        }

                        return (
                            <th key={index}>{campo}</th>
                        )
                    }

                    )}
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {itens.map((item: T, index) => (
                    <tr key={index}>
                        {chavesObj.map((chave, index) => {
                            if (index === 0 && primeiroCampo) {
                                if (primeiroCampo === 'guid') {
                                    return (
                                        <td key={index}><div className="avatar-placeholder"></div></td>
                                    );
                                }

                                return (
                                    <td key={index}><div className="avatar-placeholder">{item[chave] as string}</div></td>
                                );
                            }

                            if(chave === 'cnpj') {
                                return (
                                    <td key={index}>{ CNPJMascara(item[chave] as string) }</td>
                                )
                            }

                            if(chave === 'data' || chave === 'created_at') {
                                return (
                                    <td key={index}>{ (item[chave] as Date).toString() }</td>
                                )
                            }

                            return (
                                <td key={index}>{item[chave] as string}</td>
                            )
                        }
                        )}
                        <td>
                            <div className="row row-align-right">
                                {eventos?.onVisualizar ?
                                    <Botao
                                        estilo="Secondary"
                                        tamanho="ExtraSmall"
                                        label="Ver"
                                        icone={<Eye size={16} />}
                                        onClick={e => eventos?.onVisualizar ? eventos.onVisualizar(item.guid) : undefined}
                                    /> : ''}
                                {eventos?.onEditar ? <Botao
                                    estilo="Secondary"
                                    tamanho="ExtraSmall"
                                    label="Editar"
                                    icone={<Pencil size={16} />}
                                    onClick={e => eventos?.onEditar ? eventos.onEditar(item.guid) : undefined}
                                /> : ''}
                                {eventos?.onDeletar ? <Botao
                                    estilo="Danger"
                                    tamanho="ExtraSmall"
                                    label="Remover"
                                    icone={<CircleX size={16} />}
                                    onClick={e => eventos?.onDeletar ? eventos.onDeletar(item.guid) : undefined}
                                /> : ''}
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}