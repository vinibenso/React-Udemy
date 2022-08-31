import "./Navbar.css"

import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">Sobre</Link>
    </nav>
    
    
  )
}