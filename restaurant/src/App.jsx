import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {Navbar} from './Componentes/Navbar'
import {Home} from './Componentes/Home'
import {About} from './Componentes/About'
import {Contact} from './Componentes/Contact'
import {Footer} from './Componentes/Footer'
import {Price} from './Componentes/Price'
import {Team} from './Componentes/Team'
import {Services} from './Componentes/Services'


function App() {

  return (
<>
<BrowserRouter>
<Navbar/>
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/price" element={<Price />} />
  <Route path="/team" element={<Team />} />
  <Route path="/services" element={<Services />} />
   </Routes>
   <Footer/>
</BrowserRouter>
</>

  )
}

  export default App