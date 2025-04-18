import React from 'react';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = () => {
    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Brand</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            
                                <Link className="nav-link active" aria-current="page" href="/">Home</Link>
                            
                        </li>
                        <li className="nav-item">
                           
                                <Link className="nav-link active" aria-current="page" href="/about">About</Link>
                            
                        </li>
                        <li className="nav-item">
                            
                                <Link className="nav-link active" aria-current="page" href="/contact">Contact</Link>
                            
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" href="/employees">Employees</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        </>
    );
}

export default Header;