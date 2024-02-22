import { Cpu } from './Cpu.js';
import { FetchApi } from './FetchApi.js';

class CpuRepo {
    static baseUrl = 'http://localhost:3000/api/';
    static async getAllCpu() 
    {
        
        let url = CpuRepo.baseUrl + 'microprocesseurs';
        
        let response = await fetch(url);
        
        let json = await response.json();
        
        return  json;

    }

    
}
export { CpuRepo , Cpu }