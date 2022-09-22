# StockPrime


**Yan Rodrigues Nalon, 1396722@sga.pucminas.br**

**Pedro Luiz Nato Silva, pedroluizns@hotmail.com**

**Victor Augusto Nascimento, 1401434@sga.pucminas.br**

**Guilherme da Silveira Cantoni,gcantoni@sga.pucminas.br**

**Carlos Emanuel Silva e Melo Oliveira, carlos.oliveira.1405439@sga.pucminas.br**

**André Rodrigues de Freitas Faria, 923006@sga.pucminas.br**

---

Professores:

**Cristiano Geraldo Teixeira Silva**

**Felipe Augusto Lima Reis**

**Hugo Bastos de Paula**

---

_Curso de Engenharia de Software, Unidade Praça da Liberdade_

_Instituto de Informática e Ciências Exatas – Pontifícia Universidade de Minas Gerais (PUC MINAS), Belo Horizonte – MG – Brasil_

---

_**Resumo**. Escrever aqui o resumo. O resumo deve contextualizar rapidamente o trabalho, descrever seu objetivo e, ao final, 
mostrar algum resultado relevante do trabalho (até 10 linhas)._

---


## 1. Introdução

Em uma indústria onde é preciso gerenciar centenas de contratempos, imprevistos, lucros, perdas e transportes, concentrar toda a informação em um único lugar minimiza todas essas dificuldades. O StockPrime visa criar uma interface de controle de estoques que ajude corporações a terem um melhor gerenciamento de matérias-primas, projetando despesas e cruzando informações para maximizar o lucro. 

    1.1 Contextualização

A indústria do setor secundário enfrenta diariamente um número incontável de variáveis que afetam diferentes áreas do ramo, seja positivamente como negativamente. Portanto, centenas de corporações investem em sistemas de gerenciamento que visam otimizar os processos e controlar o fluxo de mercadorias nas entradas e saídas. A final, o monitoramento incorreto e não projetado pode ocasionar em prejuízos comerciais, como o sobrestoque ou a falta de insumos e por consequência a instabilidade econômica da corporação, colocando-a em uma situação de controle de danos.

    1.2 Problema

É comum casos onde empresas encontram dificuldades em controlar seus estoques, principalmente em situações onde essas empresas atuam tanto por meio de lojas físicas como por lojas virtuais - fato que vêm se tornando cada vez mais habitual devido ao avanço tecnológico e aumento da demanda da possibilidade de comprar online - , assim causando problemas devido à atualização de estoque em tempo real em relação à venda simultânea do mesmo produto por ambos meios digitais e físicos. 

    1.3 Objetivo geral

A StockPrime tem como objetivo geral facilitar controles de estoque, melhorar a gestão do inventário do usuário e intermediar relações com terceiros.

    1.3.1 Objetivos específicos

Gestão Econômica: Para minimizar custos e prejuizos, temos como objetivo o fornecimento constante de uma avaliação da situação financeira atual do cliente. Sendo assim, o usuário terá acesso à um resumo contendo seus custos, entradas, saídas, receitas e projeções de possíveis prejuízos.

Automatização de Restoque: A fim de melhorar a eficiência do processo de reestoque, a StockPrime visa intermediar as relações entre os fornecedores e os clientes. Dessa forma, o inventário sempre estará disponível para retirada de produtos e o reestoque mediante ao consumo do mesmo; 

Controle de Estoque: Registro de entradas e saídas de produtos no estoque do usuário. Tem como objetivo proporcionar um controle preciso da disponibilidade do conteúdo, catalogando entradas e saídas para fornecer uma gestão controlada.

    1.4 Justificativas

A ascensão econômica da corporação cliente é o foco principal da StockPrime. Sendo assim, uma gestão ecônomica que integra inúmeras variáveis em um só local e cria projeções de possiveis prejuizos compõem a combinação perfeita para a maximização do lucro corporativo. Não só isso como a gestão precisa do controle de estoque exerce uma função crucial na otimização da gestão do inventário, prevenindo a perda de investimentos com fornecimento desnecessário.

## 2. Participantes do processo

Os participantes do projeto são as empresas cujo não possuem um sistema de controle de estoque, a central de controle de estoque, fornecedores e transportadoras.

- Fornecedores

O fornecedor tem como função receber solicitações de reestoque e realizar todos os processos burocráticos para que um pedido seja enviado.

- Solicitante

Os solicitantes são os clientes da StockPrime que desejam adicionar, fazer retiradas ou reestocar o seu inventário.

- Transportadora

O trabalho da transportadora é levar o produto do fornecedor até o cliente, sendo responsável pela integridade do produto durante o percurso, disponibilizar recursos caso existam necessidades especiais no transporte e notificar os outros participantes a respeito de qualquer atualização no processo.

- Controle de Estoque

É a parte responsável pelas intermediações entre os outros participantes do processo e administrador da gestão de estoque.

## 3. Modelagem do processo de negócio

## 3.1. Análise da situação atual

