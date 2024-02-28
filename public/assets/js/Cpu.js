class Cpu {
    constructor(_cpu) {

        // Object.assign(this, _cpu);
        // this.stock = 0;

           this.id = _cpu.id,
           this.brand = _cpu.brand,
           this.family = _cpu.family,
           this.model = _cpu.model,
           this.ghz = _cpu.ghz,
           this.price = _cpu.price,
           this.stock = 0


    }

}
export { Cpu }