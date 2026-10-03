# EF Treinamentos

Landing page responsiva da EF Treinamentos, com catálogo de 12 treinamentos, filtros por categoria e solicitação de orçamento pelo WhatsApp.

Localização: bairro Guarani-Mirim, Massaranduba, Santa Catarina.

## Arquivos

- `dist/index.html`: conteúdo da página.
- `dist/styles.css`: identidade visual e layouts para computador e celular.
- `dist/app.js`: menu móvel, filtros e mensagem de orçamento.
- `.openai/hosting.json`: configuração da hospedagem Sites.

## Executar localmente

Não há instalação de dependências nem etapa de compilação. Com Python instalado, execute na raiz do projeto:

```sh
python -m http.server 4173 --directory dist
```

Abra `http://localhost:4173` no navegador.

Também é possível abrir `dist/index.html` diretamente no navegador.

## Publicação

O conteúdo estático para hospedagem está na pasta `dist`. A página publicada no Sites está em https://ef-treinamentos.willian-ans1.chatgpt.site (acesso conforme as permissões do Sites).

## Contato

- WhatsApp: +55 (47) 99760-1395
- E-mail: evertonforlin@gmail.com

O formulário apenas abre uma mensagem no WhatsApp; os dados não são armazenados pela página.
