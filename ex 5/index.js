const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { numeros } = req.body;

    if (!Array.isArray(numeros) || numeros.length === 0) {
        return res.status(400).json({ error: 'Informe um array de números válido.' });
    }

    if (!numeros.every(num => typeof num === 'number')) {
        return res.status(400).json({ error: 'O array deve conter apenas números.' });
    }

    const numerosOrdenados = [...numeros].sort((a, b) => a - b);

    res.json({ numerosOrdenados });
});

module.exports = router;