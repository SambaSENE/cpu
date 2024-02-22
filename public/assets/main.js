import { CpuRepo } from "./CpuRepo.js";
import { Cpu } from "./Cpu.js";
const app = {
    data() {
        return {
            listCpus : [],
            cpu : [],
            stock: 0,
          
        }
    },
    async mounted() {
     this.listCpus = await CpuRepo.getAllCpu();
    

       let c = new Cpu(this.listCpus);
        console.log(this.select);

    
    }, methods: {
       
        
    }, computed: {
        nbCpu(){
          return  this.listCpus.length;
        }
    }
}
Vue.createApp(app).mount('#app');