Os atuais sistemas inteligentes que fazem a gestão de estoque utilizam da comunicação entre diversos setores para garantir o bom funcionamento dos processos, buscando maximizar a otimização. No entanto, existem ínviduos - majoritariamente pequenas empresas - que não vêem necessidades em automatizar o seu trabalho, portanto, realizam toda a administração manualmente. Consequentemente, os mesmos tornam-se suscetíveis a falhas catastróficas e prejuízos imensuráveis caso exista uma inconsistência ou um problema com o sistema.

## 3.2. Descrição Geral da proposta

A proposta da StockPrime é implementar um sistema que permita nossos clientes terem um contato direto com seus estoques através de nossa plataforma de controle, tendo acesso à gestão e monitoramento em tempo real, automatização de reestoque, análises financeiras do sistema e histórico de entradas e retiradas.

## 3.3. Modelagem dos Processos

### 3.3.1 Processo 1 – Processo de Requisição e Formalização do Contrato ![189994546-393498ba-1840-4936-bf34-389ade89e9e6](https://user-images.githubusercontent.com/104280113/190533657-10fbb787-0492-4c47-bf0d-1b7841ce4341.png)

### 3.3.2 Processo 2 - Processo de Transporte ![Processo de Transporte](https://user-images.githubusercontent.com/21000046/189994553-981b6213-8a62-454b-b5d1-1d2e0483e374.png)

### 3.3.3 Processo 3 - Processo de Feedback Financeiro![Processo](https://user-images.githubusercontent.com/96486178/190534355-aff97c9d-39fc-4764-9f6c-dfc971f2a937.png)


## 4. Projeto da Solução

### 4.1. Detalhamento das atividades

Descrever aqui cada uma das propriedades das atividades de cada um dos processos. Devem estar relacionadas com o modelo de processo apresentado anteriormente.

#### Processo 1 – NOME DO PROCESSO

**Nome da atividade 1**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
| ***Exemplo:***  |    |     |
| login | Caixa de Texto | formato de e-mail |  |
| senha | Caixa de Texto | mínimo de 8 caracteres |   |

**Nome da atividade 2**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

#### Processo 2 – NOME DO PROCESSO

**Nome da atividade 1**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

**Nome da atividade 2**

| **Campo** | **Tipo** | **Restrições** | **Valor default** |
| --- | --- | --- | --- |
| [Nome do campo] | [Área de texto, Caixa de texto, Número, Data, Imagem, Seleção única, Múltipla escolha, Arquivo, Link, Tabela] |  |  |
|    |    |     |

### 4.2. Tecnologias

Descreva qual(is) tecnologias você vai usar para resolver o seu problema, ou seja implementar a sua solução. Liste todas as tecnologias envolvidas, linguagens a serem utilizadas, serviços web, frameworks, bibliotecas, IDEs de desenvolvimento, e ferramentas. Apresente também uma figura explicando como as tecnologias estão relacionadas ou como uma interação do usuário com o sistema vai ser conduzida, por onde ela passa até retornar uma resposta ao usuário.

## 5. Modelo de dados

Apresente o modelo de dados por meio de um modelo relacional ou Diagrama de Entidade-Relacionamento (DER) que contemple todos conceitos e atributos apresentados item anterior. 

![Diagrama de Entidade Relacionamento de Exemplo](imagens/er_diagram.png "Diagrama de Entidade Relacionamento de Exemplo")

## 6. Indicadores de desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores.

Usar o seguinte modelo:

| **Indicador** | **Objetivos** | **Descrição** | **Cálculo** | **Fonte dados** | **Perspectiva** |
| --- | --- | --- | --- | --- | --- |
| Percentual reclamações | Avaliar quantitativamente as reclamações | Percentual de reclamações em relação ao total atendimento |   | Tabela reclamações | Aprendizado e Crescimento |
| Taxa de Requisições abertas | Melhorar a prestação de serviços medindo a porcentagem de requisições | Mede % de requisições atendidas na semana | ![\frac{\sum{atendidas}}{\sum{requisicoes}}100](https://latex.codecogs.com/svg.latex?\frac{\sum{atendidas}}{\sum{requisicoes}}100) | Tabela solicitações | Processos internos |
| Taxa de entrega de material | Manter controle sobre os materiais que estão sendo entregues | Mede % de material entregue dentro do mês |   | Tabela Pedidos | Clientes |

Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe **a ser proposto**

## 7.Sistema desenvolvido

Faça aqui uma breve descrição do software e coloque as principais telas com uma explicação de como usar cada uma.

## 8. Conclusão

Apresente aqui a conclusão do seu trabalho. Discussão dos resultados obtidos no trabalho, onde se verifica as observações pessoais de cada aluno. Poderá também apresentar sugestões de novas linhas de estudo.

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

Do código (armazenado no repositório);

Dos artefatos (armazenado do repositório);

Da apresentação final (armazenado no repositório);

Do vídeo de apresentação (armazenado no repositório).




