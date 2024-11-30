import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'

function App() {

  return (
    <>
      <Navbar />
      <Outlet></Outlet>
        {/* Jekhane route gula change korte cao */}
      <Footer />
    </>
  )
}

export default App
