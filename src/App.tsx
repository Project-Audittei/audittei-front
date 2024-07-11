import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Tipografia as DocsTipografia } from "./pages/documentation-app/Tipografia";
import { Grid as DocsGrid } from "./pages/documentation-app/Grid";
import { Margin as DocsMargin } from "./pages/documentation-app/Margin";
import { Cores as DocsCores } from "./pages/documentation-app/Cores";
import { Botoes as DocsBotoes } from "./pages/documentation-app/Botoes";
import { Modal as DocsModal } from "./pages/documentation-app/Modal";
import { CamposDeTexto as DocsCamposDeTexto } from "./pages/documentation-app/CamposDeTexto";
import { Tooltip as DocsTooltip } from "./pages/documentation-app/Tooltip";
import { Notificacoes as DocsNotificacoes } from "./pages/documentation-app/Notificacoes";
import { Paginacao as DocsPaginacao } from "./pages/documentation-app/Paginacao";
import { NavegacaoInterna as DocsNavegacaoInterna } from "./pages/documentation-app/NavegacaoInterna";
import { Icones as DocsIcones } from "./pages/documentation-app/Icones";
import ModalContextProvider from "./contexts/ModalContext";
import Cadastro from "./pages/Auth/Cadastro";
import RedefinirSenha from "./pages/Auth/RedefinirSenha";
import Login from "./pages/Auth/Login";
import EsqueciSenha from "./pages/Auth/EsqueciSenha";
import LinkRedefinicaoExpirado from "./pages/Auth/LinkRedefinicaoExpirado";
import UsuarioContextProvider from "./contexts/UsuarioContext";
import PaginaInicial from "./pages/PaginaInicial";
import PaginaListarEmpresas from "./pages/gerenciar-empresas/PaginaListarEmpresas";
import ConfirmarConta from "./pages/Auth/ConfirmarConta";
import PaginaCrudEmpresa from "./pages/gerenciar-empresas/PaginaCrudEmpresa";
import PaginaVerEmpresa from "./pages/gerenciar-empresas/PaginaVerEmpresa";
import PageStyleGuide from "./pages/documentation-app/PageStyleGuide";
import PaginaCrudEscritorio from "./pages/gerenciar-escritorio/PaginaCrudEscritorio";
import PaginaVerEscritorio from "./pages/gerenciar-escritorio/PaginaVerEscritorio";
import PaginaMeuPerfil from "./pages/usuario/PaginaMeuPerfil";

function App() {
	return (
		<UsuarioContextProvider>
			<ModalContextProvider>
				<BrowserRouter basename="/">
					<Routes>
						<Route path="/docs" element={<DocsGrid />} />
						<Route path="/docs/tipografia" element={<DocsTipografia />} />
						<Route path="/docs/margem" element={<DocsMargin />} />
						<Route path="/docs/grid" element={<DocsGrid />} />
						<Route path="/docs/cores" element={<DocsCores />} />
						<Route path="/docs/botoes" element={<DocsBotoes />} />
						<Route path="/docs/modal" element={<DocsModal />} />
						<Route path="/docs/campos-de-texto" element={<DocsCamposDeTexto />} />
						<Route path="/docs/notificacoes" element={<DocsNotificacoes />} />
						<Route path="/docs/tooltip" element={<DocsTooltip />} />
						<Route path="/docs/paginacao" element={<DocsPaginacao />} />
						<Route path="/docs/navegacao-interna" element={<DocsNavegacaoInterna />} />
						<Route path="/docs/icones" element={<DocsIcones />} />
						<Route path="/docs/style-guide" element={<PageStyleGuide />} />

						<Route path="/" element={<PaginaInicial />} />
						<Route path="/confirmar-conta" element={<ConfirmarConta />} />
						<Route path="/confirmar-conta/:hash" element={<ConfirmarConta />} />

						<Route path="/gerenciar-empresas" element={<PaginaListarEmpresas />} />
						<Route path="/gerenciar-empresas/nova" element={<PaginaCrudEmpresa modo="novo" />} />
						<Route path="/gerenciar-empresas/visualizar/:id" element={<PaginaVerEmpresa />} />
						<Route path="/gerenciar-empresas/editar/:id" element={<PaginaCrudEmpresa modo="edicao" />} />
						
						<Route path="/gerenciar-escritorio" element={<PaginaVerEscritorio />} />
						<Route path="/gerenciar-escritorio/editar" element={<PaginaCrudEscritorio modo="edicao" />} />

						<Route path="/meu-perfil" element={ <PaginaMeuPerfil /> } />

						<Route path="/auth/cadastro" element={<Cadastro />} />
						<Route path="/auth/esqueci-senha" element={<EsqueciSenha />} />
						<Route path="/auth/redefinir-senha" element={<RedefinirSenha />} />
						<Route path="/auth/reenviar-confirmar-conta" element={<LinkRedefinicaoExpirado />} />
						<Route path="/auth/login" element={<Login />} />
					</Routes>
				</BrowserRouter>
			</ModalContextProvider>
		</UsuarioContextProvider>
	);
}

export default App;
