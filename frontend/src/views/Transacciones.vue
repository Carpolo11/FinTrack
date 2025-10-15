<template>
  <section class="transacciones-page">
    <header class="header">
      <h1>💸 Registro de Transacciones</h1>
      <p>Gestiona tus movimientos financieros con una experiencia moderna y profesional.</p>
    </header>

    <main class="main-content">
      <div class="card-container">
        <TransactionForm @registrar="agregarTransaccion" />
        <TransactionList :transacciones="transacciones" />
      </div>
    </main>
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
.transacciones-page {
  height: 100vh; 
  overflow: hidden; 
  background: linear-gradient(135deg, #4f46e5 0%, #6366f1 50%, #a5b4fc 100%);
  color: #f9fafb;
  font-family: "Poppins", system-ui, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
}

.header {
  text-align: center;
  margin-bottom: 1.2rem; 
  animation: fadeIn 1s ease-out;
}

.header h1 {
  font-size: 2.3rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.header p {
  font-size: 1rem;
  color: #e0e7ff;
}

.main-content {
  width: 100%;
  max-width: 850px; 
  display: flex;
  justify-content: center;
}

.card-container {
  background: white;
  border-radius: 18px;
  padding: 1.8rem 2rem; 
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  animation: slideUp 1s ease;
  width: 100%;
  max-height: 72vh; 
  overflow-y: auto; 
}

@media (max-width: 768px) {
  .header h1 {
    font-size: 1.8rem;
  }

  .card-container {
    padding: 1.5rem;
    max-height: 75vh;
  }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>
