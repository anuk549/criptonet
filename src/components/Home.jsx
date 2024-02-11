import React from 'react'
import homeStore from '../stores/homeStore'
import Header from './Header'
import Footer from './Footer'
import Homep from './Homep'
import { Link } from 'react-router-dom'
import './styles.css'
import ListIteItems from './ListIteItems'
import AnalyticsScript from './AnalyticsScript';

const Home = () => {

  const store = homeStore()

  React.useEffect(() => {
    store.fetchCoins()
  }, [])

  return (
    <div className="">
      <Header />
      
      <header className="px-2 md:px-10 mt-4">
      <AnalyticsScript />
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-white">Search for a coin</h2>
          <div className="flex mt-2">
            <input type="text" className="w-full px-4 py-2 text-gray-700  border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500  bg-white hover:bg-gray-300 " placeholder="Eg: Bitcoin" value={store.query} onChange={store.setQuery} />
          </div>
        </div>
      </header>
      <div className="py-6 px-2 md:px-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-semibold text-white">{store.searched ? 'Search results': 'Trending Coins'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {store.coins.map(coin => {
              return (
                <ListIteItems key={coin.id} coin={coin} />
              )
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home
