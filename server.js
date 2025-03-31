import express from 'express';
import path from "path";
import chalk from 'chalk';
import dotenv from 'dotenv';

import webRoutes from './routes/web.js';
import constants from './bootstrap/constants.js';

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.static(path.join(constants.DIR, 'public')));

app.use('/', webRoutes);

app.listen(port, () => {
    console.log(chalk.green(`Servidor rodando na porta ${port}`));
});

