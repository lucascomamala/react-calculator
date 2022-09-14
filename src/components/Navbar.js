import React from "react"
import { NavLink } from "react-router-dom"
import './Navbar.css';


const Navbar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "Home",
    },
    {
      id: 2,
      path: "/calculator",
      text: "Calculator",
    },
    {
      id: 2,
      path: "/quote",
      text: "Quote",
    },
  ]

  return (
    <nav className="navBar">
      <ul>
        {links.map(link => {
          return (
            <li key={link.id}>
              <NavLink to={link.path} end>
                {link.text}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
export default Navbar
