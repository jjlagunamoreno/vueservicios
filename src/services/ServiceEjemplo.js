export default class ServiceEjemplo {
    getSaludo(nombre) {
        return "Bienvenido a tu lunes, " + nombre;
    }
    getPromesa = new Promise(function (resolve, reject) {
        //TENEMOS DOS POSIBILIDADES: CORRECTO O ERROR
        let num = 0;
        if (num == 0) {
            resolve("Todo ha ido bien.");
        } else {
            reject("Mal")
        }
    })
}