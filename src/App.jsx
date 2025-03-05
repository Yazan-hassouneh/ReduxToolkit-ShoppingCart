import { Container } from "react-bootstrap"
import Products from "./component/Products"
import NavBar from "./shared/NavBar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Cart from "./component/Cart"
import Dashboard from "./component/Dashboard"

function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar></NavBar>
          <Container>
            <Routes>
              <Route path="/" element={<Products></Products>}></Route>
              <Route path="/cart" element={<Cart></Cart>}></Route>
              <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
            </Routes>
          </Container>
      </BrowserRouter>
    </>
  )
}

export default App
