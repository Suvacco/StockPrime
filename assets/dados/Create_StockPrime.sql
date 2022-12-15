use stockprime;

create table cliente(
	cnpj_empresa int NOT NULL,
	senha varchar(255),
    nome_empresa varchar(255),
    descricao varchar(255),
    estado varchar(255) NOT NULL,
    cidade varchar(255) NOT NULL,
    
    primary key (cnpj_empresa)
);

create table contrato(
    id_contrato int NOT NULL AUTO_INCREMENT,
	cnpj_empresa int NOT NULL,
    valor_contrato int NOT NULL,
    status_contrato varchar(255),
	multa int,
    data_comeco varchar(255),
    data_encerramento varchar (255),
    
    foreign key (cnpj_empresa) references cliente(cnpj_empresa),
    primary key (id_contrato)
);

create table produto(
	id_produto int NOT NULL,
	cnpj_empresa int NOT NULL,
    nome_produto varchar(255) NOT NULL,
	porcentagem_alerta int NOT NULL,
    quantidade_produto int NOT NULL,
    estoque_max int NOT NULL,

    foreign key (cnpj_empresa) references cliente(cnpj_empresa),
	primary key (id_produto)
);

create table pedidos(
    id_pedido int NOT NULL AUTO_INCREMENT,
	cnpj_empresa int NOT NULL,
    id_produto int NOT NULL,
	quantidade int NOT NULL,
    status_pedido varchar(255),
    fornecedor varchar(255),
    numero_nfe int,
    local_entrega varchar(255),
    hora_entrega varchar(255),
    preferencia_horario varchar(255),
    
	foreign key (cnpj_empresa) references cliente(cnpj_empresa),
	foreign key (id_produto) references produto(id_produto),
	primary key (id_pedido)
);

create table ocorrencias(
    id_ocorrencia int NOT NULL,
	id_pedido int NOT NULL,
    data_ocorrencia varchar(255),
    detalhes varchar(255),
    
    foreign key (id_pedido) references pedidos(id_pedido),
    primary key (id_ocorrencia)
);



