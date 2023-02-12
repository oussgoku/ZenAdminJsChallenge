import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    }
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" >Movies</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">

                    <ul className="navbar-nav">
                        <Link to="/" className="nav-link">
                            Home                            </Link>
                        <li className="nav-item">
                            <a className="nav-link" onClick={(goBack)}>Go Back</a>
                        </li>
                       
                    </ul>
                </div>
            </div>
        </nav>)
}

export default Navbar