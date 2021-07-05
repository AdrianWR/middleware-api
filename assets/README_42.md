# Coding Challenge Vaga 42 São Paulo

Sua tarefa é construir uma API e banco de dados para uma aplicação de análise estatística de alunos. A aplicação deverá receber um intra id e retornar o máximo de informações possíveis sobre aquele determinado aluno, essas informações devem ser angariadas através da [API oficial da Intra](https://api.intra.42.fr/), persistidas num banco de dados e atualizadas após cada nova requisição.

Os dados anteriores devem ser mantidos e utilizados para gerar análises de performance do aluno (projetos concluídos, tempo gasto por projeto, etc.)

A aplicação pode ser construída utilizando qualquer linguagem, banco de dados, frameworks, libraries e ferramentas de sua preferência (Ex: Nest.js + PostgreSQL, etc). Apesar disso, as tecnologias mais comuns na 42 São Paulo são **Golang,** e **Python**.

## O que será avaliado

Queremos avaliar sua capacidade de desenvolver e documentar um back-end para uma aplicação. Serão avaliados:

- Código bem escrito e limpo;
- Quais ferramentas foram usadas, como e por quê;
- Sua criatividade e capacidade de lidar com problemas diferentes e abstratos;
- Sua capacidade de se comprometer com o que foi fornecido;
- Sua capacidade de documentação da sua aplicação.

## O mínimo necessário

- Uma aplicação contendo uma API simples, sem autenticação, que atenda os requisitos descritos abaixo, fazendo requisições à um banco de dados para persistência;
- README.md contendo informações básicas do projeto e como executá-lo;

## Bônus

Os seguintes itens não são obrigatórios, mas darão mais valor ao seu trabalho (os em negrito são mais significativos para nós)

- **Testes**;
- **Conteinerização da aplicação**;
- **Autenticação e autorização** (**OAuth, JWT**);
- Uso de ferramentas externas que facilitem o seu trabalho;
- Cuidados especiais com otimização, padrões, entre outros;
- Migrations ou script para configuração do banco de dados utilizado;
- CronJobs;
- Rota para plotagem de gráficos;
- Manifestos K8s;
- Pipelines de CI;
- Utilização de algum cloud provider (AWS, GCP, Azure...);

# Requisitos

## 0: A API deve responder na porta 3000

## 1: Deve haver uma rota para listar todos os alunos cadastrados

`GET /students`

Resposta:

```jsx
[
    {
        id: 1,
        name: "Gustavo Belfort",
        intra_id: "gus",
    },
    {
        id: 2,
        name: "Guilhemar Caixeta",
        intra_id: "guiga",
    }
]
```

## 2: Deve ser possível filtrar alunos utilizando uma busca por projeto

`GET /students?projects=42cursus_libft`   (*42cursus_libft* é a tag sendo buscada neste exemplo)

Resposta:

```jsx
[
    {
        id: 1,
        name: "Gustavo Belfort",
        intra_id: "gus",
    }
]
```

## 3: Deve haver uma rota para cadastrar um novo aluno

O corpo da requisição deve conter o intra id do aluno a ser cadastrado. A resposta, em caso de sucesso, deve ser o id do aluno gerado no banco de dados e os dados angariados do aluno através da API da Intra, paginados se necessário.

`POST /students
Content-Type: application/json`

```jsx
    {
        "intra_id": "gus"
    }
```

## Critérios de Aceitação

- Você deverá utilizar a api oficial da intra: https://api.intra.42.fr/
- A API deve ser real e escrita por você. Ferramentas que criam APIs automaticamente (Loopback, json-server, etc) não são aceitas;
- Todos os requisitos acima devem ser cumpridos, seguindo o padrão de rotas estabelecido;
- Deve haver uma documentação descrevendo sua API;
- Se você julgar necessário, adequado ou quiser deixar a aplicação mais completa (bônus!) você pode adicionar outras rotas, métodos, meios de autenticação com usuários, etc.

## Formato de entrega

Seu código deverá ser submetido neste repositório, sinta-se livre pare substituir este README.md com o seu próprio.
