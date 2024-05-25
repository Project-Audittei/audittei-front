import { APIConfig } from "../api/APIConfig";
import { APIRequest, APIResponse } from "../models/API";

export const consumirAPI = <TRequest, TResponse>({ url, dataRequest, method = 'get' }: APIRequest<TRequest>) => new Promise<APIResponse<TResponse>>(async (resolve, reject) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const response = await fetch( `${ APIConfig.baseUrl }${ url }`, {
        headers: myHeaders,
        body: JSON.stringify(dataRequest),
        method: method
    });

    let dados = await response.json() as APIResponse<TResponse>;
    
    resolve(dados);
});