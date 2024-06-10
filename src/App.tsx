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
import Home from "./pages/Home";
import Cadastro from "./pages/sistema/Auth/Cadastro";
import RedefinirSenha from "./pages/sistema/Auth/RedefinirSenha";
import Login from "./pages/sistema/Auth/Login";
import EsqueciSenha from "./pages/sistema/Auth/EsqueciSenha";
import LinkRedefinicaoExpirado from "./pages/sistema/Auth/LinkRedefinicaoExpirado";
import UsuarioContextProvider from "./contexts/UsuarioContext";
import PaginaInicial from "./pages/sistema/PaginaInicial";
import PaginaListarEmpresas from "./pages/gerenciar-empresas/PaginaListarEmpresas";
import ConfirmarConta from "./pages/sistema/Auth/ConfirmarConta";
import PaginaCrudEmpresa from "./pages/gerenciar-empresas/PaginaCrudEmpresa";
import PaginaVerEmpresa from "./pages/gerenciar-empresas/PaginaVerEmpresa";

function App() {
	return (
		<ModalContextProvider>
			<UsuarioContextProvider>
				<BrowserRouter basename="/audittei">
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

						<Route path="/" element={ <PaginaInicial /> } />

						<Route path="/gerenciar-empresas" element={ <PaginaListarEmpresas /> } />
						<Route path="/gerenciar-empresas/nova" element={ <PaginaCrudEmpresa modo="novo"/> } />
						<Route path="/gerenciar-empresas/visualizar/:id" element={ <PaginaVerEmpresa /> } />
						<Route path="/gerenciar-empresas/editar/:id" element={ <PaginaCrudEmpresa modo="edicao" /> } />

						<Route path="/cadastro" element={ <Cadastro /> } />
						<Route path="/confirmar-conta/:hash" element={ <ConfirmarConta /> } />
						<Route path="/esqueci-senha" element={ <EsqueciSenha /> } />
						<Route path="/redefinir-senha" element={ <RedefinirSenha /> } />
						<Route path="/reenviar-confirmar-conta" element={ <LinkRedefinicaoExpirado /> } />
						<Route path="/login" element={ <Login /> } />

						<Route path="/style-guide" element={ <Home /> } />
					</Routes>
				</BrowserRouter>
			</UsuarioContextProvider>
		</ModalContextProvider>
	);
}

export default App;
