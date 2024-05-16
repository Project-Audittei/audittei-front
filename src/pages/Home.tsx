import VisaoBasica from "../components/VisaoBasica";
import TipografiaContent from "./content/TipografiaContent";
import BotoesContent from "./content/BotoesContent";
import CoresContent from "./content/CoresContent";

export default function Home() {
    return (
        <VisaoBasica nivel={0}>
            <div className="row mb-4">
                <div className="col">
                    <TipografiaContent/>
                </div>
            </div>
            <div className="row mb-4">
                <div className="col">
                    <BotoesContent />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <CoresContent />
                </div>
            </div>
        </VisaoBasica>
    );
}