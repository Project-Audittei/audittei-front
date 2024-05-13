import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaginaTipografia from "./pages/PaginaTipografia";

function App() {
  return (
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/" element={ <PaginaTipografia /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
