import VisaoBasica from "../../components/VisaoBasica";
import useUsuario from "../../hooks/useUsuario";
import FormularioMeuPerfil from "../../components/app/Forms/MeuPerfil/FormularioMeuPerfil";

export default function PaginaMeuPerfil() {

	const { usuario } = useUsuario();

	if(!usuario) return <></>;

	return (
		<VisaoBasica breadcrumbSecao="Meu Perfil">
			<div className="row">
				<div className="col">
					<div className="row">
						<h3>Meu Perfil</h3>
					</div>
				</div>
				<div className="col col-align-center align-right"></div>
			</div>

			<FormularioMeuPerfil usuario={usuario} />

		</VisaoBasica>
	);
}
