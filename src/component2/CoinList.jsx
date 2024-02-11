import React from 'react'
import { Link } from 'react-router-dom'


const CoinList = ({ coin }) => {
    return ( 
        <div className=''>
        <div className=" bg-white hover:bg-gray-300 rounded-lg shadow-md p-4 w-full">
            <Link to={`saved/${coin.id}`} className="flex flex-col items-center justify-center space-y-2">
                <span className="w-16 h-16 rounded-full overflow-hidden">
                    <img src={coin.image} alt={`${coin.name} icon`} className="w-full h-full object-cover" />
                </span>
                <h3 className="font-bold text-lg">{coin.name}</h3>
                <div className="flex justify-between w-full">
                    <span className="text-sm">{coin.priceBtc} BTC</span>
                    <span className="text-sm">{coin.priceUsd} USD</span>
                </div>
            </Link>
        </div>
        </div>
    )
}

export default CoinList
