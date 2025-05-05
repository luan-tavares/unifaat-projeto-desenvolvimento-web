import fs from 'fs';
import multer from 'multer';
import path from 'path';

export default (function () {

    const storageDir = path.join('aula-09', 'public', 'storage');

    fs.mkdirSync(storageDir, { recursive: true });

    return {

        // Action para fazer upload
        'upload': (req, res) => {

            /** Insira o codigo aqui */


        },

        // Action para trazer os arquivos
        'fetch': (req, res) => {

            /** Insira o codigo aqui */

            res.json([
                {
                    name: "teste.txt",
                    url: `/aula-09-public/storage/teste.txt`
                }
            ])
        }

    }

})();
