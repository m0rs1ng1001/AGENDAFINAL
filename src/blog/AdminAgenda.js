import React from 'react';

const ComponenteAdmin = () => {

  // const [loading, setLoading] = useState(true);

  return (
    <div className="h-screen flex flex-col justify-start items-center">
      <div className="grid grid-cols-3 gap-40 mt-10 h-96">
        
        <div className="border border-gray-400 rounded-md p-4 w-72 text-center">
          <p>en espera</p>
        
        <div className='border mt-5 rounded-md h-20'><h1>holamundo1</h1></div>

        </div>
        <div className="border border-gray-400 rounded-md p-4 w-72 text-center"><p>en proceso</p>

        <div className='border mt-5 rounded-md h-20'><h1>holamundo2</h1></div>

        </div>
        <div className="border border-gray-400 rounded-md p-4 w-72 text-center"><p>terminado</p>

        <div className='border mt-5 rounded-md h-20'><h1>holamundo3</h1></div>

        </div>
      </div>
    </div>
  );
};

export default ComponenteAdmin;
