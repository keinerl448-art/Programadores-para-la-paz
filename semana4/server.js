const express = require('express');
const app = express();

// Ruta principal (raiz)
app.get('/', (req, res) => {
    res.send('Servidor funcionando correctamente');
});

// Configurar el puerto de escucha
app.listen(3000, () => {
    console.log('Servidor ejecutándose en puerto 3000');
});