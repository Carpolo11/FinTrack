<template>
  <div v-if="transacciones.length" class="transaction-list">
    <h3>Historial de Transacciones</h3>
    <ul>
      <li v-for="(t, i) in transacciones" :key="i">
        <span>{{ t.fecha }}</span>
        <strong>${{ t.monto.toFixed(2) }}</strong>
      </li>
    </ul>
  </div>
  <p v-else class="no-data">No hay transacciones registradas aún.</p>
</template>

<script setup>
defineProps({
  transacciones: Array
})
</script>

<style scoped>
.transaction-list {
  margin-top: 2rem;
  width: 100%;
  max-width: 400px;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  justify-content: space-between;
  background: #f4f4f4;
  padding: 0.8rem;
  margin-bottom: 0.5rem;
  border-radius: 6px;
}
.no-data {
  margin-top: 1.5rem;
  color: gray;
}
</style>
