import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import MainContent from './components/MainContent';
import './App.scss';

const App = _ => {
  return (
    <BrowserRouter>
      <MainContent />
    </BrowserRouter>
  )
}

export default App
