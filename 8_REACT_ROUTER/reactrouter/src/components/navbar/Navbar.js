// 2 - Links com react router
import "./Navbar.css"

import { Link, NavLink } from "react-router-dom"

export function Navbar() {
  return (
    <nav>
      {/* <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link> */}

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">Sobre</NavLink>

    </nav>


  )
}