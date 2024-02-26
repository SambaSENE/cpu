import { Cpu } from "./Cpu.js";
import { Request } from "./Request.js";
const url = 'http://localhost:3000/api/cpus';

const app = {
    data() {
        return {
            listCpus: [],
            oneCpu: [], // use
            cpuSelect: null
        }
    },
    async mounted() {
        this.listCpus = await Request.fetchApi(url);
        for (const c of this.listCpus) {
            let cpu = new Cpu(c);
            this.oneCpu.push(cpu);
        }

        console.log(this.nbCpu);


    }, computed: {
        nbCpu(){
            return this.oneCpu.length
         }

    }


}


Vue.createApp(app).mount('#app');