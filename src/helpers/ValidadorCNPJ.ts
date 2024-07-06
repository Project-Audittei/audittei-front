export function ValidarCNPJ(cnpj: string): boolean {
    cnpj = cnpj.replace(/[^\d]+/g, '');

    if (cnpj.length !== 14) {
        return false;
    }

    // Remove CNPJs conhecidos que são inválidos
    if (/^(\d)\1+$/.test(cnpj)) {
        return false;
    }

    // Valida DVs (Dígitos Verificadores)
    const t = cnpj.length - 2;
    const d = cnpj.substring(t);
    const d1 = parseInt(d.charAt(0), 10);
    const d2 = parseInt(d.charAt(1), 10);

    const calcDv = (cnpj: string, pos: number): number => {
        let soma = 0;
        let peso = 2;
        for (let i = pos; i >= 0; i--) {
            soma += parseInt(cnpj.charAt(i), 10) * peso;
            peso = peso === 9 ? 2 : peso + 1;
        }
        const resto = soma % 11;
        return resto < 2 ? 0 : 11 - resto;
    };

    const dv1 = calcDv(cnpj, t - 1);
    const dv2 = calcDv(cnpj, t);

    return dv1 === d1 && dv2 === d2;
}