const express = require('express');
const jwt = require('jsonwebtoken');
const authenticate = require('./authMiddleware');
const router = express.Router();

const USERS = [
  { username: 'admin@admin.com', password: '1234', role: 'admin@admin.com' },
  { username: 'user@user.com', password: '1234', role: 'user@user.com' },
];

// Rota de login
router.post('/auth/login', (req, res) => {
  console.log('Dados recebidos:', req.body);

  const { username, password } = req.body;
  const user = USERS.find(u => u.username === username && u.password === password);

  if (!user) {
    console.log('Erro: Credenciais inválidas')
    return res.status(401).json({ error: 'Credenciais inválidas' });
  }

  const token = jwt.sign({ username: user.username, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });

  res.json({ token });
});

// Rota para as operações
router.post('/calculate', authenticate, (req, res) => {
  const { value1, value2, operation } = req.body;

  if (typeof value1 !== 'number' || typeof value2 !== 'number') {
    return res.status(400).json({ error: 'Valores inválidos' });
  }

  let result;
  switch (operation) {
    case 'soma':
      result = value1 + value2;
      break;
    case 'subtracao':
      result = value1 - value2;
      break;
    case 'multiplicacao':
      result = value1 * value2;
      break;
    case 'divisao':
      if (value2 === 0) {
        console.log('Erro: Divisão por zero') 
        return res.status(400).json({ error: 'Divisão por zero' });
    }
      result = value1 / value2;
      break;
    default:
      console.log("Erro: Operação inválida")
      return res.status(400).json({ error: 'Operação inválida' });
  }
  console.log(`Operação: ${operation} de ${value1} com ${value2} com o Resultado de ${result}`);
  res.json({ result });
});

module.exports = router;
