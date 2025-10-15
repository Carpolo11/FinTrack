<template>
  <div class="transaction-list">
    <h2>📜 Historial de Transacciones</h2>

    <p v-if="!transacciones.length" class="no-data">
      Aún no hay transacciones registradas. 🌱
    </p>

    <ul v-else>
      <li v-for="(t, i) in transacciones" :key="i" class="card">
        <div class="info">
          <span class="fecha">{{ t.fecha }}</span>
          <span class="monto">${{ t.monto.toFixed(2) }}</span>
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
  width: 100%;
  max-width: 600px;
  text-align: center;
}

h2 {
  color: #4338ca;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.no-data {
  color: #6b7280;
  font-style: italic;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.card {
  background: linear-gradient(135deg, #ffffff 0%, #eef2ff 100%);
  border-radius: 16px;
  padding: 1.5rem;
  margin-bottom: 1rem;
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 28px rgba(79, 70, 229, 0.25);
}

.info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  font-size: 1.1rem;
}

.fecha {
  color: #374151;
}

.monto {
  color: #16a34a;
  font-weight: 700;
}
</style>
