import React from 'react'
import { Provider } from 'react-redux'
import { useredux } from "./Redux-Store/redux"
import Home from './Home'
import Create from './Create'
import Update from './Update'
import Defaultpage from './Defaultpage'
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Counter from './Counter'
const App = () => {
  return (

    <Provider store={useredux}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Defaultpage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/create" element={<Create />} />
          <Route path="/update/:id" element={<Update />} />
          <Route path="/counter" element={<Counter />} />

        </Routes >
      </BrowserRouter >
    </Provider>


  )
}

export default App