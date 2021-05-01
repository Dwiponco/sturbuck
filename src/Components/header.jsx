import React from 'react'
import logo from "../images/logo.png"
import "../style/header.scss"
function Header() {
    const toggleMenu =()=>{
        var menuToggle = document.querySelector(".toggle")
        var navigation = document.querySelector(".navigation")

        menuToggle.classList.toggle("active")
        navigation.classList.toggle("active")
    }
    return (
        <header className="header">
            <a href="/" ><img src={logo} alt="" className="logo"/></a>
            <div className="toggle" onClick={toggleMenu}></div>
            <ul className="navigation">
                <li><a href="/">Home</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">What's New</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </header>
    )
}

export default Header
