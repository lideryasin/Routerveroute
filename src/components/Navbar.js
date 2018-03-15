import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

class Navbar extends React.Component {
    render() {
        return (

           // <header >
            <nav style={{width: "100% "}} className=" navbar navbar-expand-lg navbar navbar-dark bg-dark justify-content-between">
                <a className="navbar-brand "  href="/">LİDER YAZILIM</a>
                <button className="navbar-toggler" type="button">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="navbar-collapse" >
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link to="/" activeClassName="active" className="nav-link" href="">Ana Sayfa</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/hakimizda" activeClassName="active" className="nav-link" href="">Hakımızda</Link>
                        </li>
                        <li className="nav-item ">
                            <Link to="/iletisim" activeClassName="active" className="nav-link" href="">İletİşİm</Link>
                        </li>

                    </ul>
                </div>

                
            </nav>
      //  </header>

        );
    }
}

export default Navbar;