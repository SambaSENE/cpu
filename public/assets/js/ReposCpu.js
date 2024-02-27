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

    
}
export { ReposCpu }
