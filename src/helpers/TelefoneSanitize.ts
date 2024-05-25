export const TelefoneMascara = (telefone: string) : string => {
    const input = telefone.replace(/\D/g, '');

    let formattedValue = '';

    if (input.length <= 2) {
        formattedValue = input;
    } else if (input.length <= 6) {
        formattedValue = `(${input.slice(0, 2)}) ${input.slice(2)}`;
    } else if (input.length <= 10) {
        formattedValue = `(${input.slice(0, 2)}) ${input.slice(2, 6)}-${input.slice(6, 10)}`;
    } else {
        formattedValue = `(${input.slice(0, 2)}) ${input.slice(2, 7)}-${input.slice(7, 11)}`;
    }

    return formattedValue;
}

export const TelefoneSanitize = (telefone: string) => {
    telefone = telefone.replaceAll("(", "");
    telefone = telefone.replaceAll(")", "");
    telefone = telefone.replaceAll(" ", "");
    telefone = telefone.replaceAll("-", "");

    return telefone;
}