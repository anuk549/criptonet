import React from 'react'
import { Link } from 'react-router-dom';
import Header from './Header';

const Home2 = () => {
  return (
    <div>
        <Header />
    
    <div className='w-full h-full flex flex-col first-letter: content-center  items-center p-10'>
    <div>
        <Link
            to='/crypto'
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-4"
          >
            Crypto
          </Link>
         
          <Link
            to='/trending'
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-4"
          >
            trending
          </Link>
          <Link
            to='/saved'
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded mr-4"
          >
            saved
          </Link>
    </div>
    </div>
    </div>
  )
}

export default Home2
