import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaTipografia from "./pages/PaginaTipografia";
import Home from "./pages/Home";
import { Home as DocsHome } from "./pages/documentation-app/Home";
import { Tipografia as DocsTipografia } from "./pages/documentation-app/Tipografia";
import { Grid as DocsGrid } from "./pages/documentation-app/Grid";

function App() {
  return (
    <BrowserRouter basename="/audittei">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/tipografia" element={ <PaginaTipografia /> } />
        
        <Route path="/docs" element={ <DocsHome /> } />
        <Route path="/docs/tipografia" element={ <DocsTipografia /> } />
        <Route path="/docs/grid" element={ <DocsGrid /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
