import React from 'react';

import '../styles/components/boxServices.css';

export default function BoxServices() {
  return (
    <div className="middle">
      
      <div className="content">
        <img src="" alt="" />
        <h1>Pacote 01</h1>
        <p>Este pacote é ideal para quem consome pouco e precisa controlar seu consumo.</p>
        <h2>100 kWz</h2>
        <button>R$ 55,00</button>
      </div>


      <div className="content">
        <img src="" alt="" />
        <h1>Pacote 02</h1>
        <p>O pacote de 130 kWz é ideal para quem tem uma utilização moderada de consumo. Com ele, você tem mais energia para o seu dia.</p>      <h2>130 kWz</h2>
        <button>R$ 71,50</button>
      </div>

      
      <div className="content">
        <img src="" alt="" />
        <h1>Pacote 03</h1>
        <p>Os pacotes são personalizados de acordo como seu perfil de utilização com base nos 03 últimos meses.</p>
        <h2>150 kWz</h2>
        <button>R$ 82,50</button>
      </div>


      <div className="content">
        <img src="" alt="" />
        <h1>Pacote 04</h1>
        <p>Os pacotes são personalizados de acordo como seu perfil de utilização com base nos 03 últimos meses.</p>
        <h2>170 kWz</h2>
        <button>R$ 93,50</button>
      </div>
    </div>
  );
}