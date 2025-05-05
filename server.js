import express from 'express';
import path from "path";
import chalk from 'chalk';

import webRoutes from './routes/web.js';
import constants from './bootstrap/constants.js';
import "./bootstrap/app.js"


/** Iniciar roteador */
const app = express();

/** Inserir um header global */
app.use((req, res, next) => {
    res.setHeader('X-SERVED-BY', 'node');
    next();
});

/** Servir o public estaticamente, tanto para arquivos como para os assets de frontend */
app.use(express.static(path.join(constants.DIR, 'public')));

/** Iniciar as rotas de backend */
app.use('/', webRoutes);

/** Se a rota não for encontrada, 404 neles! */
app.use((req, res) => {
    res.status(404).send('Not found');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(chalk.green(`Servidor rodando na porta ${port}`));
});

