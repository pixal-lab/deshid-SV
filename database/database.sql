CREATE DATABASE DESHIDRATADOR;

CREATE TABLE clientes(
    id SERIAL PRIMARY KEY,
    usuario TEXT,
    contraseña TEXT,
    correo TEXT
);

CREATE TABLE alimentos(
    id SERIAL PRIMARY KEY,
    nombre TEXT,
    
);

CREATE TABLE artefactos(
    id SERIAL PRIMARY KEY,
    id_cliente INT,
    id_alimento INT
    CONSTRAINT fk_cliente
        FOREIGN KEY (id_cliente)
        REFERENCES clientes(id),
    CONSTRAINT fk_alimento
        FOREIGN KEY (id_alimento)
        REFERENCES alimentos(id)
);

