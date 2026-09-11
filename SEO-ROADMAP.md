# Plano de SEO — Vistoria de Imóveis JP

## Objetivo

Ganhar visibilidade orgânica para buscas de alta intenção em João Pessoa e região, transformando essas visitas em pedidos de orçamento pelo WhatsApp.

## Status da implementação

### P0 implementado no código

- Metadados da home, URL canônica, Open Graph e Twitter Cards.
- Imagem social gerada em `/opengraph-image`.
- Sitemap em `/sitemap.xml` e regras de rastreamento em `/robots.txt`.
- Dados estruturados de negócio local, com telefone, horário, área atendida e Instagram.
- URL canônica centralizada em `https://vistoriaimoveisjp.com.br` (`lib/site.ts`).

### P0 a validar depois do deploy

- Cadastrar o domínio no Google Search Console e enviar o sitemap.
- Validar os dados estruturados e o preview social na URL de produção.

## Como priorizar

| Prioridade | O que resolve | Critério de conclusão |
| --- | --- | --- |
| P0 | Descoberta e entendimento básico pelo Google | Sitemap, robots, canonical e dados do negócio publicados e validados |
| P1 | Captura de buscas que já indicam intenção de contratar | Páginas de serviços publicadas, distintas e interligadas |
| P1 | Presença no mapa e confiança local | Perfil da Empresa no Google completo, consistente e com rotina de avaliações |
| P2 | Autoridade técnica e conversão | Página institucional e provas técnicas verificáveis publicadas |
| P2 | Tráfego de descoberta e autoridade temática | Calendário de conteúdos e primeiros artigos/cases publicados |
| P3 | Melhor experiência e visibilidade em imagens | Imagens otimizadas e indicadores acompanhados |

---

## P0 — Base técnica

### 1. Metadados, URL canônica e compartilhamento social

**Ação**

- Configurar `metadataBase` com o domínio definitivo.
- Definir canonical da home e de cada página futura.
- Criar padrão de títulos e descrições por página.
- Adicionar Open Graph e Twitter Cards, incluindo imagem de compartilhamento.

**Sugestão para a home**

- Título: `Vistoria de Imóvel Novo em João Pessoa | Recebimento de Chaves`
- Descrição: `Vistoria técnica de imóveis novos, pré-compra e pós-obra em João Pessoa e região. Registro fotográfico e relatório técnico. Solicite seu orçamento.`

**Critério de conclusão**

- Conferir title, description, canonical e preview social de uma URL publicada.

### 2. Sitemap e robots

**Ação**

- Criar `app/sitemap.ts` com as URLs que devem aparecer no Google.
- Criar `app/robots.ts`, liberando o rastreamento e informando o sitemap.
- Cadastrar o domínio no Google Search Console e enviar o sitemap.

**Importante**

- Incluir no sitemap apenas páginas finais, úteis e indexáveis.
- Uma URL no sitemap facilita descoberta, mas não garante ranqueamento.

**Critério de conclusão**

- `/sitemap.xml` e `/robots.txt` respondem corretamente em produção.
- Sitemap enviado ao Search Console, sem erros de leitura.

### 3. Dados estruturados

**Ação**

- Adicionar JSON-LD do tipo `ProfessionalService`/`LocalBusiness`.
- Nas páginas de serviço, adicionar o tipo `Service`.
- Manter telefone, nome, horário, área atendida, site e Instagram consistentes.

**Usar somente se forem verdadeiros e públicos**

- Endereço comercial, CNPJ, responsável técnico, CREA, avaliações e faixa de preço.

**Evitar**

- Inserir notas, avaliações ou credenciais não demonstradas no site.
- Usar marcação de FAQ esperando necessariamente rich results: ela organiza o conteúdo, mas a exibição é decisão do Google.

**Critério de conclusão**

- Validar o JSON-LD no Rich Results Test e corrigir erros críticos.

---

## P1 — Páginas que capturam demanda

