const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.json({message: "Hola desde la base de la url"})
})

app.get('/hello-world', (req, res) => {
    res.json({message: "Hello Root"})
})

app.listen(port, () => {
    console.log('Servicio levantado en el puerto: ', port)
})