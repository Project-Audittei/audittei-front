import { Plus } from "lucide-react";
import Botao from "../../Botoes/Botao";

export default function MargemDesktop() {
    return (
        <div className="row row-align-top">
            <div className="col-2">
                <div className="row">
                    <div className="card-informacoes informacoes-celular">
                        <div className="card-header">
                            <h6>DESKTOP</h6>
                        </div>
                        <div className="card-body">
                            <ul>
                                <li>
                                    <span className="item-numero">1</span>
                                    <p>Espaçamento - Header e Footer</p>
                                    <span className="item-tamanho">80px</span>
                                </li>
                                <li>
                                    <span className="item-numero">2</span>
                                    <p>Espaçamento - Entre Seções</p>
                                    <span className="item-tamanho">64px</span>
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
                                    <span className="item-tamanho">32px</span>
                                </li>
                                <li>
                                    <span className="item-numero">5</span>
                                    <p>Espaçamento Grande</p>
                                    <span className="item-tamanho">40px</span>
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
                <div className={`margem-demo desktop`} style={{ width: 1280, backgroundColor: '#ffffff' }}>
                    <div className="container">
                        <div className="m-header"></div>
                        <section className="m-section">
                            <h1 className="m-medium">Lorem ipsum dolor sit amet, consectetur iaculis. Aenean consectetur tincidunt turpis</h1>
                            <div className="row">
                                <div className="col-8">
                                    <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpisLorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpisLorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <Botao
                                        estilo="Primary"
                                        tamanho="Normal"
                                        label="Label"
                                        tamanhoAutomatico
                                    />
                                </div>
                            </div>
                        </section>
                        <section className="m-section">
                            <h2 className="m-thin">Lorem ipsum dolor sit </h2>
                            <div className="row">
                                <div className="col-8">
                                    <p className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpisLorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpisLorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-6">
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
                                </div>
                            </div>
                        </section>
                        <section className="m-section">
                            <h3 className="m-medium">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</h3>
                            <p className="m-thin">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                            <div className="row">
                                <div className="col-8">
                                    <ul className="lista m-large">
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</li>
                                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row row-inline">
                                <div className="image-placeholder"></div>
                                <div className="image-placeholder"></div>
                            </div>
                        </section>
                        <section className="m-section">
                            <h4 className="m-thin">Lorem ipsum dolor sit amet, consectetur</h4>
                            <div className="row m-large">
                                <div className="col-9">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpisLorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpisLorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                                </div>
                            </div>
                            <h5 className="m-thin">Lorem ipsum dolor sit amet, consectetur</h5>
                            <div className="row">
                                <div className="col-9">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpisLorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpisLorem ipsum dolor sit amet, consectetur adipiscing elit.Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis</p>
                                </div>
                            </div>
                        </section>
                        <footer className="m-footer"></footer>
                    </div>
                </div>
            </div>
        </div>
        
    );
}