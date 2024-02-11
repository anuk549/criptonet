import React from 'react';
import { Link } from 'react-router-dom';

const Homep = () => {
  return (
    <div className='py-60 px-10'>
      <div className="container mx-auto px-4 py-10 text-white">
        <h1 className="text-4xl font-bold py-61 mb-5">cryptonet App</h1>
        <p className="text-xl mb-8">
          Welcome to cryptonet App, the best place to get Coin information .
        </p>
        <div className="flex">
        <Link
            to="/a"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Get Started
          </Link>
        </div>
      </div>
     
    </div>
  );
};

export default Homep;



<Link
            to="/a"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Buy
          </Link>