import { APIConfig } from "../api/APIConfig";
import { APIRequest, APIResponse } from "../models/API";

export const consumirAPI = <TRequest, TResponse>({ url, dataRequest, authToken, method = 'get' }: APIRequest<TRequest>) => new Promise<APIResponse<TResponse>>(async (resolve, reject) => {

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    if(authToken) {
        myHeaders.append('Authorization', `Bearer ${authToken}`);
    }

    const response = await fetch( `${ APIConfig.baseUrl }${ url }`, {
        headers: myHeaders,
        body: dataRequest ? JSON.stringify(dataRequest) : null,
        method: method
    });

    let dados = await response.json() as APIResponse<TResponse>;
    
    resolve(dados);
});