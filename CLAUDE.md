# Prompt de Modernizacao do `uprobotics-web-nextjs`

Voce e um engenheiro senior de frontend e infraestrutura de desenvolvimento. Sua tarefa e modernizar o projeto `./uprobotics-web-nextjs` para uma stack mais atual, estavel e simples de executar localmente, reduzindo atrito de setup e removendo configuracoes legadas desnecessarias.

## Objetivo principal

Entregar um setup em que qualquer pessoa consiga preparar e executar o projeto com o menor numero possivel de etapas, usando apenas:

```bash
yarn install
yarn dev
```

## Contexto atual do projeto

Considere o estado atual como ponto de partida:

- O projeto usa `next@9.5.2`.
- Ha desalinhamento entre `react` e `react-dom`.
- Os scripts dependem de `NODE_OPTIONS=--openssl-legacy-provider`.
- O campo `engines.node` esta fixado em `24.x`, o que hoje gera incompatibilidade local.
- Existem dependencias e configuracoes antigas, como `@zeit/next-css` e `next-images`.
- O repositorio possui sinais de uso misto de gerenciador de pacotes, com `yarn.lock` e `package-lock.json`.

## Missao

Atualize o projeto para tecnologias modernas e compativeis entre si, priorizando:

- simplicidade de instalacao e execucao;
- compatibilidade local previsivel;
- reducao de gambiarra e legado;
- manutencao futura mais facil;
- minimo impacto visual e funcional no comportamento atual da aplicacao.

## Diretrizes tecnicas

- Priorize uma versao LTS estavel de Node.js, preferencialmente `22.x`, salvo justificativa tecnica forte para outra escolha.
- Atualize `Next.js`, `React`, `React DOM`, `TypeScript`, `ESLint` e bibliotecas essenciais para versoes estaveis e compativeis entre si.
- Remova workarounds obsoletos, especialmente `--openssl-legacy-provider`.
- Substitua ou elimine plugins/dependencias deprecated quando o ecossistema atual do Next.js ja oferecer suporte nativo.
- Simplifique scripts e configuracoes para que o fluxo padrao seja realmente `yarn install` e `yarn dev`.
- Garanta que os comandos funcionem bem em ambiente local, inclusive no Windows, evitando dependencia de sintaxe shell fragil.
- Padronize o projeto em `yarn` como gerenciador principal e resolva a duplicidade de lockfiles.
- Preserve o comportamento visual e funcional sempre que possivel; refatore apenas o necessario para compatibilidade e limpeza tecnica.
- Se a migracao para a ultima major disponivel exigir refatoracoes desproporcionais, escolha a versao estavel mais moderna que entregue ganho real com risco controlado e documente a decisao.

## O que voce deve entregar

- `package.json` modernizado e coerente.
- Scripts simplificados para desenvolvimento e build.
- Dependencias principais atualizadas e alinhadas.
- Remocao de configuracoes e pacotes legados desnecessarios.
- Definicao clara da versao de Node recomendada para o projeto.
- Ajustes no codigo necessarios para compatibilidade com a stack escolhida.
- Documentacao minima e objetiva para setup local, se necessario.
- Um resumo final com o que foi alterado, riscos residuais e proximos passos.

## Criterios de aceite

Considere a tarefa concluida somente se:

- `yarn install` funcionar sem conflito de engine injustificado;
- `yarn dev` iniciar o projeto sem exigir flags legadas;
- `yarn build` concluir com sucesso;
- `react` e `react-dom` estiverem corretamente alinhados;
- o projeto nao depender mais de pacotes obsoletos sem motivo claro;
- o setup final estiver mais simples e previsivel do que o setup atual.

## Forma de trabalho esperada

1. Audite o estado atual do projeto e identifique os pontos que impedem uma experiencia simples de setup.
2. Execute as mudancas diretamente no codigo e nas configuracoes do projeto.
3. Corrija os impactos da migracao com o menor nivel de invasao possivel.
4. Valide localmente com `yarn install`, `yarn dev` e `yarn build`.
5. Entregue um resumo objetivo das alteracoes feitas, dos trade-offs e do que ainda pode ser melhorado.

## Restricao importante

Nao entregue apenas recomendacoes, plano teorico ou lista de sugestoes. Execute a modernizacao de ponta a ponta, valide o resultado e deixe o projeto pronto para rodar localmente com o fluxo definido.
