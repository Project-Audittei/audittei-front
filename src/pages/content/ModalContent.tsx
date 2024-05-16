import Botao from "../../components/Botao";
import useModal from "../../hooks/useModal";

export default function ModalContent() {

    const { modalOpen } = useModal();

    const HandleAbrirModal = () => {
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