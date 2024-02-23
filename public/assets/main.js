import { CpuRepo } from "./CpuRepo.js";
import { Cpu } from "./Cpu.js";
const app = {
    data() {
        return {
            listCpus: [],
            idcpu: [],
            cpu: [],
            stock: 0





        }
    },
    async mounted() {
        this.listCpus = await CpuRepo.getAllCpu();
        console.log(this.listCpus);
     
        for (const cpu of this.listCpus) {
            let c =  new Cpu(cpu);
            this.cpu.push(c);
        }
        console.log(this.cpu);
        
        
        

    }, methods: {
        getStock() {
            
            const cpu = this.idcpu.find(cpu => cpu.id == this.listCpu.id);
          
           
            if (cpu > 0) {
             
              return this.stock;
            } else {
             
              return 0; 
            }
          }
          

    }, computed: {
        nbCpu() {
            return this.listCpus.length;
        }
    }
}
Vue.createApp(app).mount('#app');
