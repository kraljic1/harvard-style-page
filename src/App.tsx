import React from 'react'
import Header from './components/layout/Header/Header'
import Navigation from './components/layout/Navigation/Navigation'
import MainContent from './components/layout/MainContent/MainContent'
import Footer from './components/layout/Footer/Footer'
import './App.css'

const App: React.FC = () => {
  return (
    <div className="app">
      <Header />
      <Navigation />
      <MainContent />
      <Footer />
    </div>
  )
}

export default App
