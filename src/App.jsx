import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Services from "./pages/Services/Services"
import Contact from "./pages/Contact/Contact"
import About from "./pages/About/About"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/contact' element={<Contact/> } />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
