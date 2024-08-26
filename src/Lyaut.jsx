import React from 'react'
import Navbar from './components/Navbar'
import Carusel from './components/Carusel'
import Categories from './components/Categories'
import Servis from './components/Servis'
import Deal from './components/Deal'
import Footer from './components/Footer'


function Lyaut() {
  return (
    <div>
       <Navbar />
       <Carusel />
       <Categories />
       <Servis />
       <Deal />
       <Footer />
    </div>
  )
}

export default Lyaut
