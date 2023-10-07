import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const URI = 'http://localhost:8000/blogs/';

const CompShowBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    const res = await axios.get(URI);
    setBlogs(res.data);
  }

  const deleteBlog = async (id) => {
    await axios.delete(`${URI}${id}`);
    getBlogs();
  }

  return (
    <div className="container mt-5 bg-light p-4 rounded">
      <h1 className="text-center text-primary">AGENDAR CITA</h1>
      <div className="row">
        <Link to="/create" className="btn btn-primary mb-3">Añadir Cita</Link>
        <div className="col">
          <table className="table table-striped table-bordered">
            <thead className="thead-light">
              <tr>
                <th>Placa</th>
                <th>Modelo</th>
                <th>Tipo de Vehículo</th>
                <th>Marca</th>
                <th>Fecha</th>
                <th>Hora</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {blogs.map((blog, index) => (
                <tr key={blog.id} className={index % 2 === 0 ? 'bg-light' : 'bg-white'}>
                  <td>{blog.placa}</td>
                  <td>{blog.modelo}</td>
                  <td>{blog.tipoVehiculo}</td>
                  <td>{blog.marca}</td>
                  <td>{blog.fecha}</td>
                  <td>{blog.hora}</td>
                  <td>
                    <Link to={`/edit/${blog.id}`} className="btn btn-info mr-2">Editar</Link>
                    <button onClick={() => deleteBlog(blog.id)} className="btn btn-danger">Eliminar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default CompShowBlogs;
