export const APIConfig = {
    // apontando para a API de Homologação
    baseUrl: "https://auditteiapi.ofernandoavila.com/api",
    // baseUrl: "http://localhost:8000/api",

    // Autenticação
    cadastro: '/auth/cadastro',
    login: '/auth/login',
    confirmarConta: '/auth/confirmar-conta',
    esqueciSenha: '/auth/esqueci-senha',

    // Escritorio
    obterPerfilEmpresa: '/escritorio',
    criarPerfilEmpresa: '/escritorio/cadastro',
    buscarCNPJ: '/escritorio/cnpj',
    obterEmpresas: '/escritorio/empresas',
    editarEscritorio: '/escritorio/editar',
    
    // Empresa
    obterEmpresa: '/empresa',
    cadastrarEmpresa: '/empresa/cadastro',
    atualizarEmpresa: '/empresa/atualizar',


    // Usuario
    informacoesUsuario: '/usuario'
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