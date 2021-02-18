//* IMPORTS
const express = require('express');
const router = express.Router();

const {
    usuariosGet,
    usuariosPut,
    usuariosPost,
    usuariosDelete
} = require('../controllers/usuarios');




//* ROUTES
router.get('/', usuariosGet );

router.post('/', usuariosPost );

router.put('/:id', usuariosPut );

router.delete('/', usuariosDelete );





module.exports = router;