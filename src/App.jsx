import './Styles/Navbar.css'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/Navbar'
import Contador from './Components/Contador'
import {BrowserRouter, Routes, Route} from "react-router"


function App() {
  return (
    <>
      <NavBar />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:name" element={<ItemListContainer />} />
        </Routes>
      </BrowserRouter>
      
      {/* <Contador /> */}


      {/* <div>
        <ItemListContainer />
      </div>
       */}
    </>
  )
}

export default App
