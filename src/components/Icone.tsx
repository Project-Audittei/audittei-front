import { Icon, IconNode } from "lucide-react";

type IconePropsType = {
    nome: IconNode;
    tamanho: "p" | "m" | "g";
}

export default function Icone({ nome, tamanho }: IconePropsType) {    
    switch(tamanho) {
        case "p":
            return <Icon iconNode={nome} size={16}/>
            
        case "m":
            return <Icon iconNode={nome} size={24}/>

        case "g":
            return <Icon iconNode={nome} size={32}/>
        
    }
}