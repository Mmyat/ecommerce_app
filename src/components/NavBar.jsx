import { NavLink } from 'react-router-dom';
import {SiShopify} from "react-icons/si";
import {AiFillHome} from "react-icons/ai";
import {FaShoppingCart} from 'react-icons/fa';
import {HiSearch} from 'react-icons/hi';
import {FaUserAlt} from 'react-icons/fa'
import {useStateContext} from "../context/ContextProvider";
const NavBar = () => {
  const {search,setSearch,state:{cart}} = useStateContext()
  return (
    <nav className="flex fixed top-0 left-0 right-0 bg-gray-300 items-center justify-between px-10 py-2 m-5 mb-3 shadow-md rounded-lg">
            <div className="flex items-center">
              <SiShopify className="text-3xl mr-1" style={{color:"#ff8906"}}/>
              <h1 className="navbar-brand font-semibold text-xl" style={{color:"#ff8906"}}>F-shop</h1>
            </div>
            <div className="flex items-center">
              <NavLink to={"/"} className="navbar-default" aria-current="page" href="#">
                <AiFillHome className="text-2xl"/>
              </NavLink>
            </div>
            <div className="flex items-center bg-white border-3 px-2 py-1 rounded">
              <HiSearch className="text-2xl"/>
              <input className="outline-non bg-transparent" value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search"/>
            </div>
            <div className="items-center">
              <NavLink to={"/cart"} className="nav-link flex bg-header rounded p-1 items-center gap-3" href="#">
                <FaShoppingCart className="text-xl text-white"/>
                <h3 className="text-white">{cart.length}</h3>
              </NavLink>
            </div>
    </nav>
  )
}

export default NavBar;