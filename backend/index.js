require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors'); // Agrega esta línea

const app = express();

app.use(express.json());
app.use(cors()); // Agrega esta línea para habilitar CORS

// Configuración de la conexión a MySQL
const pool = mysql.createPool({
    connectionLimit : 10,
    host            : process.env.MYSQL_HOST,
    user            : process.env.MYSQL_USER,
    password        : process.env.MYSQL_PASSWORD,
    database        : process.env.MYSQL_DATABASE
});

// Verificar conexión
pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error al conectar a MySQL', err);
        return;
    }
    console.log('Conectado a MySQL');
    connection.release();
});

// Insertar una nueva rutina
app.post('/create', (req, res) => {
    const query = 'INSERT INTO rutinas SET ?';
    pool.query(query, req.body.rutina, (err, result) => { // Modifica para obtener req.body.rutina
        if (err) {
            res.status(500).send({ message: 'Error al insertar en la base de datos', error: err });
            return;
        }
        res.status(200).send({ message: 'Rutina insertada correctamente', result });
    });
});

// Leer todas las rutinas
app.get('/read', (req, res) => {
    const query = 'SELECT * FROM rutinas';
    pool.query(query, (err, results) => {
        if (err) {
            res.status(500).send({ message: 'Error al leer de la base de datos', error: err });
            return;
        }
        res.status(200).json(results);
    });
});

// Actualizar una rutina
app.put('/update/:id', (req, res) => {
    const query = 'UPDATE rutinas SET ? WHERE id = ?';
    pool.query(query, [req.body.rutina, req.params.id], (err, result) => { // Modifica para obtener req.body.rutina
        if (err) {
            res.status(500).send({ message: 'Error al actualizar en la base de datos', error: err });
            return;
        }
        res.status(200).send({ message: 'Rutina actualizada correctamente', result });
    });
});

// Borrar una rutina
app.delete('/delete/:id', (req, res) => {
    const query = 'DELETE FROM rutinas WHERE id = ?';
    pool.query(query, req.params.id, (err, result) => {
        if (err) {
            res.status(500).send({ message: 'Error al borrar en la base de datos', error: err });
            return;
        }
        res.status(200).send({ message: 'Rutina eliminada correctamente', result });
    });
});

// Iniciar el servidor
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

// Manejo de rutas no encontradas
app.use((req, res) => {
    res.status(404).send({ message: 'Ruta no encontrada' });
});
