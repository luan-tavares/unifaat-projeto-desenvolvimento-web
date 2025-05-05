import fs from 'fs'
import path from 'path'

export function upload(req, res) {
    const contentType = req.headers['content-type']

    if (!contentType || !contentType.startsWith('multipart/form-data')) {
        return res.status(400).send('Formato inválido.')
    }

    const boundary = '--' + contentType.split('boundary=')[1]
    const chunks = []

    req.on('data', chunk => chunks.push(chunk))
    req.on('end', () => {
        const buffer = Buffer.concat(chunks)
        const parts = buffer.toString().split(boundary).filter(p => p.includes('Content-Disposition'))

        const filePart = parts.find(p => p.includes('filename='))

        if (!filePart) {
            return res.status(400).send('Nenhum arquivo enviado.')
        }

        // Extrai nome do arquivo
        const match = /filename="(.+?)"/.exec(filePart)
        const filename = match?.[1] || 'arquivo.dat'

        // Pega o conteúdo após dois \r\n\r\n
        const start = filePart.indexOf('\r\n\r\n') + 4
        const end = filePart.lastIndexOf('\r\n')
        const fileContent = filePart.slice(start, end)

        // Salva o arquivo
        const storageDir = path.join('aula-09', 'public', 'storage')
        fs.mkdirSync(storageDir, { recursive: true })

        const filePath = path.join(storageDir, filename)
        fs.writeFileSync(filePath, fileContent, 'binary')

        res.send('Upload concluído sem multer!')
    })
}