# Blog Guilherme Soares

Este projeto é um **blog pessoal** desenvolvido para compartilhar conteúdos técnicos sobre programação e desenvolvimento web. Utilizando a ferramenta **Sculpin**, o site é gerado estaticamente para performance otimizada.

## Por que foi criado?

O blog foi criado com o objetivo de compartilhar artigos sobre desenvolvimento, novas tecnologias e boas práticas. A escolha do Sculpin se deu pela sua simplicidade e capacidade de gerar sites estáticos rápidos e escaláveis.

## Como Iniciar

### Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas:

- **PHP** (versão 7.4 ou superior)
- **Composer** (gerenciador de dependências PHP)
- **Node.js** e **Yarn** (para pacotes front-end)
- **Git** (para versionamento de código)

### Passo 1: Clonar o Repositório

Clone o repositório para seu ambiente local:

```bash
git clone https://github.com/GuilhermeSoares009/blog-guilherme-soares.dev.git
cd blog-guilherme-soares.dev
```

### Passo 2: Clonar o Repositório
Instale as dependências PHP com Composer:

```bash
composer install
```

### Passo 3: Instalar Dependências do Front-End
Instale as dependências do front-end com Yarn:

```bash
yarn install
```

### Passo 4: Gerar o Site Estático
Gere o site com o Sculpin:

```bash
php vendor/bin/sculpin generate --env=prod
```

### Passo 5: Servir o Site Localmente
Após gerar os arquivos estáticos, rode o servidor PHP local:

```bash
php -S localhost:8000 -t output_prod
```
Acesse o site em http://localhost:8000.


### Passo 6: (Opcional) Compilar os Arquivos Front-End
Se você quiser compilar os arquivos de CSS e JS, execute:

```bash
yarn run dev
```
Acesse o site em http://localhost:8000.


### Contribuindo
Sinta-se à vontade para contribuir com melhorias ou sugestões. Para isso, faça um fork e envie um pull request.


### Licença
Este projeto é licenciado sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.

Agora o **README** completo está em **formato Markdown** adequado para ser copiado e colado de uma vez só, com todos os passos corretamente formatados.



