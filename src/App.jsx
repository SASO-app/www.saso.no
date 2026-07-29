import Header from './components/Header'
import Hero from './components/Hero'
import OurStory from './components/OurStory'
import Philosophy from './components/Philosophy'
import Portfolio from './components/Portfolio'
import Investors from './components/Investors'
import Tenants from './components/Tenants'
import Partners from './components/Partners'
import Social from './components/Social'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <OurStory />
        <Philosophy />
        <Portfolio />
        <Investors />
        <Tenants />
        <Partners />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
