<template>
  <form class="transaction-form" @submit.prevent="enviar">
    <h2>{{ isEditing ? "✏️ Editar Transacción" : "🧾 Registrar Nueva Transacción" }}</h2>

    <div class="form-layout">
      <!-- Columna izquierda -->
      <div class="col">
        <div class="form-group">
          <label>📅 Fecha</label>
          <input type="date" v-model="transaccion.fecha" required />
        </div>

        <div class="form-group">
          <label>💵 Monto</label>
          <input type="number" v-model.number="transaccion.monto" min="0" required />
        </div>

        <div class="form-group">
          <label>📂 Tipo</label>
          <select v-model="transaccion.tipo" required>
            <option disabled value="">Seleccione...</option>
            <option>Ingreso</option>
            <option>Egreso</option>
          </select>
        </div>
      </div>

      <!-- Columna derecha -->
      <div class="col">
        <div class="form-group">
          <label>🏷️ Categoría</label>
          <select v-model="transaccion.categoria" required>
            <option disabled value="">Seleccione...</option>
            <option>Alimentación</option>
            <option>Transporte</option>
            <option>Salud</option>
            <option>Entretenimiento</option>
            <option>Educación</option>
            <option>Otros</option>
          </select>
        </div>

        <div class="form-group">
          <label>🧾 Descripción</label>
          <input
            type="text"
            v-model="transaccion.descripcion"
            placeholder="Detalles de la transacción"
            required
          />
        </div>

        <div class="form-group">
          <label>👤 Usuario</label>
          <input
            type="text"
            v-model="transaccion.usuario"
            placeholder="Nombre del usuario"
            required
          />
        </div>
      </div>
    </div>

    <div class="button-container">
      <button type="submit" class="btn-registrar">
        {{ isEditing ? "Actualizar Transacción" : "Registrar Transacción" }}
      </button>
    </div>
  </form>
</template>

<script setup>
import { reactive, ref, defineEmits, onMounted } from 'vue'
const emit = defineEmits(['registrar'])

const transaccion = reactive({
  id: null,
  fecha: '',
  monto: '',
  tipo: '',
  categoria: '',
  descripcion: '',
  usuario: ''
})

const isEditing = ref(false)

function enviar() {
  emit('registrar', { ...transaccion })
  limpiar()
}

function limpiar() {
  Object.assign(transaccion, {
    id: null,
    fecha: '',
    monto: '',
    tipo: '',
    categoria: '',
    descripcion: '',
    usuario: ''
  })
  isEditing.value = false
}

onMounted(() => {
  window.addEventListener('editar-transaccion', e => {
    Object.assign(transaccion, e.detail)
    isEditing.value = true
  })
})
</script>

<style scoped>
.transaction-form {
  width: 100%;
  background: linear-gradient(145deg, #eef2ff, #e0e7ff);
  padding: 2rem 3rem;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(79, 70, 229, 0.25);
  text-align: left;
  transition: transform 0.3s ease;
}

.transaction-form:hover {
  transform: translateY(-2px);
}

h2 {
  text-align: center;
  color: #4f46e5;
  font-weight: 700;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
}

/* ✅ Nuevo diseño horizontal */
.form-layout {
  display: grid;
  grid-template-columns: 1fr 1fr; /* dos columnas */
  gap: 2rem;
  justify-content: space-between;
}

.col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

input,
select {
  padding: 0.9rem;
  border-radius: 10px;
  border: 1px solid #cbd5e1;
  background-color: #f9fafb;
  transition: 0.3s;
  font-size: 1rem;
}

input:focus,
select:focus {
  border-color: #6366f1;
  outline: none;
  box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.25);
}

/* ✅ Botón centrado */
.button-container {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

.btn-registrar {
  background: linear-gradient(90deg, #4f46e5, #6366f1);
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.btn-registrar:hover {
  transform: scale(1.05);
  box-shadow: 0 8px 20px rgba(99, 102, 241, 0.4);
}

/* ✅ Responsive */
@media (max-width: 850px) {
  .form-layout {
    grid-template-columns: 1fr;
  }
  .transaction-form {
    padding: 1.5rem;
  }
}
</style>
