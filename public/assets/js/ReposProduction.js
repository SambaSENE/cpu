import { FetchJson } from "./FetchJson.js";

class ReposProduction
{
    static urlApi = 'http://localhost:3000/api';

    static async getProduction()
    {
        let json = await FetchJson.fetchApi(ReposProduction.urlApi + '/cpu_productions')
        return json;
    }
}
export { ReposProduction }