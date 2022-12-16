# StockPrime


**Yan Rodrigues Nalon, 1396722@sga.pucminas.br**

**Pedro Luiz Nato Silva, pedroluizns@hotmail.com**

**Victor Augusto Nascimento, 1401434@sga.pucminas.br**

**Guilherme da Silveira Cantoni, gcantoni@sga.pucminas.br**

**Carlos Emanuel Silva e Melo Oliveira, carlos.oliveira.1405439@sga.pucminas.br**

**André Rodrigues de Freitas Faria, 923006@sga.pucminas.br**

---

Professores:

**Cristiano Neves Rodrigues**

**Felipe Augusto Lima Reis**

**Hugo Bastos de Paula**

**Cleiton Silva Tavares**

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

_**Resumo**. Durante a abertura de novos negocios, desde uma startup até uma padaria, é preciso pensar de antemão todas as dependencias tecnologicas, principalmente as que envolvem software. Em caso de estocagem, é preciso comprar a licensa de um software capaz de realizar qualquer tipo de necessidade do negocio, no entanto, o custo para a aquisição dessa tecnologia em muitas vezes é muito superior ao limite do orçamento. O objetivo da StockPrime é ser um software de gerenciamento de estoque gratuito que atenda a necessidade das empresas pequenas com baixo poder aquisitivo. Ao final do desenvolvimento, foi observado que o software é capaz de atender todas os requisitos basicos de um sistema de estocagem, sendo capaz de cadastrar novos itens, adicionar, remover e registrar todas as saidas e entradas do usuário.  

## 1. Introdução

O StockPrime é uma interface de controle de estoques gratuita direcionada à pequenas corporações afim de proporcionar a melhor experiencia de gerenciamento de estoque possivel.

    1.1 Contextualização

A estocagem é um sistema que enfrenta diariamente um número incontável de variáveis que afetam diretamente na eficiencia da mesma. Portanto, centenas de corporações investem milhões por ano em sistemas de gerenciamento de estoque que visam otimizar os processos e controlar o fluxo de mercadorias nas entradas e saídas.

    1.2 Problema

É comum casos onde empresas encontram dificuldades em controlar seus estoques, principalmente em situações onde essas empresas não possuem um metodo eficaz de realizar todas as tarefas de estocagem. Esse fato é proporcionado devido ao alto custo de licensiamento de softwares de gerenciamento.

    1.3 Objetivo geral

Desenvolver um software para gerencia de estoque gratuito direcionado a empresas com baixo orçamento e que atenda todas as necessidades básicas do usuário.

    1.3.1 Objetivos específicos

Interface de Estoque: Para maior controle do gerenciamento, temos como objetivo desenvolver uma interface para exibir ao usuário todos os objetos presentes em seu estoque assim como cadastrar, adicionar, remover ou reestocar um item desejado de forma facil e rápida através dos menus simplificados.

Pedidos de Reestoque: A fim de melhorar a experiência de usuário durante o processo de reestoque, deverá ser integrado à interface do StockPrime uma aba "Pedidos" afim de proporcionar ao usuário um maior acompanhamento do seu pedido de reestoque uma vez que feito no menu simplicado.

Acompanhamento de Estoque: Registro de entradas e saídas de produtos no estoque do usuário. Tem como objetivo proporcionar um controle preciso da disponibilidade do conteúdo, catalogando entradas e saídas para fornecer uma gestão controlada.

    1.4 Justificativas

A ascensão econômica da corporação e do cliente é o foco principal do desenvolvimento desse projeto. Sendo assim, uma gestão eficiente que integra inúmeras variáveis em um só local compõe a combinação perfeita para a maximização do lucro corporativo.

## 2. Participantes do processo

Os participantes do projeto são as empresas cujo não possuem um sistema de controle de estoque automatizado, fornecedores e transportadoras.

- Fornecedores

O fornecedor tem como função receber solicitações de reestoque e realizar todos os processos burocráticos para que um pedido seja enviado.

- Solicitante

Os solicitantes são os usuários do StockPrime que desejam adicionar, fazer retiradas ou reestocar o seu inventário.

- Transportadora

