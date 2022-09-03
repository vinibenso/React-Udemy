import { NavLink } from "react-router-dom"

import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to='/' className={({ isActive }) => (isActive ? styles.active : "")}>
            Home
          </NavLink>

          <NavLink to='/login' className={({ isActive }) => (isActive ? styles
            .active : "")}>
            Entrar
          </NavLink>

          <NavLink to='/register' className={({ isActive }) => (isActive ? styles
            .active : "")}>
           Cadastrar
          </NavLink>

          <NavLink to='/about' className={({ isActive }) => (isActive ? styles.active : "")}>
            Sobre
          </NavLink>
        </li>

      </ul>
    </nav>
  )
}