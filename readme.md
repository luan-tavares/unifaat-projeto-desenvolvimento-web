# Projeto Desenvolvimento Web

## Instalação e Execução

Siga os passos abaixo para rodar o projeto localmente ou via Docker:

---

## 🧪 Modo 1: Ambiente Local (Node.js direto)

1. Clonar o repositório:

   ```sh
   git clone https://github.com/luan-tavares/unifaat-projeto-desenvolvimento-web
   ```

2. Entrar na pasta do projeto:

   ```sh
   cd unifaat-projeto-desenvolvimento-web
   ```

3. Instalar as dependências:

   ```sh
   npm install
   ```

4. Criar o arquivo `.env` na raiz do projeto e adicionar:

   ```ini
   PORT=8080
   ```

5. Iniciar o servidor:

   ```sh
   npm start
   ```

O servidor estará disponível em: [http://localhost:8080](http://localhost:8080)

---

## 🐳 Modo 2: Docker em ambiente de desenvolvimento com NGINX (Docker Compose)

1. Clonar o repositório:

   ```sh
   git clone https://github.com/luan-tavares/unifaat-projeto-desenvolvimento-web
   ```

2. Entrar na pasta do projeto:

   ```sh
   cd unifaat-projeto-desenvolvimento-web
   ```

3. Subir a aplicação com Docker Compose:

   ```sh
   docker compose up
   ```

   > ou, dependendo da versão do Docker:
   >
   > - Usuários com versões **mais antigas** ou com Docker Compose instalado separadamente usam:

   ```sh
   docker-compose up
   ```

   > - Usuários com **Docker moderno** devem usar:

   ```sh
   docker compose up
   ```

O servidor estará disponível em: [http://localhost:8080](http://localhost:8080)

### Diferenças em relação ao ambiente local:

| Característica     | Ambiente Local | Docker Compose (Dev)  |
| ------------------ | -------------- | --------------------- |
| Node.js na máquina | ✅ Necessário   | ❌ Não precisa         |
| Volume com código  | ❌ Não          | ✅ Sim (hot reload)    |
| Isolamento         | ❌ Não          | ✅ Sim (containers)    |
| Config via `.env`  | ✅ Sim          | ✅ Sim (env repassado) |

---

## 🚀 Modo 3: Docker (Produção)

1. Clonar o repositório:

   ```sh
   git clone https://github.com/luan-tavares/unifaat-projeto-desenvolvimento-web
   ```

2. Entrar na pasta do projeto:

   ```sh
   cd unifaat-projeto-desenvolvimento-web
   ```

3. Buildar a imagem de produção:

   ```sh
   docker build -f docker/node22-web/Dockerfile.prod -t devweb-app:prod .
   ```

4. Rodar o container expondo a porta:

   ```sh
   docker run --rm -p 3333:3333 -e PORT=3333 devweb-app:prod
   ```

O servidor estará disponível em: [http://localhost:3333](http://localhost:3333)

> 📌 A porta do host (3333) **é a mesma usada dentro do container** graças à variável `PORT=3333`, garantindo que o log do backend mostre corretamente a porta esperada.

---

## 📄 Observações

- Em produção, a imagem é imutável: o código e dependências já estão empacotados.
- Utilize `.dockerignore` para ignorar arquivos como `node_modules`, `.env`, `logs`, entre outros.
- Em ambientes como ECS ou Fargate, a imagem de produção pode ser usada diretamente sem alterações adicionais.

