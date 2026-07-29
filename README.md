# Olá Bem Vindo ao Projeto do Pizza Pizza

### Para começar vamos falar um pouco do projeto

Aplicação web para pizzaria.

O projeto permite listar pizzas e simula o consumo de API durante o desenvolvimento, onde é possível adicionar os produtos ao carrinho e gerenciá-los.

### Como ele está estruturado

O projeto utiliza Next.Js, Typescript e componentes React. Além de contar com algumas bibliotecas e frameworks como:

- swiper
- yup
- toastify
- Hook Form
- SendGrid
- Json-Server
- dotenv
- Prismic

A hospedagem foi feita na plataforma Vercel e os dados fictícios do cardápio estão sendo mantidos em formato JSON na própria aplicação, ou seja, banco de dados local (_db.json_).

## Como testar o projeto

```bash

## Para testar sem o Json-Server basta executar:

npm run next
# ou
yarn next
# ou
pnpm next
# ou
bun next

```

Abra o endereço [http://localhost:3000](http://localhost:3000) em seu navegador.

```bash
# Para testar utilizando o Json-Server localmente, serão necessárias algumas alterações no arquivo src\app\Functions\Functions_request.tsx, para que as requisições sejam direcionadas para o servidor Json.

# Depois de realizada as alterações execute:
npm run dev
# ou
yarn dev
# ou
pnpm dev
# ou
bun dev
```

Abra o endereço [http://localhost:3000](http://localhost:3000) em seu navegador.
