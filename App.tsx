
import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProgramsPage from './pages/ProgramsPage';
import FullFAQPage from './pages/FullFAQPage';
import PlaceholderPage from './pages/PlaceholderPage';

const App: React.FC = () => {
    return (
        <HashRouter>
            <div className="bg-light-bg text-dark-text min-h-screen flex flex-col font-sans">
                <Header />
                <main className="flex-grow">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/programas" element={<ProgramsPage />} />
                        <Route path="/preguntas" element={<FullFAQPage />} />
                        <Route path="/contacto" element={<PlaceholderPage title="Contacto" content="Para contactarnos, por favor envíe un correo electrónico a info@adventist.club." />} />
                        <Route path="/privacidad" element={<PlaceholderPage title="Política de Privacidad" content="Detalles de la política de privacidad estarán disponibles aquí." />} />
                        <Route path="/terminos" element={<PlaceholderPage title="Términos de Servicio" content="Detalles de los términos de servicio estarán disponibles aquí." />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </HashRouter>
    );
};

export default App;
