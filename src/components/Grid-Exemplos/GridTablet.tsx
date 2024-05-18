export default function GridTablet() {
    return (
        <div className="row">
            <div className="col">
                <div className="row" style={{ height: '100%' }}>
                    <div className="col-7" style={{ height: 750 }}>
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
            </div>
        </div>
    );
}