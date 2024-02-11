import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Home2 from './components/Home2';
import Show from './components/Show';
import Homep from './components/Homep';
import Crypto from './component2/Crypto';
import Trending from './component2/Trending';
import Saved from './component2/Saved';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
   <Routes>
    <Route index element={<Homep/>}/>
    <Route path='/a' element={<Home/>}/>
    <Route path='/b' element={<Home2/>}/>

    <Route path='/crypto' element={<Crypto/>}/>
    <Route path='/trending' element={<Trending/>}/>
    <Route path='/saved/:id' element={<Saved/>}/>

    <Route path='/:id' element={<Show/>}/>
   </Routes>
  </BrowserRouter>
);


