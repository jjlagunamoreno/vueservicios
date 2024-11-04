<template>
  <div>
    <h1>Coches</h1>
    <div v-for="car in coches" :key="car">
      <h2 style="color: blue">{{ car.marca }} {{ car.modelo }}</h2>
      <p>Concutor: {{ car.conductor }}</p>
      <img :src="car.imagen" style="width: 150px; height: 150px" />
    </div>
  </div>
</template>

<script>
//utilizamos el servicio para que realice lo mismo
import ServiceCoches from "./../services/ServiceCoches";
const service = new ServiceCoches();

// import axios from "axios";
// import Global from "./../Global"
//SI NECESITAMOS VARIABLES DECLARADAS PARA UTILIZARLAS EN TODOS
//LOS METODOS (mounted,created,methods) LA DECLARAMOS AQUÍ
// FORMA MANUAL
// let urlApiCoches = "https://apicochespaco.azurewebsites.net/";

//FORMA CON GLOBAL
// let urlApiCoches = Global.urlApiCoches;

export default {
  name: "CochesComponent",
  data() {
    return {
      coches: [],
    };
  },
  mounted() {
    service.getCoches.then((result) => {
      this.coches = result;
    });

    // let request = "webresources/coches";
    //LAS VARIABLES DECLARADAS POR ENCIMA DE export default
    //NO UTILIZAN LA PALABRA this
    // let url = urlApiCoches + request;
    // axios.get(url).then((response) => {
    //   console.log("leyendo servicio...");
    //   this.coches = response.data;
    // });
  },
};
</script>