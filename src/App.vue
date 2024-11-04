<template>
  <!-- <CochesComponent /> -->
  <!-- <CustomersComponent /> -->
  <!-- <EmpleadosDetalle /> -->
  <MenuComponent />
  <router-view />
</template>

<script>
// import EmpleadosDetalle from "./components/EmpleadosDetalle.vue";
// import CustomersComponent from './components/CustomersComponent.vue';
// import CochesComponent from "./components/CochesComponent.vue";
import MenuComponent from "./components/MenuComponent.vue";

export default {
  name: "App",
  components: {
    // CochesComponent,
    // CustomersComponent,
    // EmpleadosDetalle,
    MenuComponent,
  },
};
</script>
