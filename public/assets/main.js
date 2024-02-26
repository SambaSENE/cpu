import { Cpu } from "./Cpu.js";
import { Request  } from "./Request.js";
const url = 'http://localhost:3000/api/cpus';
const app = {
    data(){
        return {
            listCpus: [],
            cpu: [], // 
        }
    } ,
   async mounted () {
        const data = await Request.fetchApi(url); 
        for(const c of data){
           this.listCpus.push(c);
        }

        this.cpu = new Cpu(this.listCpus);
        console.log(this.cpu);
    
    }
}

Vue.createApp(app).mount('#app');