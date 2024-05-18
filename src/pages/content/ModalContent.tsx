import Botao from "../../components/Botoes/Botao";
import useModal from "../../hooks/useModal";

export default function ModalContent() {

    const { modalOpen, setModalTitle } = useModal();

    const HandleAbrirModal = () => {
        setModalTitle( 'Lorem ipsum dolor sit' );
        modalOpen(<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis, at ornare nibh bibendum vitae. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis, at ornare nibh bibendum vitae.</p>);
    }

    return (
        <>
            <h1 className="titulo-pagina">14. Modal</h1>
            <div className="row">
                <Botao label="Abrir Modal" estilo="Primary" tamanho="Normal" onClick={HandleAbrirModal} />
            </div>
        </>
    );
}