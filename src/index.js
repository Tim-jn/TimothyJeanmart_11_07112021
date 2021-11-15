import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Error from './Pages/Error/Error'
import './index.css'
import Accomodations from './Pages/Accomodations/Accomodations'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodations" element={<Accomodations />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
