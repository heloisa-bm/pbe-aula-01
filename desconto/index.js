const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const { preco } = req.body;
    let desconto = 0;

    if (preco > 1000) {
        desconto = preco * 0.08;
    }

    let precoComDesconto = preco - desconto;

    res.json({ preco, desconto, precoComDesconto });
});

module.exports = router;