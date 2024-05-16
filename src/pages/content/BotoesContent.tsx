import { ArrowRight, Plus } from "lucide-react";
import Botao from "../../components/Botao";

export default function BotoesContent() {
    return (
        <>
            <h1 className="titulo-pagina mb-4">06. Botões</h1>

            <div className="row mb-3">
                <div className="col">
                    <div className="row"><div className="subtitulo">Large</div></div>
                    <div className="row">
                        <div className="col-1">
                            No Icon
                        </div>
                        <div className="col">
                            <div className="row">
                                <Botao estilo="Primary" tamanho="Large" label="Label" />
                                <Botao estilo="Secondary" tamanho="Large" label="Label" />
                                <Botao estilo="Third" tamanho="Large" label="Label" />
                                <Botao estilo="Third" tamanho="Large" label="Label" disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            Icon right
                        </div>
                        <div className="col">
                            <div className="row">                            
                                <Botao estilo="Primary" className="my-2" tamanho="Large" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Secondary" className="my-2" tamanho="Large" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Third" className="my-2" tamanho="Large" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Primary" className="my-2" tamanho="Large" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita" disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            Icon left
                        </div>
                        <div className="col">
                            <div className="row">                            
                                <Botao estilo="Primary" tamanho="Large" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Secondary" tamanho="Large" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Third" tamanho="Large" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Primary" tamanho="Large" label="Label" icone={<Plus size={24} />} disabled/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="row"><div className="subtitulo">Normal</div></div>
                    <div className="row">
                        <div className="col-1">
                            No Icon
                        </div>
                        <div className="col">
                            <div className="row">
                                <Botao estilo="Primary" tamanho="Normal" label="Label" />
                                <Botao estilo="Secondary" tamanho="Normal" label="Label" />
                                <Botao estilo="Third" tamanho="Normal" label="Label" />
                                <Botao estilo="Primary" tamanho="Normal" label="Label" disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            Icon right
                        </div>
                        <div className="col">
                            <div className="row">                            
                                <Botao estilo="Primary" className="my-2" tamanho="Normal" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Secondary" className="my-2" tamanho="Normal" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Third" className="my-2" tamanho="Normal" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Primary" className="my-2" tamanho="Normal" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita" disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            Icon left
                        </div>
                        <div className="col">
                            <div className="row">                            
                                <Botao estilo="Primary" tamanho="Normal" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Secondary" tamanho="Normal" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Third" tamanho="Normal" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Primary" tamanho="Normal" label="Label" icone={<Plus size={24} />} disabled/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="row"><div className="subtitulo">Medium</div></div>
                    <div className="row">
                        <div className="col-1">
                            No Icon
                        </div>
                        <div className="col">
                            <div className="row">
                                <Botao estilo="Primary" tamanho="Medium" label="Label" />
                                <Botao estilo="Secondary" tamanho="Medium" label="Label" />
                                <Botao estilo="Third" tamanho="Medium" label="Label" />
                                <Botao estilo="Primary" tamanho="Medium" label="Label" disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            Icon right
                        </div>
                        <div className="col">
                            <div className="row">                            
                                <Botao estilo="Primary" className="my-2" tamanho="Medium" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Secondary" className="my-2" tamanho="Medium" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Third" className="my-2" tamanho="Medium" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Primary" className="my-2" tamanho="Medium" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita" disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            Icon left
                        </div>
                        <div className="col">
                            <div className="row">                            
                                <Botao estilo="Primary" tamanho="Medium" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Secondary" tamanho="Medium" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Third" tamanho="Medium" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Primary" tamanho="Medium" label="Label" icone={<Plus size={24} />} disabled/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="row"><div className="subtitulo">Small</div></div>
                    <div className="row">
                        <div className="col-1">
                            No Icon
                        </div>
                        <div className="col">
                            <div className="row">
                                <Botao estilo="Primary" tamanho="Small" label="Label" />
                                <Botao estilo="Secondary" tamanho="Small" label="Label" />
                                <Botao estilo="Third" tamanho="Small" label="Label" />
                                <Botao estilo="Primary" tamanho="Small" label="Label" disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            Icon right
                        </div>
                        <div className="col">
                            <div className="row">                            
                                <Botao estilo="Primary" className="my-2" tamanho="Small" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Secondary" className="my-2" tamanho="Small" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Third" className="my-2" tamanho="Small" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Primary" className="my-2" tamanho="Small" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita" disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            Icon left
                        </div>
                        <div className="col">
                            <div className="row">                            
                                <Botao estilo="Primary" tamanho="Small" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Secondary" tamanho="Small" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Third" tamanho="Small" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Primary" tamanho="Small" label="Label" icone={<Plus size={24} />} disabled/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row mb-3">
                <div className="col">
                    <div className="row"><div className="subtitulo">ExtraSmall</div></div>
                    <div className="row">
                        <div className="col-1">
                            No Icon
                        </div>
                        <div className="col">
                            <div className="row">
                                <Botao estilo="Primary" tamanho="ExtraSmall" label="Label" />
                                <Botao estilo="Secondary" tamanho="ExtraSmall" label="Label" />
                                <Botao estilo="Third" tamanho="ExtraSmall" label="Label" />
                                <Botao estilo="Primary" tamanho="ExtraSmall" label="Label" disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            Icon right
                        </div>
                        <div className="col">
                            <div className="row">                            
                                <Botao estilo="Primary" className="my-2" tamanho="ExtraSmall" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Secondary" className="my-2" tamanho="ExtraSmall" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Third" className="my-2" tamanho="ExtraSmall" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita"/>
                                <Botao estilo="Primary" className="my-2" tamanho="ExtraSmall" label="Label" icone={<ArrowRight size={24} />} iconePosicao="direita" disabled/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-1">
                            Icon left
                        </div>
                        <div className="col">
                            <div className="row">                            
                                <Botao estilo="Primary" tamanho="ExtraSmall" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Secondary" tamanho="ExtraSmall" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Third" tamanho="ExtraSmall" label="Label" icone={<Plus size={24} />}/>
                                <Botao estilo="Primary" tamanho="ExtraSmall" label="Label" icone={<Plus size={24} />} disabled/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}