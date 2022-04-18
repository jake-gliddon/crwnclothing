import Home from './routes/home/Home.component'
import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Navigation from './routes/Navigation/Navigation.component';


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;

