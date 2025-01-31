const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const { salario, filhos } = req.body;
  let salariofinal;

  if (salario <= 2000) {
    salariofinal = salario + (filhos * 45);
  } else {
    salariofinal = salario;
  }

  res.json({ salariofinal: salariofinal.toFixed(2) });
});

module.exports = router;