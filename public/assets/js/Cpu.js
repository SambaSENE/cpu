class Cpu {
    constructor(_cpu) {
        this.id = _cpu.id;
        this.brand = _cpu.brand;
        this.family = _cpu.family;
        this.model = _cpu.model;
        this.ghz = _cpu.ghz;
        this.price = _cpu.price;
        this.stock = _cpu.stock;
        // this.fullname = _cpu.brand +' '+ _cpu.family + ' ' + _cpu.model;
    }

    
}

export { Cpu };
