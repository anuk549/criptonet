import React from 'react'
import ro from './ro'

import { useParams } from 'react-router-dom'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Saved = () => {
  const store = ro()
  const params = useParams()

  React.useEffect(() => {
    store.fetchData(params.id);
    return () => {
      store.reset();
    };
  }, [params.id]);

  if(!store.data) return <div>Loading...</div>;

  return (
  
    
    <div className="">

      
      <div className=" bg-white  rounded-lg shadow-md p-4 w-full" >
      <header className=" bg-white shadow-md overflow-hidden flex flex-col items-center">
        <div className="w-20 h-20 "  >
        <img  src={store.data.image.large} alt={`${store.data.name} logo`}  />

        </div>
  <h2 className="text-center text-xl font-semibold mb-2">{store.data.name} ({store.data.symbol})</h2>
</header>


      <div className="flex flex-col bg-white  shadow-md overflow-hidden">
  <div className="flex-shrink-0 bg-gray-200 h-40 sm:h-64 w-full">
    <ResponsiveContainer width="100%" height="100%">
      <AreaChart
        data={store.graphData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="Date" />
        <YAxis />
        <Tooltip />
        <Area
          type="monotone"
          dataKey="Price"
          stroke="#8884d8"
          fill="#8884d8"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
  <div className="flex-1 p-4 sm:p-6 lg:p-6">
    <h2 className="text-xl font-semibold mb-2">
      {store.data.name} ({store.data.symbol})
    </h2>
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm font-medium text-gray-500">Market cap rank</div>
      <div className="text-lg font-semibold">
        {store.data.market_cap_rank}
      </div>
    </div>
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm font-medium text-gray-500">24 high</div>
      <div className="text-lg font-semibold">
        {store.data.market_data.high_24h.usd}
      </div>
    </div>
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm font-medium text-gray-500">24 low</div>
      <div className="text-lg font-semibold">
        {store.data.market_data.low_24h.usd}
      </div>
    </div>
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm font-medium text-gray-500">
        Circulating supply
      </div>
      <div className="text-lg font-semibold">
        {store.data.market_data.circulating_supply}
      </div>
    </div>
    <div className="flex justify-between items-center mb-2">
      <div className="text-sm font-medium text-gray-500">Current price</div>
      <div className="text-lg font-semibold">
        {store.data.market_data.current_price.usd}
      </div>
    </div>
    <div className="flex justify-between items-center">
      <div className="text-sm font-medium text-gray-500">1y change</div>
      <div className="text-lg font-semibold">
        {store.data.market_data.price_change_percentage_1y.toFixed(2)}%
      </div>
    </div>
  </div>
</div>
</div>
</div>



      
    
  )
}

export default Saved