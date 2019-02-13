import React from 'react';

import {Link} from 'react-router-dom';
const Menu = ({target}) => {

    const clazz = `${target}__item`;

    let logo = '/logo/Logo.svg';
    if (target === 'footer')
        logo = "/logo/Logo_black.svg" ;
    return (
        <ul className="header">
            <li className={clazz}>
                <Link to='/'>
                    <img src={logo} alt="logo"/>
                </Link>
            </li>
            <li className={clazz}>
                <Link to='/coffee/' href="#">Our coffee</Link>
            </li>
            <li className={clazz}>
                <Link to="/pleasure">For your pleasure</Link>
            </li>
            <li className={clazz}>
                <Link to='/contacts'>Contact Us</Link>
            </li>
        </ul>
    )
}

export default Menu;