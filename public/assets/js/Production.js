class Production {
    constructor(_prod) {
        Object.assign(this, _prod);
        // this.id = _prod.id;
        // this.nom = _prod.nom;
        // this.description = _prod.description;
        // this.duree = _prod.duree;
        // this.cpu = _prod.idcpu;
        this.interval = null;
        this.statusCurrent = 0;
        this.nbProduce = 0;
        this.totalProduce = 0;
    }

    start() {
        this.interval = setInterval(() => {
            if (this.nbProduce < this.totalProduce) {
                if (this.duree > this.statusCurrent) {
                    this.statusCurrent += 1;
                    console.log('ok');
                } else {
                    this.statusCurrent = 0;
                    this.nbProduce ++;
                }
            } else {
                this.stop();
            }
        }, 150);
    }

    stop() {
        clearInterval(this.interval);
        this.interval = null;
    }
}
export { Production }