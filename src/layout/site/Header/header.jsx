import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import './header.css'

const Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 position-sticky">
                <Link to="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <img src={logo} alt="" />
                </Link>

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">Category</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">Men</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">Women</Link></li>
                    <li className="nav-item"><Link to="#" className="nav-link">Latest</Link></li>
                    <li className="nav-item"><Link to="/basket" className="nav-link">Basket</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header
