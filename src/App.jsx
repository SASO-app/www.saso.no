import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Kalkulator from './pages/Kalkulator'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flippkalkulator" element={<Kalkulator />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
