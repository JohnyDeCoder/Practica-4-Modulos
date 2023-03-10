let persona = {
    nombre: "Johny",
    apellido: "Mora",
    getName: function () {
        return `${this.nombre} ${this.apellido}`;
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima"
    },
    getAddress: function () {
        return `${this.domicilio.calle} Colonia: ${this.domicilio.colonia} CP: ${this.domicilio.cp}, ${this.domicilio.municipio}`;
    }
};

console.log(persona.domicilio);
console.log(persona.getAddress());