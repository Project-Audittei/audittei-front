import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home as DocsHome } from "./pages/documentation-app/Home";
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
import PaginaSistema from "./pages/sistema/PaginaSistema";
import Home from "./pages/Home";

function App() {
	return (
		<ModalContextProvider>
			<BrowserRouter basename="/audittei">
				<Routes>

					<Route path="/docs" element={<DocsHome />} />
					<Route path="/docs/tipografia" element={<DocsTipografia />} />
					<Route path="/docs/grid" element={<DocsGrid />} />
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

					<Route path="/sistema" element={ <PaginaSistema /> } />

					<Route path="/" element={ <Home /> } />
				</Routes>
			</BrowserRouter>
		</ModalContextProvider>
	);
}

export default App;
