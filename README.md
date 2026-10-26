## SkillMatch JS

### Sobre o projeto

O SkillMatch JS é uma aplicação desenvolvida em JavaScript, que compara as habilidades de um candidato, com os requisitos de vagas fictícias de tecnologia.

O sistema calcula um percentual do compatibilidade, classifica as vagas de acordo com o resultado, identifica as habilidades que precisam ser desenvolvidas e as sugere como estudo.


### Objetivo

Praticar conceitos de JavaScript através de um projeto prático, incluindo programação orientada a objetos, manipulação de arrays, funções, callbacks, closures e programação assíncrona.


### Como funciona a compatibilidade

O percentual de compatibilidade é calculado comparando as habilidades que a vaga exige com as habilidades que a candidata já possui.

**Fórmula:**

Compatibilidade (%) = (Habilidades atendidas / Total de habilidades exigidas) × 100

O resultado é arredondado para duas casas decimais.


### Classificação das vagas

**Alta:** compatibilidade maior ou igual a 80%.
**Média:** compatibilidade maior ou igual a 50% e menor que 80%.
**Baixa:** compatibilidade menor que 50%.


### Habilidades e recomendações

Para cada vaga, o sistema identifica as habilidades atendidas e as habilidades faltantes. A vaga que vai embasar as recomedações de estudo, é selecionada considerando o maior percentual de compatibilidade. Em caso de empate, é priorizada a vaga com menos habilidades faltantes. As habilidades faltantes da vaga são apresentadas como recomendações de estudo.


### Tecnologias utilizadas

- JavaScript
- Node.js
- Git e GitHub


### Como executar o projeto

1. Instale o Node.js.
2. Clone o repositório do projeto.
3. Abra a pasta do projeto no terminal.
4. Execute o comando: node skillmatch.js

O programa analisará as vagas cadastradas, exibirá os percentuais de compatibilidade e apresentará recomendações de estudo.


### Conceitos de JavaScript aplicados

- Programação Orientada a Objetos (POO)

Classes e objetos: a classe Vaga representa as vagas de emprego.
Constructor e this: inicializam e armazenam os dados de cada vaga.
Métodos: compararHabilidades() identifica as habilidades atendidas e faltantes.
Herança: a classe VagaRemota estende Vaga para representar vagas com modalidade remota.
Manipulação de arrays
filter(): filtra vagas com compatibilidade igual ou superior a 80%.
map(): extrai os títulos das vagas analisadas.
reduce(): seleciona a vaga prioritária para estudo.

- Funções e escopo

Callback: uma função é passada como argumento para registrar cada análise.
Closure: a função criada por criarContadorAnalises() mantém o contador entre chamadas, sem utilizar uma variável global para armazená-lo.

- Programação assíncrona

Promise: representa o carregamento das vagas.
async/await: permite aguardar o carregamento antes de iniciar a análise.
setTimeout(): simula um atraso no carregamento.
Tratamento de erros: reject() sinaliza uma falha e try/catch captura e apresenta a mensagem de erro.


### Decisões de implementação

O percentual de compatibilidade considera a quantidade de habilidades exigidas pela vaga que o candidato possui. Todas as habilidades exigidas têm o mesmo peso no cálculo.

A seleção da vaga prioritária considera primeiro o maior percentual de compatibilidade. Quando duas vagas apresentam o mesmo percentual, a vaga com menos habilidades faltantes recebe prioridade.

O carregamento assíncrono é simulado localmente com uma Promise e setTimeout(). Nesta versão, as vagas estão cadastradas diretamente no código, sem integração com uma API externa.


### Limitações e melhorias futuras

Permitir cadastrar diferentes candidatos e vagas.
Armazenar vagas e perfis em um banco de dados.
Criar uma interface gráfica para facilitar o uso.


### Contexto de execução

O projeto executa localmente com Node.js e apresenta os resultados no terminal. O carregamento assíncrono simula uma operação de espera, mas ainda não realiza comunicação real entre cliente e servidor.


### Extensões do VS Code

Extensões recomendadas para trabalhar com JavaScript:

**ESLint:** identifica possíveis problemas no código e ajuda a manter padrões de qualidade.
**Prettier - Code formatter:** formata o código automaticamente para manter uma apresentação consistente.

Essas extensões são recomendações para o ambiente de desenvolvimento e não são dependências necessárias para executar o projeto.


### Como a internet funciona

A internet conecta dispositivos e servidores por meio de redes que utilizam protocolos de comunicação. Quando um usuário acessa um site, o navegador envia uma solicitação a um servidor, que processa o pedido e retorna uma resposta. O navegador utiliza essa resposta para apresentar o conteúdo ao usuário.


### Arquitetura cliente-servidor

Na arquitetura cliente-servidor, o cliente solicita informações ou serviços, enquanto o servidor recebe e processa as solicitações e retorna respostas. No SkillMatch JS, o carregamento assíncrono com Promise, setTimeout() e async/await simula uma espera por dados, mas não existe comunicação real com um servidor ou API externa.


### Declaração de variáveis: var, let e const

- const: declara uma variável cuja referência não pode ser reatribuída. É a opção utilizada na maior parte do projeto quando não precisamos reatribuir a variável.
- let: declara uma variável que pode receber novos valores. No projeto, é utilizada no contador de análises, cujo valor aumenta a cada chamada.
- var: é uma forma mais antiga de declarar variáveis, com diferenças de escopo em relação a let e const. Não foi utilizada neste projeto, pois priorizamos const e let.


