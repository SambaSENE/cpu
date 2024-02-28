import { Cpu } from "./js/Cpu.js";
import { Production } from "./js/Production.js";
import { ReposCpu } from "./js/ReposCpu.js";

const app = {
    data() {
        return {
            listCpus: [],
            listProductions: [], production: [],
            cpu: [], // 
            select: null,
            produce: []
            
        }
    },
    async mounted() {
        this.listCpus = await ReposCpu.getCpus();
        for (const c of this.listCpus) {
            let oneCpu = new Cpu(c)
            this.cpu.push(oneCpu);
        }
        const   productions =  await ReposCpu.getProduction();


        for (const prods of productions) {
            let prod = new Production(prods);
            this.production.push(prod);
        }
        console.log(this.production);
    }, computed: {
        nbCpu() {
            return this.cpu.lenght;
        }
    }, methods: {
        selectCpu(event) {
            if (parseInt(event.target.value) > 0) {
                this.select = this.cpu.find(x => x.id == event.target.value);
            } else {
                this.select = null;
            }
        },
        async updateSelectedCpu(event) {
            console.log(this.select);
       
            if (this.select != null) {
                try {
                    await ReposCpu.patchApi(this.select.id, this.select.stock);
                    alert("CPU updated success.");
                } catch (error) {
                    console.error("Error updating:", error);
                }                    

            }
        }
    }
}

Vue.createApp(app).mount('#app');