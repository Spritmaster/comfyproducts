import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navlinks from "./NAvlinks";
import { store } from "../redux/app/store";

const themes = {
  light: 'light',
  dark: 'dark'
}

const getThemeFromLocalStorage  = () => {
  return localStorage.getItem('theme' || themes.light)
}


function Navbar() {
  const [theme, setTheme] = useState(getThemeFromLocalStorage())
  const handleTheme = () => {
    const {dark, light} = themes
    const newTheme = theme === light ? dark : light
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', theme)
  }
  
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const basket =useSelector((store)=>store.product.cartTotal)

  return (
    <nav className="bg-base-200">
      <div className="navbar align-elements">
        <div className="navbar-start">
          <NavLink
            to="/"
            className="hidden btn lg:flex btn-primary text-3xl items-center text-info"
          >
            c
          </NavLink>
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <FaBarsStaggered className="h-6 w-6" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-[1] mt-3 p-2 shadow bg-base-200"
            >
               <Navlinks/>
            </ul>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal gap-2">
                <Navlinks/>
            </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-rotate">
            <input type="checkbox" onClick={handleTheme}/>
            <BsSunFill className="swap-on h-4 w-4" />
            <BsMoonFill className="swap-off h-4 w-4" />
          </label>
          <NavLink to="/cart" className="btn btn-circle btn-md ml-4">
            <div className="indicator">
              <BsCart3 className="w-6 h-6" />
              <span className="badge badge-sm badge-primary indicator-item text-info">
                {basket}
                
              </span>
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;