const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { ladoA, ladoB, ladoC } = req.body;

    if (
        !ladoA || !ladoB || !ladoC ||
        typeof ladoA !== 'number' ||
        typeof ladoB !== 'number' ||
        typeof ladoC !== 'number' ||
        ladoA <= 0 || ladoB <= 0 || ladoC <= 0
    ) {
        return res.status(400).json({ error: 'Informe valores válidos e positivos para os lados do triângulo.' });
    }

    let tipoTriangulo = '';

    if (ladoA === ladoB && ladoB === ladoC) {
        tipoTriangulo = 'Equilátero: Todos os lados são iguais.';
    } else if (ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC) {
        tipoTriangulo = 'Escaleno: Todos os lados são diferentes.';
    } else {
        tipoTriangulo = 'Isósceles: Dois lados são iguais.';
    }

    res.json({ tipoTriangulo });
});

module.exports = router;