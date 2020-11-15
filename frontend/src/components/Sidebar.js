import React from 'react';
import { Link, useHistory } from 'react-router-dom';

import perfilImg from '../images/perfil.png';

import '../styles/components/sidebar.css';

export default function Sidebar(props) {
  const { goBack } = useHistory();
  const {children} = props;
  return (
    <div id="page-sidebar">
      <aside>
        <header>
          <img src={perfilImg} alt="CPFL" />
          <h2>Jessica Silva</h2>
          <nav>
            <ol>
              <li><Link to="#">Home</Link></li>
              <li><Link to="#">Histórico</Link></li>
              <li><Link to="#">Pacotes</Link></li>
              <li><Link to="#">FAQ</Link></li>
            </ol>
          </nav>
        </header>
      </aside>
      {children}
    </div>
  );
}
