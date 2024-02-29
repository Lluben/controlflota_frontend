import React, { useState, useEffect } from "react";
import axios from "axios";

const VentaLista = () => {
  const [ventas, setVentas] = useState([]);

  useEffect(() => {
    getVentas();
  }, []);

  const getVentas = async () => {
    const response = await axios.get('http://localhost:5000/api/ventas');
    setVentas(response.data);
  };

  const deleteVenta = async (ventaId) => {
    await axios.delete(`http://localhost:5000/producto/${ventaId}`);
    getVentas();
  };
  return (
    <div>
      <h1 className="title">Consumo</h1>
      <h2 className="subtitle">Ultimos consumos</h2>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Documento</th>
            <th>Serie</th>
            <th>Numero</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
        {ventas.map((ventas, index) => (
            <tr key={index}>
              <td>{ventas.empresaId}</td>
              <td>{ventas.CodDoc}</td>
              <td>{ventas.NroSerie}</td>
              <td>{ventas.NroDoc}</td>
              <td>{ventas.Total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VentaLista;
