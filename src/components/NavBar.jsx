import { useState } from "react"
import logo from "../assets/images/logo.svg"
import { FaBars, FaTimes } from "react-icons/fa"
const NavBar = ({ toggle, handleClick }) => {
  return (
    <header className="fixed bg-white w-full top-0">
      <nav className="p-6 flex justify-between items-center">
        {/* logo */}
        <a href="/">
          <img src={logo} alt="logo" width={60} height="auto" />
        </a>

        {/* desktop menu */}
        <div className="hidden md:block">
          <ul className="text-xl text-darkGrayishBlue flex space-x-8 mr-20">
            <li>
              <a className="hover:text-softRed" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-softRed" href="/new">
                New
              </a>
            </li>
            <li>
              <a className="hover:text-softRed" href="/popular">
                Popular
              </a>
            </li>
            <li>
              <a className="hover:text-softRed" href="/trending">
                Trending
              </a>
            </li>
            <li>
              <a className="hover:text-softRed" href="/categories">
                Categories
              </a>
            </li>
          </ul>
        </div>
        {/* mobile nav menu */}
        <div className="block md:hidden">
          <ul
            className={
              !toggle
                ? "bg-white flex flex-col fixed right-[-100%] top-0 h-screen  p-6 pt-20 duration-500 space-y-5"
                : "bg-white flex flex-col fixed right-0 top-0 h-screen p-6 pt-20 w-8/12 duration-500 space-y-5"
            }
          >
            <li>
              <a className="hover:text-softRed" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-softRed" href="/new">
                New
              </a>
            </li>
            <li>
              <a className="hover:text-softRed" href="/popular">
                Popular
              </a>
            </li>
            <li>
              <a className="hover:text-softRed" href="/trending">
                Trending
              </a>
            </li>
            <li>
              <a className="hover:text-softRed" href="/categories">
                Categories
              </a>
            </li>
          </ul>
        </div>
        {/* hamburger-menu */}
        <button className="block md:hidden z-10" onClick={handleClick}>
          {toggle ? <FaTimes size={30} /> : <FaBars size={30} />}
        </button>
      </nav>
    </header>
  )
}

export default NavBar
