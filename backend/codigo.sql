CREATE DATABASE IF NOT EXISTS fitnessApp;

USE fitnessApp;

-- Crear tabla para rutinas
CREATE TABLE IF NOT EXISTS rutinas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipoEjercicio VARCHAR(255) NOT NULL,
    nombreRutina VARCHAR(255) NOT NULL,
    duracion VARCHAR(255) NOT NULL,
    numeroEjercicios INT NOT NULL
);

-- Crear tabla para dietas
CREATE TABLE IF NOT EXISTS dietas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    tipoComida VARCHAR(255) NOT NULL,
    caloriasTotales INT NOT NULL,
    numeroComidas INT NOT NULL,
    caloriasPorComida INT NOT NULL
);