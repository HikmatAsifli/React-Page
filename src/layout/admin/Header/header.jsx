import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className="container">
            <header className="d-flex flex-wrap justify-content-center py-3 position-sticky">
                

                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <ul className="nav nav-pills">
                    <li className="nav-item"><Link to="/admin" className="nav-link">Dashboard</Link></li>
                    <li className="nav-item"><Link to="/admin/products" className="nav-link">Products</Link></li>
                    <li className="nav-item"><Link to="/admin/add" className="nav-link">Add</Link></li>
                </ul>
            </header>
        </div>
    )
}

export default Header
