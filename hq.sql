CREATE DATABASE sistema_hqs;

USE sistema_hqs;

CREATE TABLE hqs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    ano INT NOT NULL,
    numeracao INT NOT NULL
);
