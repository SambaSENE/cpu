import { CpuRepo } from "./CpuRepo.js";
import { Cpu } from "./CpuRepo.js";
const app = {
    data() {
        return {
            listCpus : [],
            cpu : [],
            stock: 0
        }
    },
    async mounted() {
     this.listCpus = await CpuRepo.getAllCpu();
  
    
    }, methods() {
    
        
    }, computed: {
        nbCpu(){
          return  this.listCpus.length;
        }
    }
}
Vue.createApp(app).mount('#app');
