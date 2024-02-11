import React from 'react';
import { Link } from 'react-router-dom';

const Header = ({back}) => {
  return (
    <header className="bg-black py-6 px-2 md:px-10">
        <div className="container mx-auto flex items-center justify-normal py-4">
           {back && (
            <Link to='/'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48"  width="24" className="text-white"><path fill="currentColor" d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"/></svg>
            </Link>
            )}
            <h1>
                <Link to="/" className="text-white font-bold text-xl">cryptonet</Link>
            </h1>
        </div>
    </header>
  )
}

export default Header;
