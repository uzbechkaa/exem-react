import { Link } from 'react-router-dom';
import './header.css'
import arrow from "../../Images/arrow.svg"
import logo from "../../Images/logo.svg"
import menu from "../../Images/menu.svg"
import x from "../../Images/nocomleted.svg"
function Header() {
  return (
    <header>
    <ul>
        <li>Free Courses 🌟 Sale Ends Soon, Get It Now </li>
        <img src={arrow} alt="" />
    </ul>
    <nav>
        <div className="navLogo">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <ul className="navList">

                    <li>
                        <Link  className="link" to="/">Home</Link>
                    </li>
                    <li>
                        <Link className="link" to="/courses"></Link>
                    </li>
                    <li>
                        <Link className="link" to="/coursesopen">Courses Open</Link>
                    </li>
                    <li>
                        Prices
                    </li>
                    <li>
                        Contact
                    </li>
                
                <button className='xBtn'>
                    <img src={x} alt="" />
                </button>
            </ul>
        </div>

        <div className="loginBtn">
            <button>
                <Link className="link" to="/signup">Sign Up</Link>
            </button>
            <button>
                    <Link className="link" to="/login">Login</Link>
            </button>
            <button className='menu'>
                <img src={menu} alt="" />
            </button>
        </div>
    </nav>
</header>
  )
}

export default Header