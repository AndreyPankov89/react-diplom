import React from 'react';
import Menu from '../menu'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3">
                        <ul className="footer d-flex justify-content-center">
                            <Menu target="footer"/>
                        </ul>
                    </div>
                </div>
                <img className="beanslogo" src="/logo/Beans_logo_dark.svg" alt="Beans logo"/>
            </div>
        </footer>
    )
}

export default Footer;