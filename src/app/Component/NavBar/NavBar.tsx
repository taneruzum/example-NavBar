import '../NavBar/navbar.css';
import React from 'react'

function NavBar() {
  return (
    <main>
        <div className="navBar">
            <div className="navBarLogo"> Design by <span>T</span></div>
            <div className="navBarMenu">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Services</li>
                    
                </ul>
            </div>
        </div>

    </main>
  )
}

export default NavBar