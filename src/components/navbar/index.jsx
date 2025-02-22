import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';
import logo from '../../assets/logo.png';
const data = [
    {
        label: "ACCUEIL",
        to: "/",
    }, {
        label: "À PROPOS DE MOI",
        to: "/about",
    }, {
        label: "COMPÉTENCES",
        to: "/skills",
    },
    {
        label: "CV",
        to: "/resume",
    },
    {
        label: "PORTFOLIO",
        to: "/portfolio",
    },
    {
        label: "CONTACT",
        to: "/contact",
    },
];

export default function Navbar() {

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        //ajouter ou enlever la classe active
        //document.querySelector('.navbar_container_menu').classList.toggle('active');

        setToggleIcon(!toggleIcon);
    }

    return (
        <div>
            <nav className='navbar'>
                <div className="navbar__container">
                    <Link to={"/"} className="navbar__container__logo">
                    <img className='logo' src={logo} alt="logo" />
                        {/* <FaReact size={30} /> */}
                    </Link>
                </div>
                <ul className={toggleIcon ? 'navbar__container__menu active' : 'navbar__container__menu'}>
                    {data.map((item, index) => {
                        return (
                            <li key={index} className='navbar__container__menu__item'>
                                <Link className='navbar__container__menu__item__links' to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                <div className="nav-icon" onClick={handleToggleIcon}>
                    {
                        toggleIcon ? <HiX size={30} /> : <FaBars size={30} />
                    }
                </div>
            </nav>
        </div>
    )
}
