
use stockprime;

create table cliente(
	nome_dono varchar(255) NOT NULL,
    cpf_dono int NOT NULL,
    nome_empresa varchar(255),
    cnpj_empresa int NOT NULL,
    descricao varchar(255),
    estado varchar(255) NOT NULL,
    cidade varchar(255) NOT NULL,
    login varchar(255),
    senha varchar(255),
    
    primary key (cnpj_empresa)
);

create table contrato(
	cnpj_empresa int NOT NULL,
    codigo_contrato int NOT NULL AUTO_INCREMENT,
    valor_contrato int NOT NULL,
    status_contrato varchar(255),
	multa int,
    data_comeco varchar(255),
    data_encerramento varchar (255),
    
    foreign key (cnpj_empresa) references cliente(cnpj_empresa),
    primary key (codigo_contrato)
);

create table produto(
	codigo_produto int NOT NULL,
    nome_produto varchar(255),

	primary key (codigo_produto)
);

create table estoque(
	cnpj_empresa int NOT NULL,
    codigo_produto int NOT NULL,
    id_estoque int NOT NULL AUTO_INCREMENT,
	quantidade_produto int NOT NULL,
    
    foreign key (cnpj_empresa) references cliente(cnpj_empresa),
    foreign key (codigo_produto) references produto(codigo_produto),
    primary key (id_estoque)
);

create table pedidos(
	cnpj_empresa int NOT NULL,
    codigo_produto int NOT NULL,
    id_pedido int NOT NULL AUTO_INCREMENT,
    status_pedido varchar(255),
    fornecedor varchar(255),
    numero_nfe int,
    local_entrega varchar(255),
    hora_entrega varchar(255),
    preferencia_horario varchar(255),
    
	foreign key (cnpj_empresa) references cliente(cnpj_empresa),
	foreign key (codigo_produto) references estoque(codigo_produto),
	primary key (id_pedido)
);

create table danos(
	id_pedido int NOT NULL,
    data_ocorrencia varchar(255),
    detalhes_dano varchar(255),
    
    foreign key (id_pedido) references pedidos(id_pedido),
    primary key (id_pedido)
);



