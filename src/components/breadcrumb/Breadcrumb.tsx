interface BreadcrumbProps {
    secao?: string;
}

export default function Breadcrumb({ secao }: BreadcrumbProps) {
    
    if(!secao) return (<></>);
    
    return (
        <div className="breadcrumb">
            <span className="descricao">Você está na área: <span className="secao-breadcrumb">{ secao }</span></span>
        </div>
    );
}