import React from 'react';
import '../../../assets/scss/layout/_compraexitosa.scss'; 
import LeftMenu from '../LeftMenu/LeftMenu';

const CompraExitosa = () => {
  return (
    <div>
    <div>
        <LeftMenu />
      </div>
    <div className="compra-exitosa">
      <h2>¡Pago exitoso!</h2>
      <p>¡Su pago fue procesado con exito!.</p>
    </div>
    </div>
  );
}

export default CompraExitosa;