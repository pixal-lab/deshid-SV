DROP TABLE IF EXISTS Usuarios CASCADE;
DROP TABLE IF EXISTS Artefactos CASCADE;
DROP TABLE IF EXISTS Datos CASCADE;
DROP TABLE IF EXISTS Consultas CASCADE;

CREATE TABLE Usuarios(
    rut INT PRIMARY KEY,
    nombre VARCHAR,
    contrasena VARCHAR,
    correo VARCHAR UNIQUE,
    direccion VARCHAR,
    tipo INT
);

CREATE TABLE Artefactos(
    id SERIAL PRIMARY KEY,
    correo VARCHAR,
    tipo VARCHAR,
    inProcess BOOLEAN,
    alimento VARCHAR,
    CONSTRAINT fk_usuario
        FOREIGN KEY (correo)
        REFERENCES Usuarios(correo)
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
    correo VARCHAR,
    estado BOOLEAN,
    titulo VARCHAR,
    descripcion VARCHAR,
    respuesta VARCHAR,
    CONSTRAINT fk_usuario
        FOREIGN KEY (correo)
        REFERENCES Usuarios(correo)
);