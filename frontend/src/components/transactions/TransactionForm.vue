<template>
  <form class="transaction-form" @submit.prevent="enviar">
    <h2>Registrar Nueva Transacción</h2>

    <div class="form-group">
      <label>📅 Fecha</label>
      <input type="date" v-model="transaccion.fecha" required />
    </div>

    <div class="form-group">
      <label>💵 Monto</label>
      <input type="number" v-model.number="transaccion.monto" min="0" required />
    </div>

    <button type="submit" class="btn-registrar">
      Registrar Transacción
    </button>
  </form>
</template>

<script setup>
import { reactive, defineEmits } from 'vue'
const emit = defineEmits(['registrar'])
const transaccion = reactive({ fecha: '', monto: '' })

function enviar() {
  emit('registrar', { ...transaccion })
  transaccion.fecha = ''
  transaccion.monto = ''
}
</script>

<style scoped>
.transaction-form {
  background: linear-gradient(145deg, #eef2ff, #e0e7ff);
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 6px 20px rgba(79, 70, 229, 0.25);
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  text-align: left;
  animation: fadeIn 1s ease;
}

h2 {
  color: #4f46e5;
  font-weight: 700;
  text-align: center;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: 600;
  color: #4338ca;
  margin-bottom: 0.3rem;
}

input {
  padding: 0.8rem;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background-color: #f9fafb;
  font-size: 1rem;
  transition: all 0.3s;
}

input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
  outline: none;
}

.btn-registrar {
  margin-top: 0.8rem;
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  color: white;
  border: none;
  padding: 1rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.btn-registrar:hover {
  transform: scale(1.03);
  box-shadow: 0 6px 20px rgba(99, 102, 241, 0.4);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
