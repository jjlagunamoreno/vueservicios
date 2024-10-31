<template>
  <div>
    <h1>Customers</h1>
    <form @submit.prevent="buscarCliente">
      <label>Customer: </label>
      <input type="text" v-model="cajaBuscar" placeholder="Buscar cliente" />
      <button type="submit">Buscar</button>
    </form>
    <hr />
    <div v-for="cliente in filteredCustomers" :key="cliente.id">
      <h3>{{ cliente.contactName }} | {{ cliente.companyName }}</h3>
      <button @click="mostrarDetalles(cliente)">Detalles</button>
      <!-- detalles del cliente seleccionado debajo del botón -->
      <div
        v-if="selectedCustomer && selectedCustomer.id === cliente.id"
        class="detalles"
      >
        <p><strong>ID:</strong> {{ selectedCustomer.id }}</p>
        <p><strong>Company:</strong> {{ selectedCustomer.companyName }}</p>
        <p><strong>Contact:</strong> {{ selectedCustomer.contactName }}</p>
        <p><strong>Title:</strong> {{ selectedCustomer.contactTitle }}</p>
        <p><strong>Address:</strong> {{ selectedCustomer.address }}</p>
        <p><strong>City:</strong> {{ selectedCustomer.city }}</p>
        <p><strong>Postal Code:</strong> {{ selectedCustomer.postalCode }}</p>
        <p><strong>Country:</strong> {{ selectedCustomer.country }}</p>
        <p><strong>Phone:</strong> {{ selectedCustomer.phone }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Global from "./../Global";

export default {
  name: "CustomersComponent",
  data() {
    return {
      customers: [],
      selectedCustomer: null,
      cajaBuscar: "",
    };
  },
  computed: {
    filteredCustomers() {
      // Filtra clientes según el término de búsqueda en `contactName` o `companyName`
      return this.customers.filter((cliente) =>
        cliente.contactName.toLowerCase().includes(this.cajaBuscar.toLowerCase()) ||
        cliente.companyName.toLowerCase().includes(this.cajaBuscar.toLowerCase())
      );
    },
  },
  mounted() {
    let request = "customers.json";
    let url = Global.urlApiCustomers + request;

    axios.get(url).then((response) => {
      console.log("leyendo servicio...");
      console.log(response.data);
      this.customers = response.data.results;
    });
  },
  methods: {
    mostrarDetalles(cliente) {
      if (this.selectedCustomer && this.selectedCustomer.id === cliente.id) {
        this.selectedCustomer = null;
      } else {
        this.selectedCustomer = cliente;
      }
    },
    buscarCliente() {
      console.log("Buscando cliente:", this.cajaBuscar);
    },
  },
};
</script>

<style scoped>
.detalles {
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #f9f9f9;
}
</style>
