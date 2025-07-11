import React, { use, useContext, useRef } from 'react'
import { useState } from 'react'
import './Navbar.css'
import Logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import dropdown_icon from '../Assets/dropdown_icon.png'
function Navbar() {
    const [menu, setMenu] = useState("shop");
    // const [totalCartItems] = useContext(ShopContext);
    const menuRef = useRef()
    const dropdown_toggle = (e) => {
       menuRef.current.classList.toggle('nav-menu-visible');
       e.target.classList.toggle('open');
    }
  return (
    <div className='navbar'>
      <div className='nav_logo'>
        <img src={Logo} alt="logo" className='logo' />
        <p>QuicKart</p>
      </div>
      <img onClick={dropdown_toggle} src={dropdown_icon} alt="" className='toggle-icon'/>
        <ul className="nav_menu" ref = {menuRef}>
          <li onClick={() => setMenu("shop")}><Link style={{textDecoration: "none"}} to="/shop">Shop</Link> {menu === "shop" ? <hr/> : null}</li>
          <li onClick={() => setMenu("men")}><Link style={{textDecoration: "none"}} to="/mens">Men</Link> {menu === "men" ? <hr/> : null}</li>
          <li onClick={() => setMenu("women")}><Link style={{textDecoration: "none"}} to="/womens">Women</Link> {menu === "women" ? <hr/> : null}</li>
          <li onClick={() => setMenu("kids")}><Link style={{textDecoration: "none"}} to="/kids">Kids</Link> {menu === "kids" ? <hr/> : null}</li> 
        </ul>
        <div className="nav_login_cart">
            <Link to="/login"><button>Login</button></Link>
            <div className='nav_count_cart'>
                <Link to="/cart"><img src={cart_icon} alt="cart" className='nav_cart_icon' /></Link>
              <p className='nav_cart_count'>0</p>
            </div>
        </div>
    </div>
  )
}

export default Navbar
