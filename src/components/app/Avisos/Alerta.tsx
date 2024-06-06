import { ReactNode } from "react";

interface AlertaProps {
    children?: ReactNode;
    titulo: string;
    descricao: string;
}

export default function Alerta({ children, titulo, descricao }: AlertaProps) {
    return (
        <div className="card mt-3">
            <div className="card-header">
                <h3>⚠️ { titulo }</h3>
                <p className="subtitulo">{ descricao }</p>
            </div>
            { children ? <div className="card-body">{ children }</div> : '' }
        </div>
    );
}