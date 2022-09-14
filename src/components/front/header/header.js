import React from "react";
import {Link} from 'react-router-dom'
import './header.css'
const Header = ({cartItems}) => {
    return (
        <header className="header">
            <div>
                <h1>
                    <Link to='/' className="logo">Electronic Appliances</Link>
                </h1>
            </div>
            <div className="headerlinks">
                <ul>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/signup'>signUp</Link>
                    </li>
                    <li>
                        <Link to='/cart' className="cart"><i className="fa-brands fa-opencart"></i></Link>
                        <span className="cartlength">
                            {cartItems.length==0?"":cartItems.length}
                        </span>
                    </li>
                </ul>

            </div>
        </header>
    )
}
export default Header;