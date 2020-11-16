import React from 'react';
import { BsLightningFill } from 'react-icons/bs';
import { GiLightningArc, GiLightningTree, GiLightningDissipation } from 'react-icons/gi';

import { logoCpfl } from '../images/cpfl-logo.svg'


import '../styles/components/sidebar.css';
import '../styles/pages/packages.css';


function Packages() {
  return (
    <div className="header">
      <h2>
        Escolha a melhor oferta para você. 
      </h2>

      <spam>
        Lembre-se que temos uma sugestão de pacote para você. 
        <br />
        Acesse seu histórico para visualizar a melhor opção.
      </spam>

     

      <div className="middle">
        <div className="content">
          <BsLightningFill size={32} color="#F36D21" />
          <h1>Pacote 01</h1>
          <p>Este pacote é ideal para quem consome pouco e precisa controlar seu consumo.</p>
          <h2>100 kWz</h2>
          <button>R$ 55,00</button>
        </div>

        <div className="content">
          <GiLightningArc size={32} color="#F36D21" />
          <h1>Pacote 02</h1>
          <p>O pacote de 130 kWz é ideal para quem tem uma utilização moderada de consumo. Com ele, você tem mais energia para o seu dia.</p>
          <h2>130 kWz</h2>
          <button>R$ 71,50</button>
        </div>

        <div className="content">
          <GiLightningTree size={32} color="#F36D21" />
          <h1>Pacote 03</h1>
          <p>Os pacotes são personalizados de acordo como seu perfil de utilização com base nos 03 últimos meses.</p>
          <h2>150 kWz</h2>
          <button>R$ 82,50</button>
        </div>

        <div className="content">
          <GiLightningDissipation size={32} color="#F36D21" />
          <h1>Pacote 04</h1>
          <p>Os pacotes são personalizados de acordo como seu perfil de utilização com base nos 03 últimos meses.</p>
          <h2>170 kWz</h2>
          <button>R$ 93,50</button>
        </div>
      </div>
    </div>
  );
}

export default Packages;