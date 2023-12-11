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
    <nav className="w-full flex flex-wrap items-start justify-between fixed top-0 left-0 right-0 z-10 bg-[#8f8f8f] px-1 py-2 mx-auto mb-3 shadow-md rounded-b-lg">
            <div className="flex items-center mr-auto">
              <SiShopify className="text-2xl" style={{color:"#ff8906"}}/>
              <h1 className="navbar-brand text-header font-semibold text-lg md:text-xl lg:text-2xl">Shop</h1>
            </div>
            <div className="flex items-center">
              <NavLink to={"/"} className="navbar-default" aria-current="page" href="#">
                <AiFillHome className="text-2xl"/>
              </NavLink>
            </div>
            <div className="flex items-center bg-white border-3 mx-auto px-2 py-1 rounded">
              <HiSearch className="text-2xl"/>
              <input className="outline-non w-16 md:w-36 lg:w-52 bg-transparent" value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder="Search"/>
            </div>
            <div className="flex items-center">
              <NavLink to={"/cart"} className="nav-link flex bg-header rounded p-1 items-center gap-3" href="#">
                <FaShoppingCart className="md:text-lg sm:text-sm text-white"/>
                <h3 className="text-white">{cart.length}</h3>
              </NavLink>
            </div>
    </nav>
  )
}

export default NavBar;