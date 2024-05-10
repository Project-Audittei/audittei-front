export default function Paragrafos() {
    return (
        <>
            <span style={{ color: '#4787F3', fontWeight: 500, fontSize: '24px' }}>PARÁGRAFO</span>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                faucibus sed metus et iaculis. Aenean consectetur tincidunt turpis,
                at ornare nibh bibendum vitae.
            </p>

            <span style={{ color: '#4787F3', fontWeight: 500, fontSize: '24px' }}>PARÁGRAFO COM BOLD</span>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                faucibus sed metus et iaculis. <b>Aenean consectetur tincidunt</b> turpis,
                at ornare nibh bibendum vitae.
            </p>

            <span style={{ color: '#4787F3', fontWeight: 500, fontSize: '24px' }}>PARÁGRAFO COM BOLD</span>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                faucibus sed metus et iaculis. <a href="">Aenean consectetur </a>tincidunt turpis,
                at ornare nibh bibendum vitae.
            </p>
        </>
    );
}