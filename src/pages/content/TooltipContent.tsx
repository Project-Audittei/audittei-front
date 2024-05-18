import Botao from "../../components/Botoes/Botao";
import ToolTip from "../../components/ToolTip/ToolTip";

export default function TooltipContent() {
    
    const tooltipText = 'Lorem ipsum dolor sit amet, consectetur adipi scingamet, consectetur adipi scingamet,  adipiscing';

    return (
        <>
            <h1 className="titulo-pagina mb-4">09. TOOLTIP</h1>
            <div className="row mt-3">
                <div className="col">
                    <ToolTip text={ tooltipText } positionY="top" positionX="left">
                        <Botao
                            estilo="Primary"
                            tamanho="Small"
                            label="Top Left"
                        />
                    </ToolTip>
                </div>
                <div className="col">
                    <ToolTip text={ tooltipText } positionY="top">
                        <Botao
                            estilo="Primary"
                            tamanho="Small"
                            label="Top Center"
                        />
                    </ToolTip>
                </div>
                <div className="col">
                    <ToolTip text={ tooltipText } positionY="top" positionX="right">
                        <Botao
                            estilo="Primary"
                            tamanho="Small"
                            label="Top Right"
                        />
                    </ToolTip>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <ToolTip text={ tooltipText } positionY="center" positionX="right">
                        <Botao
                            estilo="Primary"
                            tamanho="Small"
                            label="Center Right"
                        />
                    </ToolTip>
                </div>
                <div className="col"></div>
                <div className="col">
                    <ToolTip text={ tooltipText } positionY="center" positionX="left">
                        <Botao
                            estilo="Primary"
                            tamanho="Small"
                            label="Center Left"
                        />
                    </ToolTip>
                </div>
            </div>

            <div className="row mt-3">
                <div className="col">
                    <ToolTip text={ tooltipText } positionY="bottom" positionX="left">
                        <Botao
                            estilo="Primary"
                            tamanho="Small"
                            label="Bottom Left"
                        />
                    </ToolTip>
                </div>
                <div className="col">
                    <ToolTip text={ tooltipText } positionY="bottom">
                        <Botao
                            estilo="Primary"
                            tamanho="Small"
                            label="Bottom Center"
                        />
                    </ToolTip>
                </div>
                <div className="col">
                    <ToolTip text={ tooltipText } positionY="bottom" positionX="right">
                        <Botao
                            estilo="Primary"
                            tamanho="Small"
                            label="Bottom Right"
                        />
                    </ToolTip>
                </div>
            </div>
        </>
    );
}