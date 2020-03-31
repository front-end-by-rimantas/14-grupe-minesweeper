class House {
    constructor( address, floors, windows, doors, roof ) {
        this.address = address;
        this.floors = floors;
        this.windows = windows;
        this.doors = doors;
        this.roof = roof;

        this.init();
    }

    init() {
        console.log(this);
        
        this.kiekTuriAukstu();
        this.arDegaStogas();
    }

    arDegaStogas() {
        return console.log(`Namas adresu ${this.address} nedega.`);
    }

    kiekTuriAukstu() {
        return console.log(`Namas adresu ${this.address} turi ${this.floors} aukstu.`);
    }

    nugriautiAuksta() {
        if ( this.floors === 0 ) {
            return console.log('Namas nugriautas iki pamatu.');
        } else {
            this.floors--;
        }
    }
    
    pasatatytiAuksta() {
        this.floors++;
    }
}


// House: adresas, aukstu kiekis, langu kiekis, duru kiekis, ar turi stoga

const pirmasNamas = new House('Gedimino pr.', 3, 30, 1, true);
const antrasNamas = new House('Pakalniskes', 1, 1, 1, true);

// antrasNamas.kiekTuriAukstu();
// antrasNamas.nugriautiAuksta();
// antrasNamas.pasatatytiAuksta();
// antrasNamas.pasatatytiAuksta();
// antrasNamas.pasatatytiAuksta();
// antrasNamas.pasatatytiAuksta();
// antrasNamas.pasatatytiAuksta();

// antrasNamas.kiekTuriAukstu();
// antrasNamas.nugriautiAuksta();
// antrasNamas.kiekTuriAukstu();
