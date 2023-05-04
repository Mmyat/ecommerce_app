import {BrowserRouter as Router,Routes,Route, Outlet} from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Details from "./pages/details";
import Cart from "./pages/Cart";
import Error from "./pages/Error";
import NavBar from './components/NavBar';
import Success from "./pages/Success";
const App = () => {
  return (
    <div className="container mx-auto bg-primary">
      <Router>
        <NavBar/>
          <Routes >
            <Route path="/" exact element={<Home/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/details/:id" element={<Details/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/success" element={<Success/>}/>
            <Route path="*" element={<Error/>}/>
          </Routes>
      </Router>
    </div>
  )
}

export default App