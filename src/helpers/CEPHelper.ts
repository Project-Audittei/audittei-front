export function CEPMascara(cep: string) {
    cep = cep.replace(/\D/g, '');
    
    return cep.replace(/(\d{5})(\d{3})/, '$1-$2');
}

export function CEPSanitize(cep: string) {
    return cep.replace(/\D/g, '');
}