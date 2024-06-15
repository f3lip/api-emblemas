CREATE DATABASE IF NOT EXISTS desafioEmblemas;

CREATE TABLE IF NOT EXISTS Emblemas (
    ID MEDIUMINT NOT NULL AUTO_INCREMENT,
    Slug varchar(255),
    Name varchar(255),
    Image varchar(255),
	PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS Usuarios (
    ID MEDIUMINT NOT NULL AUTO_INCREMENT,
    User varchar(255),
    Name varchar(255),
	PRIMARY KEY (ID)
);

CREATE TABLE IF NOT EXISTS Emblemas_Usuarios (
	ID MEDIUMINT NOT NULL AUTO_INCREMENT,
    emblemas MEDIUMINT NOT NULL,
    usuarios MEDIUMINT NOT NULL,
	PRIMARY KEY (ID),
    CONSTRAINT FK_EMBLEMAS_USUARIOS_EMBLEMAS FOREIGN KEY (emblemas) REFERENCES Emblemas(ID),
	CONSTRAINT FK_EMBLEMAS_USUARIOS_USUARIOS FOREIGN KEY (usuarios) REFERENCES Usuarios(ID)
);

INSERT INTO Emblemas (ID, Slug, Name, Image) VALUES (1, 'cda', 'Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/cidade-alta.png');
INSERT INTO Emblemas (ID, Slug, Name, Image) VALUES (2, 'cda-valley', 'Cidade Alta Valley', 'https://cidadealtarp.com/imagens/challenge/cidade-alta-valley.png');
INSERT INTO Emblemas (ID, Slug, Name, Image) VALUES (3, 'policia', 'Policia do Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/policia.png');
INSERT INTO Emblemas (ID, Slug, Name, Image) VALUES (4, 'hospital', 'Hospital do Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/hospital.png');
INSERT INTO Emblemas (ID, Slug, Name, Image) VALUES (5, 'mecanica', 'Mecânica do Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/mecanica.png');
INSERT INTO Emblemas (ID, Slug, Name, Image) VALUES (6, 'taxi', 'Taxi do Cidade Alta', 'https://cidadealtarp.com/imagens/challenge/taxi.png');
INSERT INTO Emblemas (ID, Slug, Name, Image) VALUES (7, 'curuja', 'Coruja', 'https://cidadealtarp.com/imagens/challenge/coruja.png');
INSERT INTO Emblemas (ID, Slug, Name, Image) VALUES (8, 'hiena', 'Hiena', 'https://cidadealtarp.com/imagens/challenge/hiena.png');
INSERT INTO Emblemas (ID, Slug, Name, Image) VALUES (9, 'gato', 'Gato', 'https://cidadealtarp.com/imagens/challenge/gato.png');
INSERT INTO Emblemas (ID, Slug, Name, Image) VALUES (10, 'cda', 'Urso', 'https://cidadealtarp.com/imagens/challenge/urso.png');

INSERT INTO Usuarios (ID, User, Name) VALUES (1, 'admin', 'Admin');
INSERT INTO Usuarios (ID, User, Name) VALUES (2, 'user.test', 'User test');