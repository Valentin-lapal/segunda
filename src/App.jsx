import './Styles/Navbar.css'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/Navbar'
import ItemDetailContainer from './Components/ItemDetailContainer'
import {BrowserRouter, Routes, Route} from "react-router"
// import Contador from './Components/Contador'



function App() {
  return (

    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:category" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
    </BrowserRouter>
   
  )
}

export default App
