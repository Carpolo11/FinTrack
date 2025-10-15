<template>
  <section class="transacciones-container">
    <div class="header">
      <h1>💰 Registro de Transacciones</h1>
      <p>Gestiona tus movimientos financieros de forma simple y elegante.</p>
    </div>

    <div class="content">
      <TransactionForm @registrar="agregarTransaccion" />
      <TransactionList :transacciones="transacciones" />
    </div>
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
  min-height: 100vh;
  background: linear-gradient(180deg, #eef2ff 0%, #f3f4f6 100%);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem 1.5rem;
  font-family: "Inter", system-ui, sans-serif;
  color: #1f2937;
}

.header {
  text-align: center;
  margin-bottom: 2rem;
}

.header h1 {
  color: #4f46e5;
  font-weight: 700;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.header p {
  color: #6b7280;
  font-size: 1rem;
}

.content {
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(79, 70, 229, 0.1);
  padding: 2rem;
  width: 100%;
  max-width: 600px;
  transition: transform 0.3s;
}

.content:hover {
  transform: translateY(-3px);
}

@media (max-width: 600px) {
  .content {
    padding: 1.5rem;
  }
}
</style>
