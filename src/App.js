import Home from './routes/home/Home.component'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation.component';
import Authentication from './routes/authentication/Authentication.component';

const Shop = () => {
  return (
    <div>
      <h1>Shop</h1>
    </div>
  )
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='sign-in' element={<Authentication />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;

