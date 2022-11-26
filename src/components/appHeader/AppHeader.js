
import { Link, NavLink } from 'react-router-dom';
import './appHeader.scss';

const AppHeader = () => {

    return (
        <header className="app__header">
            <h1 className="app__title">
                <a href="#">
                    <span>Marvel</span> information portal
                </a>
            </h1>
            <nav className="app__menu">
                <ul>
                   
                    <li class="header__link">
                       <NavLink to='./characters' 
                       className={({ isActive }) =>(isActive ? "active" : "")}>
                            Characters
                        </NavLink>
                    </li>
                    /
                    <li class="header__link">
                        <NavLink to='./comics'
                        className={({ isActive }) =>(isActive ? "active" : "")}>
                            Comics
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default AppHeader;