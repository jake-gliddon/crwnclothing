import Home from './routes/home/Home.component'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation.component';
import Signin from './routes/Sign-in/Signin.component';
import Register from './routes/Register/Register.component';

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
        <Route path='sign-in' element={<Signin />} />
        <Route path='register' element={<Register />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;

