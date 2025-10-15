<template>
  <section class="transacciones-container">
    <h2>Registro de Transacciones</h2>
    <TransactionForm @registrar="agregarTransaccion" />
    <TransactionList :transacciones="transacciones" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import TransactionForm from '../components/transactions/TransactionForm.vue'
import TransactionList from '../components/transactions/TransactionList.vue'

const transacciones = ref([])

function agregarTransaccion(t) {
  transacciones.value.push(t)
}
</script>

<style scoped>
.transacciones-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  text-align: center;
}
h2 {
  color: #646cff;
  margin-bottom: 1.5rem;
}
@media (max-width: 600px) {
  .transacciones-container {
    padding: 1rem;
  }
}
</style>
