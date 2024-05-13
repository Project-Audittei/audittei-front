export default function Paragrafos() {
    return (
        <>
            <div className="m-medium">
                <span className="m-medium" style={{ color: '#4787F3', fontWeight: 500, fontSize: '24px' }}>PARÁGRAFO</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis,
                    at ornare nibh bibendum vitae.
                </p>
            </div>

            <div className="m-medium">
                <span className="m-medium" style={{ color: '#4787F3', fontWeight: 500, fontSize: '24px' }}>PARÁGRAFO COM BOLD</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    faucibus sed metus et iaculis. <b>Aenean consectetur tincidunt</b> turpis,
                    at ornare nibh bibendum vitae.
                </p>
            </div>

            <div className="m-medium">
                <span className="m-medium" style={{ color: '#4787F3', fontWeight: 500, fontSize: '24px' }}>PARÁGRAFO COM BOLD</span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                    faucibus sed metus et iaculis. <a href="https://google.com">Aenean consectetur </a>tincidunt turpis,
                    at ornare nibh bibendum vitae.
                </p>
            </div>
        </>
    );
}