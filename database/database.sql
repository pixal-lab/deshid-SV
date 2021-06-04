CREATE DATABASE DESHIDRATADOR;

CREATE TABLE Usuarios(
    id SERIAL PRIMARY KEY,
    nombre VARCHAR,
    contrasena VARCHAR,
    correo VARCHAR,
    direccion VARCHAR
);

CREATE TABLE Artefactos(
    id SERIAL PRIMARY KEY,
    id_usuario INT,
    tipo VARCHAR,
    CONSTRAINT fk_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES Usuarios(id)
);

CREATE TABLE Datos(
    id SERIAL PRIMARY KEY,
    id_artefacto INT,
    tiempo DECIMAL,
    humedad DECIMAL,
    temperatura DECIMAL,
    peso DECIMAL,
    gas DECIMAL,
    alimento VARCHAR,
    CONSTRAINT fk_artefacto
        FOREIGN KEY (id_artefacto)
        REFERENCES Artefactos(id)
);

CREATE TABLE Consultas(
    id SERIAL PRIMARY KEY,
    id_usuario INT,
    estado BOOLEAN,
    titulo VARCHAR,
    descripcion VARCHAR,
    respuesta BOOLEAN,
    CONSTRAINT fk_usuario
        FOREIGN KEY (id_usuario)
        REFERENCES Usuarios(id)
)