import { MensagensValidacao } from "../components/Form/MensagemValidacao";
import { EstadosForcaType } from "./EstadoForca";

export interface FormsExemplo {
    valorTexto?: string;
    setValorTexto?: React.Dispatch<React.SetStateAction<string | undefined>>;
    forcaEstado: EstadosForcaType;
    desabilitado: boolean;
    mensagensValidacao: MensagensValidacao;
}