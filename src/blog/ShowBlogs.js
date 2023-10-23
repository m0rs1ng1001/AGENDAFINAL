import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';
// import Message from './Message';



const URI = 'http://localhost:8000/blogs/';



const CompShowBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const res = await axios.get(URI);
      setBlogs(res.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setLoading(false);
    }
  };

  const deleteBlog = async (id) => {
    try {
      await axios.delete(`${URI}${id}`);
      getBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
    }
  };

  
  return (
    
    <div className="container mt-40  bg-light rounded">

      <h1 className="text-center text-primary ">AGENDAR CITA</h1>
      <div className="row">
        <Link to="/create" className="btn btn-primary mb-3">
          Añadir Cita
        </Link>
        <div className="col">
          {loading ? (
            <Loader /> // Display loader while loading
          ) : (
            <table className="table table-striped table-bordered mt-2">
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
                  <tr
                    key={blog.id}
                    className={index % 2 === 0 ? 'bg-light' : 'bg-white'}
                  >
                    <td>{blog.placa}</td>
                    <td>{blog.modelo}</td>
                    <td>{blog.tipoVehiculo}</td>
                    <td>{blog.marca}</td>
                    <td>{blog.fecha}</td>
                    <td>{blog.hora}</td>
                    <td>
                      <Link to={`/edit/${blog.id}`} className="btn btn-info mr-2">
                        Editar
                      </Link>
                      <button
                        onClick={() => deleteBlog(blog.id)}
                        className="btn btn-danger"
                      >
                        Eliminar
                      </button>
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
};

export default CompShowBlogs;