Hoje o site tem uma única página. A prioridade é oferecer uma página forte para cada intenção de contratação, sem duplicar conteúdo.

### 4. Páginas de serviços

Publicar inicialmente:

1. `/vistoria-imovel-novo-joao-pessoa`
2. `/vistoria-recebimento-chaves`
3. `/vistoria-pre-compra-imovel`
4. `/vistoria-pos-obra`
5. `/vistoria-apartamento-joao-pessoa`

### Estrutura mínima de cada página

1. H1 com serviço, cidade e benefício real.
2. Explicação de quando o serviço é indicado.
3. O que é avaliado — sempre respeitando o escopo verdadeiro.
4. Como funciona: briefing, agendamento, vistoria e entrega.
5. O que o cliente recebe e em qual prazo, se houver um prazo definido.
6. Limites do serviço: condições aparentes, elementos acessíveis e o que não substitui perícia/ensaio.
7. Fotos, caso real ou exemplo de relatório autorizado/anonimizado.
8. Perguntas frequentes específicas.
9. CTA para WhatsApp.

### Regras de qualidade

- Escrever para a necessidade da pessoa, não para repetir palavras-chave.
- Usar fotos próprias e exemplos reais quando autorizados.
- Não criar páginas de bairros com o mesmo texto trocando somente o nome da região. Criar uma página local somente quando houver caso, contexto e utilidade próprios.
- Interligar as páginas de serviço entre si e com artigos relevantes.

**Critério de conclusão**

- Cada página tem conteúdo exclusivo, meta title/description próprios, um H1, CTA e links internos relevantes.

---

## P1 — SEO local e reputação

### 5. Perfil da Empresa no Google

**Ação**

- Criar ou reivindicar o Perfil da Empresa no Google.
- Confirmar categoria principal adequada, telefone, site, horário, área atendida e Instagram.
- Subir fotos reais de campo, equipe, instrumentos e relatórios sem dados sensíveis.
- Publicar atualizações curtas sobre serviços, orientações e trabalhos concluídos.

### 6. Rotina de avaliações

**Ação**

- Após uma experiência concluída, pedir uma avaliação honesta por mensagem.
- Responder todas as avaliações, sem copiar e colar respostas genéricas.
- Não oferecer desconto, brinde ou qualquer recompensa em troca de avaliação.

**Mensagem-base**

> Olá, [nome]. Obrigado pela confiança na vistoria do seu imóvel. Se a experiência foi positiva, sua avaliação no Google ajuda outras pessoas em João Pessoa a encontrarem um atendimento técnico e cuidadoso. [link de avaliação]

### 7. Consistência e referências locais

**Ação**

- Garantir que nome, telefone, URL e horário sejam iguais no site, Google, Instagram e perfis parceiros.
- Buscar referências legítimas em imobiliárias, arquitetos, administradoras de condomínio e parceiros locais.
- Priorizar menções editoriais, cases e parcerias reais; não comprar links ou cadastros de baixa qualidade em massa.

**Critério de conclusão**

- Dados consistentes em todos os canais prioritários e processo mensal de solicitação/resposta de avaliações definido.

---

## P2 — Autoridade e confiança

### 8. Página “Sobre” ou “Quem realiza a vistoria”

**Incluir**

- Quem realiza o serviço e sua formação/experiência verificáveis.
- Registro profissional, quando aplicável e autorizado.
- Metodologia e itens documentados.
- Equipamentos efetivamente utilizados.
- Amostra anonimizada do relatório, se houver autorização.
- Limites do serviço e diferenciais objetivos.

**Critério de conclusão**

- Todas as afirmações técnicas e credenciais podem ser comprovadas pelo negócio.

### 9. Casos reais

Criar uma área de “Trabalhos realizados” com casos curtos. Cada caso deve informar, quando houver permissão:

- Tipo de imóvel e localidade ampla, como “apartamento novo em Manaíra”.
- Situação do cliente.
- Escopo realizado.
- Resultado documentado, sem prometer o que não ocorreu.
- Fotos sem expor dados do imóvel ou de clientes.

