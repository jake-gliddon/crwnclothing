import Home from './routes/home/Home.component'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation.component';
import Authentication from './routes/authentication/Authentication.component';
import Shop from './routes/Shop/Shop.component';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='sign-in' element={<Authentication />} />
      </Route>
    </Routes>
  );
}

export default App;

