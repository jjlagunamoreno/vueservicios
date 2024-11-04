<template>
  <div>
    <h1>Home</h1>
    <h2 style="color: red;">{{ mensaje }}</h2>
  </div>
</template>

<script>
import ServiceEjemplo from "./../services/ServiceEjemplo";
//PARA PODER UTILIZAR EL SERVICIO NECESITAMOS UNA CONSTANTE
//INSTANCIADA CON LA CLASE DEL SERVICIO NECESARIO
const service = new ServiceEjemplo();
export default {
  name: "HomeComponent",
  mounted() {
    this.mensaje = service.getSaludo("Jaime");
  },
  data() {
    return {
      mensaje: "",
    };
  },
};
</script>