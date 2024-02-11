import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 px-2 md:px-10">
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-wrap mb-8">
          <div className="w-full ">
            <h2 className="text-xl font-semibold mb-4">About Us</h2>
            <p className="mb-4">Our mission is to provide accurate and up-to-date information on cryptocurrency prices, so you can make informed decisions. Join us on this exciting journey to the future of finance. </p>
            <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
            <ul className="list-none">
              <li className="mb-2"><a href="https://twitter.com/2001Anuk/" className="hover:underline">Twitter</a></li>
            </ul>
          </div>
 
          
        </div>
        <div className="text-sm text-gray-600">
          <p>&copy; 2023 cryptonet. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
