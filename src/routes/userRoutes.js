// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Rutas de usuarios
router.post('/', userController.guardarUsuario);
router.get('/', userController.obtenerUsuarios);
router.post('/login', userController.loginUsuario);

module.exports = router;
