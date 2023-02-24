import Navbar from './components/Navbar'
import Hero from './components/Hero'
import './style.css'
import Footer from './components/Footer'
import Medium from './components/Medium'
import Faqs from './components/Faqs'

function App () {
  return (
    <main className='container-app'>
      <Navbar />
      <Hero />
      <Medium />
      <Faqs />
      <Footer />
    </main>
  )
}

export default App
