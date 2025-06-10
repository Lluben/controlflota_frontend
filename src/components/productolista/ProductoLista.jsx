import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const ProductoLista = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getProductos();
  }, []);

  const getProductos = async () => {
    const response = await axios.get('http://localhost:5000/api/productos');
    setProductos(response.data);
  };

  const deleteProducto = async (productId) => {
    await axios.delete(`http://localhost:5000/producto/${productId}`);
    getProductos();
  };
  return (
    <div>
      <h1 className="title">Productos</h1>
      <h2 className="subtitle">Lista de Productos</h2>
      <Link to="/productos/add" className="button is-primary mb-2">
        Crear producto
      </Link>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>Id</th>
            <th>Producto Nombre</th>
            <th>Precio</th>
            <th>Empresa</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
        {productos.map((product, index) => (
            <tr key={index}>
              <td>{product.productoId}</td>
              <td>{product.Nombre}</td>
              <td>{product.Precio}</td>
              <td>{product.empresa.Nombre}</td>
              <td>
                <Link
                  to={`/productos/edit/${product.productoId}`}
                  className="button is-small is-info"
                >
                  Editar
                </Link>
                <button
                  onClick={() => deleteProducto(product.productoId)}
                  className="button is-small is-danger"
                >
                  Eliminar
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductoLista;
