export const APIConfig = {
    // apontando para a API de Homologação
    baseUrl: "https://auditteiapi.ofernandoavila.com/api",
    // baseUrl: "http://localhost:8000/api",
    cadastro: '/auth/cadastro',
    login: '/auth/login',
    confirmarConta: '/auth/confirmar-conta',
    esqueciSenha: '/auth/esqueci-senha',
    obterPerfilEmpresa: '/perfil',
    criarPerfilEmpresa: '/perfil/cadastro',
    buscarCNPJ: '/perfil/cnpj'
};

// export const APIConfigAudittei = {
//     baseUrl: "https://api.audittei.com.br",
//     cadastro: '/auth/create-user',
//     login: '/auth/login',
//     confirmarConta: '/auth/confirm-register',
//     esqueciSenha: '/auth/forgot-password',
//     criarPerfilEmpresa: '/profile',
//     buscarCNPJ: '/profile/cnpj'
// }