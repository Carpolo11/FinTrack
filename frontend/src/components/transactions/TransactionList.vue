<template>
  <div class="transaction-list">
    <h3>📜 Historial de Transacciones</h3>

    <p v-if="!transacciones.length" class="no-data">
      No hay transacciones registradas.
    </p>

    <ul v-else>
      <li v-for="(t, i) in transacciones" :key="i" class="card">
        <div>
          <strong>Fecha:</strong> {{ t.fecha }}
        </div>
        <div class="monto">
          <strong>Monto:</strong> ${{ t.monto.toFixed(2) }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  transacciones: Array
})
</script>

<style scoped>
.transaction-list {
  margin-top: 2.5rem;
}

h3 {
  color: #4f46e5;
  font-weight: 600;
  margin-bottom: 1rem;
}

.no-data {
  color: #9ca3af;
  font-style: italic;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card {
  background: white;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 8px rgba(99, 102, 241, 0.08);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s, box-shadow 0.2s;
}

.card:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 14px rgba(99, 102, 241, 0.15);
}

.monto {
  color: #16a34a;
  font-weight: 600;
}
</style>
