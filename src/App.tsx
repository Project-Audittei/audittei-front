import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaTipografia from "./pages/PaginaTipografia";
import Home from "./pages/Home";
import { Home as DocsHome } from "./pages/documentation-app/Home";
import { Tipografia as DocsTipografia } from "./pages/documentation-app/Tipografia";
import { Grid as DocsGrid } from "./pages/documentation-app/Grid";
import { Cores as DocsCores } from "./pages/documentation-app/Cores";
import { Botoes as DocsBotoes } from "./pages/documentation-app/Botoes";
import { Modal as DocsModal } from "./pages/documentation-app/Modal";
import { CamposDeTexto as DocsCamposDeTexto } from "./pages/documentation-app/CamposDeTexto";
import ModalContextProvider from "./contexts/ModalContext";

function App() {
	return (
		<ModalContextProvider>
			<BrowserRouter basename="/audittei">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/tipografia" element={<PaginaTipografia />} />

					<Route path="/docs" element={<DocsHome />} />
					<Route path="/docs/tipografia" element={<DocsTipografia />} />
					<Route path="/docs/grid" element={<DocsGrid />} />
					<Route path="/docs/cores" element={<DocsCores />} />
					<Route path="/docs/botoes" element={<DocsBotoes />} />
					<Route path="/docs/modal" element={<DocsModal />} />
					<Route path="/docs/campos-de-texto" element={<DocsCamposDeTexto />} />
				</Routes>
			</BrowserRouter>
		</ModalContextProvider>
	);
}

export default App;