O trabalho da transportadora é levar o produto do fornecedor até o cliente, sendo responsável pela integridade do produto durante o percurso, disponibilizar recursos caso existam necessidades especiais no transporte e notificar os outros participantes a respeito de qualquer atualização no processo.

## 3. Modelagem do processo de negócio

## 3.1. Análise da situação atual

Os grandes sistemas inteligentes que fazem gestão de estoque utilizam da comunicação entre diversos setores para garantir o bom funcionamento dos processos, buscando maximizar a otimização. No entanto, existem ínviduos - majoritariamente pequenas empresas - que não vêem necessidades de utilizar todo o potencial desses tipos de software, portanto, realizam toda a administração manualmente devido ao alto custo de licensiamento. Consequentemente, os mesmos tornam-se suscetíveis a falhas catastróficas e prejuízos imensuráveis caso exista uma inconsistência ou um problema com a gestão.

## 3.2. Descrição Geral da proposta

A proposta da StockPrime é desenvolver um sistema que possibilite um gerenciamento eficaz de estoques provendo acesso à gestão gratuito, acompanhamento em tempo real, reestoque simplificado e monitoramento de entradas, retiradas e cadastros.

## 3.3. Modelagem dos Processos

### 3.3.1 Processo de Requisição e Formalização do Contrato

