import { Plus } from "lucide-react";
import Botao from "../../Botoes/Botao";

export default function MargemCelular() {
    return (
        <div className="row row-align-top">
            <div className="col-2">
                <div className="row">
                    <div className="card-informacoes informacoes-celular">
                        <div className="card-header">
                            <h6>CELULAR</h6>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>
                                    <span className="item-numero">1</span>
                                    <p>Espaçamento - Header e Footer</p>
                                    <span className="item-tamanho">48px</span>
                                </li>
                                <li>
                                    <span className="item-numero">2</span>
                                    <p>Espaçamento - Entre Seções</p>
                                    <span className="item-tamanho">48px</span>
                                </li>
                                <li className="separador"></li>
                                <li>
                                    <span className="item-numero">3</span>
                                    <p>Espaçamento Pequeno</p>
                                    <span className="item-tamanho">16px</span>
                                </li>
                                <li>
                                    <span className="item-numero">4</span>
                                    <p>Espaçamento Médio</p>
                                    <span className="item-tamanho">24px</span>
                                </li>
                                <li>
                                    <span className="item-numero">5</span>
                                    <p>Espaçamento Grande</p>
                                    <span className="item-tamanho">32px</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="card-informacoes informacoes-celular">
                        <div className="card-header">
                            <h6>CLASSES</h6>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>
                                    <span className="item-numero">1</span>
                                    <p>Espaçamento - Header e Footer</p>
                                    <span className="item-nome">.m-header-footer</span>
                                </li>
                                <li>
                                    <span className="item-numero">2</span>
                                    <p>Espaçamento - Entre Seções</p>
                                    <span className="item-nome">.m-section</span>
                                </li>
                                <li className="separador"></li>
                                <li>
                                    <span className="item-numero">3</span>
                                    <p>Espaçamento Pequeno</p>
                                    <span className="item-nome">.m-thin</span>
                                </li>
                                <li>
                                    <span className="item-numero">4</span>
                                    <p>Espaçamento Médio</p>
                                    <span className="item-nome">.m-medium</span>
                                </li>
                                <li>
                                    <span className="item-numero">5</span>
                                    <p>Espaçamento Grande</p>
                                    <span className="item-nome">.m-large</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-10">
                <div className={`margem-demo celular`} style={{ width: 320, backgroundColor: '#ffffff' }}>
                    <div className="container">
                        <div className="m-header"></div>
                        <section className="m-section">
                            <h1 className="m-thin">Lorem ipsum dolor sit amet, consectetur</h1>
                            <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                            <Botao
                                estilo="Primary"
                                tamanho="Normal"
                                label="Label"
                                tamanhoAutomatico
                            />
                        </section>
                        <section className="m-section">
                            <h1 className="m-thin">Lorem ipsum dolor sit amet, consectetur</h1>
                            <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                            <div className="row">
                                <Botao
                                    estilo="Primary"
                                    tamanho="Normal"
                                    label="Label"
                                    tamanhoAutomatico
                                />
                                <Botao
                                    estilo="Secondary"
                                    tamanho="Normal"
                                    label="Label"
                                    icone={<Plus size={16}/>}
                                    iconePosicao="esquerda"
                                    tamanhoAutomatico
                                />
                            </div>
                        </section>
                        <section className="m-section">
                            <h1 className="m-thin">Lorem ipsum dolor sit amet, consectetur</h1>
                            <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                            <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                            <div className="image-placeholder"></div>
                        </section>
                        <section className="m-section">
                            <h1 className="m-thin">Lorem ipsum dolor sit amet, consectetur</h1>
                            <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                        </section>
                        <section className="m-section">
                            <h1 className="m-thin">Lorem ipsum dolor sit amet, consectetur</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                        </section>
                        <footer className="m-footer"></footer>
                    </div>
                </div>
            </div>
        </div>
    );
}