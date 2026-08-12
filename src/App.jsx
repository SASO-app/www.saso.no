import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Kalkulator from './pages/Kalkulator'

const Samarbeid = lazy(() => import('./pages/Samarbeid'))

function SiteLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<SiteLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/flippkalkulator" element={<Kalkulator />} />
        </Route>
        <Route
          path="/samarbeid"
          element={
            <Suspense fallback={null}>
              <Samarbeid />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
