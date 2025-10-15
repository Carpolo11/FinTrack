<template>
  <form class="transaction-form" @submit.prevent="enviar">
    <div class="form-group">
      <label>📅 Fecha</label>
      <input type="date" v-model="transaccion.fecha" required />
    </div>

    <div class="form-group">
      <label>💵 Monto</label>
      <input type="number" v-model.number="transaccion.monto" min="0" required />
    </div>

    <button type="submit" class="btn-registrar">Registrar Transacción</button>
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
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  text-align: left;
}

label {
  font-weight: 600;
  color: #4f46e5;
  margin-bottom: 0.4rem;
}

input {
  padding: 0.7rem;
  border-radius: 8px;
  border: 1px solid #cbd5e1;
  background-color: #f9fafb;
  transition: border-color 0.2s, box-shadow 0.2s;
}

input:focus {
  outline: none;
  border-color: #6366f1;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
}

.btn-registrar {
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  color: white;
  border: none;
  padding: 0.9rem;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.3s;
}

.btn-registrar:hover {
  opacity: 0.9;
}
</style>