O processo de requisição e formalização do contrato pertence à parte de cadastro da empresa no StockPrime.
![Processo de Requisição e Formalização do Contrato](https://user-images.githubusercontent.com/21000046/207984098-40ceb7eb-e2dc-48ba-9d11-df2129c292b3.png)

### 3.3.2 Processo de Fornecimento

O processo de fornecimento retrata todos os passos que ocorrem para que um determinado produto seja transportado até o usuário. As raias descrevem "Transportadora" e "Usuário" como peças centrais no processo. 
![Processo de Fornecimento](https://user-images.githubusercontent.com/21000046/207985666-4a938969-13c9-410a-895d-50a43a8c0928.png)

### 3.3.3 Processo de Reestoque

O processo de reestoque descreve as tarefas necessárias para fazer um pedido à um fornecedor. Ao final do processo é disparado um sinal ao processo de fornecimento.
![Processo de Reestoque](https://user-images.githubusercontent.com/21000046/207984579-5f268019-2902-4edf-9c10-9f6d3f3147bf.png)

### 3.3.4 Processo de Quebra de Contrato 

O processo quebra de contrato descreve a analise de um pedido de recisão de contrato e quais medidas devem ser tomadas para realizar o rompimento do contrato.
![Processo de Quebra de Contrato](https://user-images.githubusercontent.com/21000046/207984777-4076e800-2e30-4bbb-b633-6440884a6875.png)

### 3.3.5 Processo de Atualização de Estoque 

O processo de atualização de estoque referencia a ação de adicionar, remover ou cadastrar um novo item no estoque tratando os diversos erros caso haja uma inconsistencia com o mesmo. 
![Processo de Atualização de Estoque](https://user-images.githubusercontent.com/21000046/207984936-658c2957-9e16-4e5a-aa80-924d44f7bd84.png)

## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

### Processo 1 – Processo de Requisição e Formalização do Contrato

**Requisita validação da empresa**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | Área de texto | Não nulo |  --- |
| Descrição | Área de texto | No máximo 120 caracteres |  --- |
| Estado | Área de texto | Não nulo |  --- |
| Cidade | Área de texto | Não nulo |  --- |
| CNPJ | Caixa de texto | No máximo 14 caracteres |  --- |
| Senha | Área de texto | Não nulo | --- |
| Repetir Senha | Área de texto | Não nulo | --- |
|    |    |     |

### Processo 2 – Processo de Fornecimento

**Adiciona item ao estoque**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | Área de texto | Não nulo | --- |
| Descrição | Área de texto | --- | --- |
| Estoque Máximo | Número | --- | --- |
| Porcentagem Alerta | Número | Número maior que 0 menor que 100 | --- |
|    |    |     |

### Processo 3 – Processo de Reestoque

**Requisita mais estoque**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Fornecedor | Área de texto | Não nulo | --- |
| Quantidade do Produto | Número | Não nulo | --- |
|    |    |     |

### Processo 4 - Processo de Quebra de Contrato 

**Solicita encerramento de conta**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Comunicado de rescisão | Arquivo | Formato do arquivo: pdf | --- |
| Valor da multa | Número | Não Nulo | 0,00 | 
|    |    |    |

### Processo 5 – Processo de Atualização de Estoque 

**Insere quantidade de saída**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Quantidade | Número | Não nulo | --- |
|    |    |    |

**Insere quantidade de entrada**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Quantidade | Número | Não nulo | --- |
|    |    |    |

**Insere dados do item**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| Nome | Área de texto | Não nulo | --- |
| Descrição | Área de texto | --- | --- |
| Estoque Máximo | Número | --- | --- |
| Porcentagem Alerta | Número | Número maior que 0 menor que 100 | --- |
|    |    |     |

### 4.2. Tecnologias

Utilizamos o Camunda Modeler para descrever todos os processos necessários. Em seguida fizemos uso do Balsamiq Mockups para ter um esboço das telas juntamente do Figma para criar um protótipo. Ao inicio do desenvolvimento utilizamos o Git para versionamento, no entanto, passamos a utilizar o GitHub Desktop por ter uma interface mais amigavel. Para o banco de dados, inicialmente nós utilizamos o MySQL Server em um servidor hospedado na Azure, entretanto, passamos a utilizar o MongoDB pela facilidade e praticidade oferecida. O editor de texto escolhido foi o Visual Studio Code, utilizamos-o para editar o nosso projeto baseado em Node.js. O banco de dados foi hospedado no MongoDB Atlas e utilizamos o Compass para gerencia-lo. As seguintes bibliotecas, frameworks e linguaguens foram utilizadas: JavaScript, EJS, HTML, CSS, Bootstrap, Express.js, Mongoose, Body-Parser, Passport, FontAwesome, GoogleFonts, DotEnv. Para fazer deploy do projeto finalizado utilizamos o Render, mas por oferecer uma maior eficacia passamos a utilizar o Railway.

![Diagrama](https://user-images.githubusercontent.com/21000046/207989077-f4c5516c-515c-4a85-b799-0e4bcceabaa4.png)

## 5. Modelo de dados

![Diagrama Modelo de Dados](https://user-images.githubusercontent.com/21000046/207989173-21329cff-b6af-4233-8c85-b228570b61f8.png)

## 6. Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.

Usar o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Aumento percentual de requisições de quebra de contrato por mês | Avaliar quantitativamente quantas pedidos de quebra de contrato a mais foram realizados no mês atual em relação ao mês anterior.| Calcula o percentual de aumento nos pedidos de quebra de contrato. | ![\left(\frac{numPedidosMesAnterior}{numPedidosMesAtual}\right) \times 100](https://latex.codecogs.com/svg.latex?\left(\frac{numPedidosMesAnterior}{numPedidosMesAtual}\right)%20\times%20100)  | Tabela de contratos | Controle de Estoque |
| Taxa de movimentação de pedidos por semana | Manter conhecimento e controle sobre a média de pedidos feitos durante o período de uma semana | Realiza a média de pedidos feitos no período de uma semana |   | Tabela Pedidos | Clientes |
| Taxa de pedidos danificados por empresa | Identificar e melhorar os processos que ocasionaram o dano | Calcula quantos porcento de pedidos entregues foram danificados em cima do total de pedidos feitos | [Percentual = (100 * NpedidosDanificados) / NtotalPedidos](https://latex.codecogs.com/svg.latex?{Percentual%20=%20\frac{(100%20*%20NpedidosDanificados)}{NtotalPedidos}}) | Tabela danos | Cliente |

Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe **a ser proposto**

## 7. Sistema desenvolvido

O StockPrime é um aplicativo web desenvolvido com o propósito de oferecer gerenciamento de estoque básico e simplificado

![Login](https://user-images.githubusercontent.com/21000046/207989656-1b95a90d-421a-4be8-86c5-5708affa890e.png)

Na tela de login o usuário deve inserir o cnpj e a senha cadastrada ou se não possuir uma conta ainda deve clicar em "Clique aqui!" para se cadastrar

![Cadastro](https://user-images.githubusercontent.com/21000046/207989666-5fc297dc-9569-464c-98b9-54a40a817002.png)

Na tela de cadastro o usuário deve inserir os dados empresariais desejados, o seu cnpj e escolher uma senha que será utilizada no login

![HomePage](https://user-images.githubusercontent.com/21000046/207989677-564bfdeb-66f9-4f1e-9048-ffa96730df0f.png)

Após se logar, o usuário é direcionado à home page. Em seguida o usuário pode tomar 3 ações diferentes: editar o item no estoque caso já exista algum, adicionando, removendo ou reestocando o item, cadastrar um novo item clicando em "Novo Item" ou navegar entre as páginas clicando nas três barras no canto superior direito.

![Pedidos](https://user-images.githubusercontent.com/21000046/207989681-aae121bf-5376-4145-91b0-963a190642d1.png)

Na pagina de pedidos o usuário pode visualizar todos os pedidos de reestoque feitos anteriormente, o seu status, o item em questão e a quantidade solicitada. Ele também pode retornar para outras páginas navegando pelo menu das três barras no canto superior direito.

![Logs](https://user-images.githubusercontent.com/21000046/207989683-f485b2e5-89dc-40af-b4d9-f359bdf373a7.png)

Na pagina de logs o usuário pode ver todas as ações tomadas anteriormente que impactam no seu estoque e acompanhar todos os valores relacionados a ela. Ele também pode retornar para outras páginas navegando pelo menu das três barras no canto superior direito.

![Shutdown](https://user-images.githubusercontent.com/21000046/207989684-8cb1d233-7ccf-417b-a967-393ad023358f.png)

Na pagina de encerramento de conta o usuário pode escolher entre encerrar sua conta e pagar uma multa ou cancelar a ação e manter seu contrato ativo com a StockPrime.

## 7.1. Tela Inicial

![StockPrime Home](https://user-images.githubusercontent.com/21000046/207989360-e1e21986-f830-4705-bd98-eafec0881432.png)

## 8. Conclusão

Conseguimos implementar o objetivo almejado com sucesso. O StockPrime foi desenvolvido com o principal público em mente sendo as pequenas empresas que não possuem grandes orçamentos para licensiar softwares de gestão de estoque. Implementamos funcionalidades básicas condicionadas ao fato do sistema ser distribuído gratuitamente. 

# REFERÊNCIAS

Como um projeto de software não requer revisão bibliográfica, a inclusão das referências não é obrigatória. No entanto, caso você deseje incluir referências relacionadas às tecnologias, padrões, ou metodologias que serão usadas no seu trabalho, relacione-as de acordo com a ABNT.

Verifique no link abaixo como devem ser as referências no padrão ABNT:

http://www.pucminas.br/imagedb/documento/DOC\_DSC\_NOME\_ARQUI20160217102425.pdf


**[1.1]** - _ELMASRI, Ramez; NAVATHE, Sham. **Sistemas de banco de dados**. 7. ed. São Paulo: Pearson, c2019. E-book. ISBN 9788543025001._

**[1.2]** - _COPPIN, Ben. **Inteligência artificial**. Rio de Janeiro, RJ: LTC, c2010. E-book. ISBN 978-85-216-2936-8._

**[1.3]** - _CORMEN, Thomas H. et al. **Algoritmos: teoria e prática**. Rio de Janeiro, RJ: Elsevier, Campus, c2012. xvi, 926 p. ISBN 9788535236996._

**[1.4]** - _SUTHERLAND, Jeffrey Victor. **Scrum: a arte de fazer o dobro do trabalho na metade do tempo**. 2. ed. rev. São Paulo, SP: Leya, 2016. 236, [4] p. ISBN 9788544104514._

**[1.5]** - _RUSSELL, Stuart J.; NORVIG, Peter. **Inteligência artificial**. Rio de Janeiro: Elsevier, c2013. xxi, 988 p. ISBN 9788535237016._


# APÊNDICES

**Colocar link:**

[Do código (armazenado no repositório);](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-stockprime/tree/master/src)

[Dos artefatos (armazenado do repositório);](https://github.com/ICEI-PUC-Minas-PPLES-TI/plf-es-2022-2-ti2-0924100-stockprime/tree/master/assets)

Da apresentação final (armazenado no repositório);

Do vídeo de apresentação (armazenado no repositório).




