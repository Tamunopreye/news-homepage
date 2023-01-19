import React from "react"
import logo from "../assets/images/logo.svg"
const NavBar = () => {
  return (
    <div className="p-6 flex justify-between align-middle ">
      <img src={logo} alt="logo" width={40} height="auto" />
      <div className="text-1xl hidden md:flex space-x-8 mr-40">
        <a href="/">Home</a>
        <a href="/new">New</a>
        <a href="/popular">Popular</a>
        <a href="/trending">Trending</a>
        <a href="/categories">Categories</a>
      </div>
    </div>
  )
}

export default NavBar
