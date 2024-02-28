class ReposCpu {

    static urlApi = 'http://localhost:3000/api';

    static async fetchApi(_url) {
        let res = await fetch(_url);
        let json = await res.json();
        return json;
    }

    static async getCpus() {

        let json = await ReposCpu.fetchApi(ReposCpu.urlApi +"/cpus");
        
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

        let response = await fetch(ReposCpu.urlApi + '/'+_id , option);

        if (response.status == 200) {
            let json = response.json();
            return json;
        }

        throw new Error("Error");
    }

    static async getProduction()
    {
        let json = await ReposCpu.fetchApi(ReposCpu.urlApi + "/cpu_productions");
         
        return json;
    }
}
export { ReposCpu }
