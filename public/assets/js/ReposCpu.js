import { Cpu } from "./Cpu.js";

class ReposCpu {
    static urlApi = 'http://localhost:3000/api/cpus';
    static async fetchApi(_url) {
        let res = await fetch(_url);
        let json = await res.json();
        return json;
    }

    static async getCpus() {

        let json = await ReposCpu.fetchApi(ReposCpu.urlApi);
        
        return json;
    }

    static async patchApi( _id) {

        let options = {
            method: 'PATCH',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/merge-patch+json'
            }
            
        }



        let response = await fetch("http://localhost:3000/api/cpus/" + _id, options);
console.log(response);
        if (response.status == 200) {
            let json = await response.json();
            return json;
        }

        throw new Error("La data n'a pas été enregistrée !");
    }
}
export { ReposCpu }
