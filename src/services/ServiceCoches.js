import axios from "axios";
import Global from "./../Global";

export default class serviceCoches {
    getCoches = new Promise(function (resolve){
        let coches = [];

        let request = "webresources/coches";
        let url = Global.urlApiCoches + request;

        axios.get(url).then(response => {
            console.log("Leyendo coches...");
            coches = response.data;
            resolve(coches);
        })
    })
}
    // getPromesa = new Promise(function (resolve, reject) {
    //     //TENEMOS DOS POSIBILIDADES: CORRECTO O ERROR
    //     let num = 0;
    //     if (num == 0) {
    //         resolve("Todo ha ido bien.");
    //     } else {
    //         reject("Mal")
    //     }
    // })
    // getCoches() {
    //     let coches = [];

    //     let request = "webresources/coches";
    //     let url = Global.urlApiCoches + request;

    //     axios.get(url).then(response => {
    //         console.log("Leyendo coches...");
    //         this.coches = response.data;
    //     })
    //     return coches;
    // }
