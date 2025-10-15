<template>
  <form class="transaction-form" @submit.prevent="enviar">
    <div class="field">
      <label>Fecha</label>
      <input type="date" v-model="transaccion.fecha" required />
    </div>

    <div class="field">
      <label>Monto</label>
      <input type="number" v-model.number="transaccion.monto" min="0" required />
    </div>

    <button type="submit" class="btn">Registrar</button>
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
  gap: 1rem;
  width: 100%;
  max-width: 400px;
  margin: auto;
}
.field {
  display: flex;
  flex-direction: column;
  text-align: left;
}
.btn {
  background-color: #646cff;
  color: white;
  border: none;
  padding: 0.8em;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
}
.btn:hover {
  background-color: #535bf2;
}
</style>
