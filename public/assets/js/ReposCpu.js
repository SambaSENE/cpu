import { FetchJson } from "./FetchJson.js";


class ReposCpu {

    static urlApi = 'http://localhost:3000/api';

  
    static async getCpus() {

        let json = await FetchJson.fetchApi(ReposCpu.urlApi +"/cpus");
        
        return json;
    }

    

    static async patchApi( _id , _stock ) {
    
        let newCpuStock = {
            stock : _stock
        }

        let option = {
            method: 'PATCH',
            headers: {
                'Content-Type' : 'application/merge-patch+json',
                'Accept': 'application/json'
            },

            body: JSON.stringify(newCpuStock)
        }

        let response = await fetch(ReposCpu.urlApi + '/cpus/'+_id , option);

        if (response.status == 200) {
            let json = response.json();
            return json;
        }

        throw new Error("Error");
    }

  
}
export { ReposCpu }
