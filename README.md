# Projeto desafio PX

Este projeto foi desenvolvido com NextJs + ReactJs e hospedado na Vercel com o seguinte link [DesafioPX](https://desafio-px.vercel.app/).

# Compilando o programa

```bash
yarn # compilar
yarn dev # iniciar versao de desenvolvimento
```

# Progresso e atividades

- [x] Para rodar o projeto utilizei o Linux no WSL2
- [X] Criei o projeto com `yarn create-next-app`
- [X] Construi a interface com css puro e sem o uso de bibliotecas prontas para exercitar a aprendizagem.
- [X] Adaptei todo o projeto CSS para SASS pois acredito que esse framework melhora a organização visual do código.
- [X] Outra biblioteca que utilizei foi a react-modal para construir e gerenciar os estados do modal.
- [X] Tive atenção na hora de construir o código e consertar bugs de performace.
- [X] Header: Utilizei a biblioteca NumberFormat para gerar corretamente os valores em Real que são apresentados no saldo.
- [X] Modal: No campo de adicionar saldo utilizei novamente NumberFormat como input para o usuário visualizar o valor digitado em reais. 
- [X] Modal: A segunda tela do modal, o botão de copiar também copia o conteúdo da caixa de texto para o ctrl+v
- [X] Modal: Utilizei o Hook useEffect para resetar o estado do modal para a primeira tela sempre que o modal é fechado.
- [X] Tabela: Para alimentar a tabela achei interessante puxar os dados via API para criar uma complexidade backend no projeto.
- [X] Tabela: os dados são recebidos via Axios puxando a api dos times de basquete NBA do site Balldontlie.

# Modificações adicionais

- [X] Gerar um QR Code verdadeiro com biblioteca tercerizada + custom hook.
- [X] Usar o Hook useContext para gerar os dados da tabela fora do componente.
- [X] Usar o Hook useReducer para criar ações na tabela
- [X] Atribuir a ação aos botões de avançar e voltar as páginas da tabela.
- [X] Aplicar uma tag para a coluna da região da tabela.
- [X] Ordenar tabela para cada coluna de dados.
- [X] Inverter tabela para cada coluna de dados.
- [ ] Incrementar saldo adicionado no modal para o saldo disponível.
- [ ] Criar versão mobile e responsiva da interface.
- [ ] Guardar informações em cache no navegador.
- [ ] Filtrar tabela com o botão de pesquisar.
- [ ] Adaptar o projeto para Typescript
