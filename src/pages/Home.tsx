import { Link } from "react-router-dom";
import VisaoBasica from "../components/VisaoBasica";

export default function Home() {
    return (
        <VisaoBasica nivel={0}>
            <h1>Audittei - Estilos</h1>
            <ul>
                <li>
                    <h3><Link to={'/tipografia'}>Tipografia</Link></h3>
                </li>
            </ul>
        </VisaoBasica>
    );
}