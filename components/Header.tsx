
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { LogoIcon, MenuIcon, CloseIcon } from './icons';

const NavLink: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;
    return (
        <Link 
            to={to} 
            className={`text-sm font-medium transition-colors ${isActive ? 'text-highlight' : 'text-white hover:text-highlight'}`}
        >
            {children}
        </Link>
    );
};

const Header: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navLinks = (
        <>
            <NavLink to="/programas">Programas</NavLink>
            <NavLink to="/preguntas">Preguntas Frecuentes</NavLink>
            <NavLink to="/contacto">Contacto</NavLink>
        </>
    );

    return (
        <header className="bg-primary shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link to="/" className="flex items-center space-x-2">
                        <LogoIcon className="h-8 w-8 text-white" />
                        <span className="text-white text-xl font-bold">adventist.club</span>
                    </Link>
                    <nav className="hidden md:flex items-center space-x-6">
                        {navLinks}
                    </nav>
                    <div className="hidden md:flex items-center space-x-3">
                        <a href="https://admin.conquistadores.app/login" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-highlight transition-colors">
                            Soy director/instructor
                        </a>
                        <a href="https://conquistadores.app/signup" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105">
                            Crear mi cuenta
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white">
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-primary/95 backdrop-blur-sm absolute top-16 left-0 w-full">
                    <div className="px-4 pt-2 pb-4 flex flex-col space-y-4">
                        {navLinks}
                        <a href="https://admin.conquistadores.app/login" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-white hover:text-highlight transition-colors">
                            Soy director/instructor
                        </a>
                        <a href="https://conquistadores.app/signup" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 text-center">
                            Crear mi cuenta
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
