// import logo from './logo.svg';
import './App.css';

//importacion de componetes

import CompShowBlogs from './blog/ShowBlogs';
import CompCreateBlog from './blog/CreateBlog';
import CompEditBlog from './blog/EditBlog';
import ComponenteAdmin from './blog/AdminAgenda';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Navbar from './blog/Header';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
      </header>
      <Navbar/>
      <BrowserRouter>
          <Routes>
            
            <Route path='/mostrar' element={<CompShowBlogs/>} />
            <Route path='/create' element={<CompCreateBlog/>} />
            <Route path='/edit/:id' element={<CompEditBlog/>} />
            <Route path='/Estado' element={<ComponenteAdmin/>} />
         </Routes>
      </BrowserRouter>
        
    </div>
  );
}

export default App;
