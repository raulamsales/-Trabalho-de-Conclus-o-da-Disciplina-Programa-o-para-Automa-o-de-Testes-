# Trabalho de Conclusão da disciplina Integração Contínua para Automação de Testes

O objetivo é criar uma pipeline no GitHub Actions para rodar testes automatizados, salvar o relatório da execução e mostrar uma evidência da pipeline rodando com sucesso.

## Tecnologias usadas

* JavaScript
* Node.js
* Mocha
* GitHub Actions

## Estrutura do projeto

```txt
src/
test/
.github/workflows/
package.json
README.md
```

## Sobre o projeto

O projeto tem um arquivo com o código principal dentro da pasta `src` e os testes dentro da pasta `test`.

## Como instalar

Para instalar as dependências do projeto, use:

```bash
npm install
```

## Como rodar os testes

Para rodar os testes localmente, use:

```bash
npm test
```

## Pipeline

A pipeline foi criada no GitHub Actions.

O arquivo da pipeline fica em:

```txt
.github/workflows/ci.yml
```

Ela faz essa sequência:

1. Baixa o código do projeto.
2. Configura o Node.js.
3. Instala as dependências.
4. Roda os testes automatizados.
5. Cria um relatório simples da execução.
6. Salva o relatório como artifact.

## Formas de execução da pipeline

A pipeline pode rodar de três formas.

### Push

A pipeline roda quando eu faço push na branch master.

```yml
push:
  branches:
    - master
```

### Manual

A pipeline também pode ser rodada manualmente pelo GitHub Actions.

```yml
workflow_dispatch:
```

### Schedule

A pipeline também roda de forma agendada,todo dia às 10:00 da manhã no horário do Brasil

```yml
schedule:
  - cron: '0 13 * * *'
```


## Relatório

Durante a execução da pipeline, o resultado dos testes é salvo em um arquivo de relatório.

O relatório fica na pasta:

```txt
reports/
```

Depois a pipeline salva esse relatório como artifact, depois que a pipeline termina, é possível baixar o relatório.

## Evidência

A evidência da execução pode ser vista na aba Actions do GitHub.

A execução deve mostrar a pipeline rodando com sucesso, com os testes passando e com o relatório salvo como artifact.

## Conclusão

Com essa pipeline, o projeto atende os pontos pedidos no trabalho:

* Execução por push.
* Execução manual.
* Execução agendada.
* Testes automatizados.
* Relatório salvo na pipeline.
* README explicando a solução.
