import React from 'react';

import '../styles/pages/historical.css';

const handleSign = alert("Pacote assinado com sucesso.");

function Historical() {
  return (
    <div className="invoice-container">
      <div className="invoice-details">
        <h1>Detalhes da Conta</h1>
        <p>
          Aqui temos uma análise do seu perfil de ustilização nos últimos 03 meses.<br />
          Veja abaixo a sugestão de pacote pré pago ideal para o seu perfil.
        </p>

        <input
          placeholder="Número de Instalação"
        />
        <label>Jessica Silva</label>
        <spam>
          Avenida Brasil, 1523 <br />
          04546-001 <br />
          São Paulo - SP
        </spam>

        <div className="expenditure">
          <h2>Média de consumo nos últimos 3 meses:</h2>
          
          <div className="details">
            <label>kWh/Mês</label>
            <label>R$/Mês</label>
            <p>145</p>
            <p>99,37</p>
          </div>
        </div>

        <div className="advice">
          <h2>Pacote Sugerido</h2>
          
          <div className="details">
            <label>kWh/Mês</label>
            <label>R$/Mês</label>
            <p>150</p>
            <p>82,50</p>
          </div>
        </div>
      </div>
    
    <button
      className="button"
      onClick={handleSign}
    >
      Assinar
    </button>
    </div>
  );
}

export default Historical;