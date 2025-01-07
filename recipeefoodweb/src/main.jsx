import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import './Components/Header/Nav.css'


import './Components/Hero/Hero.css'

import './Components/Footer/Footer.css'
import './Components/Api/Api.css'
import './Components/Contact/Contact.css'

import Nav from './Components/Header/Nav.jsx'
import Footer from './Components/Footer/Footer.jsx'
import Hero from './Components/Hero/Hero.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Api from './Components/Api/api.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Nav/>
    
    <Hero/>
    <Api/>
    <Contact/>
    <Footer/>
    


  </StrictMode>,
)
