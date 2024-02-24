import { useState } from 'react';
import Grimace from './grimace.png';

function Nav() {
    const [activePage, setActivePage] = useState(window.location.pathname);

    const handleNavLinkClick = (path) => {
        setActivePage(path);
    };

    return (
        <div>
            <nav className="navbar bg-dark border-bottom navbar-expand-lg" data-bs-theme="dark">
                <div className="container-fluid">
                    <img src={Grimace} alt="Logo" width="30" height="30" className="d-inline-block align-text-top" />
                    <a className="navbar-brand" href="#">Grimace</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={`nav-link ${activePage === '/' ? 'active' : ''}`} href="/test/#/" onClick={() => handleNavLinkClick('/test/#/')}>Home</a>
                            </li>
                            <li  className="nav-item">
                                <a className={`nav-link ${activePage === '/recipes' ? 'active' : ''}`} href="/test/#/recipes" onClick={() => handleNavLinkClick('/test/#/recipes')}>Recipes</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id='navbarNav'>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className={`nav-link ${activePage === '/profile' ? 'active' : ''}`} href="/test/#/profile" onClick={() => handleNavLinkClick('/test/#/profile')}>Profile</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${activePage === '/signIn' ? 'active' : ''}`} href="/test/#/signIn" onClick={() => handleNavLinkClick('/test/#/signIn')}>Sign in</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Nav;
