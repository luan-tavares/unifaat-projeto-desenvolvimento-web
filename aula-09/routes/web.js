// routes/todolist.js

import { Router } from 'express';
import express from 'express';
import path from "path";
import { readdir } from 'fs';
import UploadController from '../controllers/UploadController.js';
import constants from '../../bootstrap/constants.js';

const router = Router();

const aula09Path = path.join(constants.DIR, 'aula-09', "public");

router.get('/aula-09-public', (req, res) => {


    readdir(aula09Path, (err, files) => {
        if (err) {
            return res.status(500).send('Erro ao ler o diretório');
        }

        const fileList = files.map(file => {
            return `<li><a href="aula-09-public/${file}">${file}</a></li>`;
        }).join('');

        res.send(`
            <html>
                <head><title>Lista de Arquivos</title></head>
                <body>
                    <h2>Lista de Arquivos</h2>
                    <ul>${fileList}</ul>
                </body>
            </html>
        `);
    });
});

router.use('/aula-09-public', express.static(aula09Path));

// Rota GET para listar todos
router.post('/aula-09/upload', UploadController.upload);

router.get('/aula-09/fetch', UploadController.fetch);

export default router;