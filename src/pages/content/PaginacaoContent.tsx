import Paginacao from "../../components/Paginacao/Paginacao";

export default function PaginacaoContent() {
    return (
        <>
            <h1 className="titulo-pagina">11. Paginação</h1>
            <div className="row">
                <div className="col-4">
                    <Paginacao atual={8} quantidade={20} />
                </div>
            </div>
        </>
    );
}