export default function GridContent() {
    return (
        <>
            <h1 className="titulo-pagina">01. Grid</h1>
            <div className="row">
                <div className="col">
                    <div className="row mb-2" style={{ height: '100%' }}>
                    <div className="col-3" style={{ height: 750 }}>
                        <div className="subtitulo">320-640 <span>Celular - Centralizado</span></div>
                        <div className="row demo-grid celular">
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                    </div>
                    <div className="col-7 ml-4" style={{ height: 750 }}>
                        <div className="subtitulo">768 até 1024 <span>Tablet - Centralizado</span></div>
                        <div className="row demo-grid tablet">
                            <aside><div className="content"></div></aside>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>

                <div className="row" style={{ height: '100%' }}>
                    <div className="col-11" style={{ maxHeight: 750 }}>
                        <div className="subtitulo">1280 até 1920 <span>Desktop - Centralizado</span></div>
                        <div className="row demo-grid desktop">
                            <aside><div className="content"></div></aside>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}