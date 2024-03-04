import { Cpu } from "./js/Cpu.js";
import { ReposCpu } from "./js/ReposCpu.js";
import { ReposProduction } from "./js/ReposProduction.js";
import { Production } from "./js/Production.js";

const app = {
    data() {
        return {
            listCpus: [], cpu: [], // 
            listProductions: [], production: [],
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

        this.listProductions = await ReposProduction.getProduction();
        for (const pro of this.listProductions) {
            let prod = new Production(pro);
            this.production.push(prod);
        }

        //  this.production.find((x) => x.id );

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
        },
        startProd(event) {
            let idProd = event.target.id;
            let objProd = this.production.find((x) => x.id == idProd);
            let prodInstance = new Production(objProd);
            prodInstance.start();
        }
    }
}

Vue.createApp(app).mount('#app');