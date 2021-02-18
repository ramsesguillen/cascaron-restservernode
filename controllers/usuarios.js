//* IMPORTS
const { response } = require('express');



//* FUNCTIONS
const usuariosGet = (req = request, res = response ) => {

    const { q, nombre = 'no name', apikey } = req.query;

    res.json({
        msg: 'GET API - Controlador',
        q, nombre, apikey
    });
}


const usuariosPost = (req, res = response ) => {

    const body = req.body;

    res.json({
        msg: 'Post API -controller',
        body
    });
}


const usuariosPut = (req, res = response ) => {

    const id = req.params.id;
    res.json({
        msg: 'Put API',
        id
    });
}


const usuariosDelete = (req, res = response ) => {
    res.json({
        msg: 'Delete API'
    });
}






module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}