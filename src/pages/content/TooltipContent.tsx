import Botao from "../../components/Botoes/Botao";
import ToolTip from "../../components/ToolTip/ToolTip";

export default function TooltipContent() {

    return (
        <>
            <h1 className="titulo-pagina mb-4">09. TOOLTIP</h1>
            <div className="row mt-3">
                <ToolTip text="Mensagem de texto">
                    <Botao
                        estilo="Primary"
                        tamanho="Small"
                        label="Label"
                    />
                </ToolTip>
            </div>
        </>
    );
}