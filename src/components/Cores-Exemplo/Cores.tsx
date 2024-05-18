import Amostra from "../documentation-app/common/Amostra";

export function CoresMain() {
    return (
        <div className="row mb-3">
            <div className="col">
                <div className="row"><div className="subtitulo">MAIN</div></div>
                <div className="row">
                    <Amostra tipo="fundo" cor="#265EF5" valor="#265EF5" descricao="Main/Blue" />
                </div>
            </div>
        </div>
    );
}

export function CoresBG() {
    return (
        <div className="row mb-3">
            <div className="col">
                <div className="row"><div className="subtitulo">BG</div></div>
                <div className="row">
                    <Amostra tipo="fundo" cor="#F3F5F9" valor="#F3F5F9" />
                    <Amostra tipo="fundo" cor="#FAFCFF" valor="#FAFCFF" />
                    <Amostra tipo="fundo" cor="#FBFCFF" valor="#FBFCFF" />
                    <Amostra tipo="fundo" cor="#FFFFFF" valor="#FFFFFF" bordado/>
                </div>
            </div>
        </div>
    );
}

export function CoresBorda() {
    return (
        <div className="row mb-3">
            <div className="col">
                <div className="row"><div className="subtitulo">BORDAS</div></div>
                <div className="row">
                    <Amostra tipo="borda" cor="#E4E6EA" valor="#E4E6EA" descricao="Stroke/Focused" />
                </div>
            </div>
        </div>
    );
}

export function CoresTexto() {
    return (
        <div className="row">
            <div className="col">
                <div className="row"><div className="subtitulo">TEXT</div></div>
                <div className="row">
                    <Amostra tipo="fundo" cor="#000000" valor="#000000" />
                    <Amostra tipo="fundo" cor="#212121" valor="#212121" bordado />
                    <Amostra tipo="fundo" cor="#828282" valor="#828282" />
                    <Amostra tipo="fundo" cor="#265EF5" valor="#265EF5"/>
                    <Amostra tipo="fundo" cor="#FFB82E" valor="#FFB82E" descricao="Text/Validation"/>
                    <Amostra tipo="fundo" cor="#F93232" valor="#F93232" descricao="Text/Error"/>
                    <Amostra tipo="fundo" cor="#439F6E" valor="#439F6E" descricao="Text/Success"/>
                </div>
            </div>
        </div>
    );
}