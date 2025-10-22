
import React from 'react';
import { Link } from 'react-router-dom';
import { LogoIcon } from './icons';

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white">
            <div className="container mx-auto py-8 px-4 sm:px-6 lg:px-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                         <Link to="/" className="flex items-center space-x-2">
                            <LogoIcon className="h-8 w-8 text-white" />
                            <span className="text-white text-xl font-bold">adventist.club</span>
                        </Link>
                        <p className="mt-2 text-sm text-gray-300 max-w-xs">Conectando clubes, potenciando líderes, inspirando a las nuevas generaciones.</p>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase tracking-wider">Plataforma</h2>
                            <ul className="text-gray-300 space-y-2">
                                <li><a href="https://conquistadores.app/signup" target="_blank" rel="noopener noreferrer" className="hover:text-highlight">Crear Cuenta</a></li>
                                <li><a href="https://admin.conquistadores.app/login" target="_blank" rel="noopener noreferrer" className="hover:text-highlight">Portal de Líderes</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase tracking-wider">Navegación</h2>
                            <ul className="text-gray-300 space-y-2">
                                <li><Link to="/programas" className="hover:text-highlight">Programas</Link></li>
                                <li><Link to="/preguntas" className="hover:text-highlight">Preguntas</Link></li>
                            </ul>
                        </div>
                         <div>
                            <h2 className="mb-4 text-sm font-semibold text-gray-200 uppercase tracking-wider">Legal</h2>
                            <ul className="text-gray-300 space-y-2">
                                <li><Link to="/privacidad" className="hover:text-highlight">Privacidad</Link></li>
                                <li><Link to="/terminos" className="hover:text-highlight">Términos</Link></li>
                                <li><Link to="/contacto" className="hover:text-highlight">Contacto</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-600" />
                <div className="text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Adventist.Club. Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
