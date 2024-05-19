import FileUpload from "../FileUpload";

export default function FileUploadExemplos() {
    return (
        <>
            <div className="row mb-4">
                <h5>File Upload</h5>
            </div>
            <div className="row">
                <FileUpload 
                    titulo="Adicione ou arraste o arquivo aqui" 
                    extensoesPermitidas=".xls, .xlsx, .csv, .txt" 
                />
            </div>
        </>
    );
}