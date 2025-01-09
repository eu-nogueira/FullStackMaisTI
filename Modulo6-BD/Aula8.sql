CREATE TABLE oCliente(
	id SERIAL PRIMARY KEY,
	nome VARCHAR(100),
	idade INT,
	endereco VARCHAR(100)
);

CREATE OR REPLACE PROCEDURE cliente_dados(
	p_nome VARCHAR,
	p_idade INT,
	p_endereco VARCHAR
)

LANGUAGE plpgsql
	AS $$
		BEGIN
			INSERT INTO oCliente(nome, idade, endereco)
			VALUES (p_nome, p_idade, p_endereco);
		END
	$$
	CALL cliente_dados('Marcos', 23, 'Nevada');
	SELECT * FROM oCliente
	