import { Upload, UploadCloud } from "lucide-react";
import Botao from "../Botoes/Botao";
import { useRef } from "react";

interface FileUploadPropsType {
    extensoesPermitidas: string;
    titulo?: string;
}

export default function FileUpload({
    titulo,
    extensoesPermitidas
}: FileUploadPropsType) {

    const inputFile = useRef<HTMLInputElement>(null);

    return (
        <label className="file-upload-container">
            <input ref={inputFile} type="file" name="" id="" accept={ extensoesPermitidas }  />
            <UploadCloud size={40} color="#265FF3" />
            <h6>{ titulo ?? 'Adicione ou arraste o arquivo do seu balancete aqui' }</h6>
            <p>Extensões de arquivo permitidas: { extensoesPermitidas }.</p>
            <Botao
                estilo="Primary"
                tamanho="Large"
                label="Envie seu arquivo"
                icone={<Upload />}
                onClick={() => {
                    if(inputFile) { inputFile.current!.click()}
                }}
            />
        </label>
    );
}