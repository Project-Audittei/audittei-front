import VisaoBasica from "../../components/VisaoBasica";
import useUsuario from "../../hooks/useUsuario";
import FormularioEditarDadosCadastrais from "../../components/app/Forms/MeuPerfil/FormularioEditarDadosCadastrais";

export default function PaginaEditarDadosCadastrais() {

	const { usuario } = useUsuario();

	if(!usuario) return <></>;

	return (
		<VisaoBasica breadcrumbSecao="Editar Perfil">
			<div className="row">
				<div className="col">
					<div className="row">
						<h3>Editar Perfil</h3>
					</div>
				</div>
				<div className="col col-align-center align-right"></div>
			</div>

            <div className="card mt-3">
                <div className="card-body">
                    <div className="row row-align-center">
                        <div className="col-6">
                            <FormularioEditarDadosCadastrais usuario={usuario} />
                        </div>
                    </div>
                </div>
            </div>

			

		</VisaoBasica>
	);
}
