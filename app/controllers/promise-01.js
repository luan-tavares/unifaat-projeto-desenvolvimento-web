export default async (req, resp) => {
    const response = await new Promise((resolve, reject) => {
        const name = req.query.name || 'Visitante';
        setTimeout(() => {
            resolve(`Oi ${name}, resposta recebida após 2 segundos...`);
        }, 0); // 2 segundos de delay
    });
    resp.send(response);
}