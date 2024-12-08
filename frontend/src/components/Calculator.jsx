import React, { useState } from 'react';
import axios from 'axios';
import './Calculator.css'

const Calculator = () => {
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [operation, setOperation] = useState('');
  const [result, setResult] = useState(null);
  const [error, setError] = useState('');

  const handleCalculate = async () => {
    try {
      const token = localStorage.getItem('token');
      
        // Validando divisão por zero
        if (operation === 'divisao' && parseFloat(value2) === 0) {
            setError('Erro: Divisão por zero não é permitida.');
            setResult(null);
            return;
        }
      // Convertendo os valores para números antes de enviar
      const numValue1 = parseFloat(value1);
      const numValue2 = parseFloat(value2);

      if (isNaN(numValue1) || isNaN(numValue2)) {
        setError('Por favor, insira valores válidos para os cálculos.');
        return;
      }

      console.log('Dados enviados para o backend:', {
        value1: numValue1,
        value2: numValue2,
        operation,
      });

      // Enviando a requisição com os valores numéricos convertidos
      const response = await axios.post(
        'http://localhost:5000/calculate',
        { value1: numValue1, value2: numValue2, operation },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      
      setResult(response.data.result);
      setError('');
    } catch (err) {
      console.error('Erro no cálculo:', err);
      setError('Erro no cálculo ou operação inválida.');
      setResult(null);
    }
  };

  return (
    <div>
      <h2>Calculadora</h2>
      <div>
        <label>Valor 1:</label>
        <input
          type="number"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <div>
        <label>Valor 2:</label>
        <input
          type="number"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
      <div>
        <label>Operação:</label>
        <select value={operation} onChange={(e) => setOperation(e.target.value)}>
          <option value="">Selecione uma operação</option>
          <option value="soma">Soma</option>
          <option value="subtracao">Subtração</option>
          <option value="multiplicacao">Multiplicação</option>
          <option value="divisao">Divisão</option>
        </select>
      </div>
      <button onClick={handleCalculate}>Calcular</button>

      {result !== null && <p>Resultado: {result}</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default Calculator;