**Critério de conclusão**

- Publicar dois casos distintos, com texto, imagens e contexto próprios.

---

## P2 — Conteúdo para tráfego orgânico

### 10. Calendário editorial inicial

Publicar um a dois conteúdos úteis por mês, revisados por quem domina o serviço.

| Tema | Intenção | Página a fortalecer |
| --- | --- | --- |
| Checklist para receber apartamento novo em João Pessoa | Preparação para entrega | Vistoria de imóvel novo |
| O que conferir antes de assinar o recebimento das chaves | Dúvida prática | Vistoria de recebimento |
| Vistoria, inspeção predial e perícia: qual a diferença? | Comparação | Serviços / Sobre |
| O que fazer ao encontrar infiltração na entrega do imóvel? | Solução de problema | Vistoria de imóvel novo |
| Vistoria pré-compra: o que pode ser identificado? | Decisão de compra | Vistoria pré-compra |
| Como se preparar para a vistoria de um imóvel novo | Preparação | Vistoria de recebimento |

### Regras editoriais

- Responder a dúvida por completo, com linguagem simples e técnica quando necessário.
- Assinar/revisar conteúdos por profissional responsável quando houver orientação técnica.
- Referenciar fontes oficiais quando o tema abordar normas, direitos ou responsabilidades.
- Inserir links para o serviço relacionado apenas quando forem úteis ao leitor.

**Critério de conclusão**

- Os três primeiros conteúdos estão publicados, com links internos e CTA contextual.

---

## P3 — Imagens, desempenho e acessibilidade

### 11. Otimização das fotos

**Ação**

- Migrar as imagens para `next/image` com dimensões e `sizes` adequados.
- Manter a imagem principal do hero como prioritária e atrasar imagens abaixo da dobra.
- Renomear novos arquivos com nomes descritivos, por exemplo: `vistoria-recebimento-apartamento-joao-pessoa.jpeg`.
- Escrever `alt` específico e descritivo, sem repetir palavras-chave artificialmente.
- Criar uma imagem representativa para `og:image`.

**Critério de conclusão**

- Verificar mobile e desktop no PageSpeed Insights após publicação, sem regressão visual ou de carregamento.

### 12. Indicadores para acompanhar mensalmente

| Indicador | Fonte | Sinal esperado |
| --- | --- | --- |
| Impressões e cliques por consulta | Google Search Console | Crescimento em termos de serviço + João Pessoa |
| Posição média | Google Search Console | Evolução das páginas prioritárias |
| Páginas indexadas e problemas de rastreamento | Search Console | Sem bloqueios ou páginas importantes excluídas |
| Core Web Vitals | Search Console / PageSpeed Insights | LCP até 2,5 s, INP abaixo de 200 ms e CLS abaixo de 0,1 como referência |
| Pedidos no WhatsApp | Analytics ou acompanhamento interno | Aumento por página e origem orgânica |
| Avaliações e nota no Google | Perfil da Empresa | Crescimento contínuo e respostas em dia |

---

## Ordem recomendada de implementação

1. Definir domínio definitivo, dados públicos e informações técnicas que podem ser usadas.
2. Implementar metadados, canonical, sitemap, robots e JSON-LD.
3. Criar as duas páginas de maior prioridade: imóvel novo e recebimento de chaves.
4. Configurar/otimizar o Perfil da Empresa no Google e a rotina de avaliações.
5. Publicar página “Sobre” e dois casos reais.
6. Criar as demais páginas de serviço.
7. Publicar os primeiros três conteúdos do calendário.
8. Otimizar imagens e acompanhar Search Console mensalmente.

## Referências

- [Google Search Essentials](https://developers.google.com/search/docs/essentials)
- [Dados estruturados para negócios locais](https://developers.google.com/search/docs/appearance/structured-data/local-business)
- [Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap)
- [SEO para imagens](https://developers.google.com/search/docs/appearance/google-images)
- [Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals)
