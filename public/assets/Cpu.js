class Cpu
{
    constructor( _cpu ){
        Object.assign(this, _cpu);
        this.fullname = this.brand + ' ' + this.family + ' ' + this.model;
    }

}
export { Cpu}