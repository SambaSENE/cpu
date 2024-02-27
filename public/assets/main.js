import { Cpu } from "./js/Cpu.js";
import { ReposCpu } from "./js/ReposCpu.js";

const app = {
    data() {
        return {
            listCpus: [],
            cpu: [], // 
            select: null,
            product: []
        }
    },
    async mounted() {
        this.listCpus = await ReposCpu.getCpus();
        for (const c of this.listCpus) {
            let oneCpu = new Cpu(c)
            this.cpu.push(oneCpu);
        }

        console.log(this.cpu);

    }, computed: {
        nbCpu() {
            return this.cpu.lenght;
        }
    }, methods: {
        selectCpu(event){

            if(parseInt(event.target.value) > 0){
                this.select = this.cpu.find(x => x.id == event.target.value); 
            }else {
                this.select = null;
            }
        }
    }
}

Vue.createApp(app).mount('#app');