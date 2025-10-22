
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FAQS, TESTIMONIALS } from '../constants';
import FAQAccordion from '../components/FAQAccordion';
import { SearchIcon, CheckCircleIcon, UsersIcon, CertificateIcon } from '../components/icons';

// Section Components defined outside the main component to prevent re-renders

const HeroSection: React.FC = () => (
    <section className="bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-4">Tu Club, ahora también Digital</h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Conéctate a tu club físico, aprende especialidades, guarda tu progreso y recibe certificados digitales aprobados por tus líderes.
            </p>
            <FindClubForm />
            <div className="mt-8 flex justify-center items-center space-x-6">
                <a href="https://conquistadores.app/signup" className="text-white font-semibold hover:text-highlight transition-colors">Crear mi cuenta (miembros)</a>
                <span className="text-gray-500">|</span>
                <a href="https://admin.conquistadores.app/login" className="text-white font-semibold hover:text-highlight transition-colors">Soy director/instructor (staff)</a>
            </div>
            <p className="mt-6 text-xs text-gray-400 max-w-md mx-auto">
                Requisitos y calendarios pueden variar por Asociación/Misión; confirma con tu dirigencia local.
            </p>
        </div>
    </section>
);

const FindClubForm: React.FC = () => (
    <form className="max-w-2xl mx-auto bg-white/10 backdrop-blur-sm p-4 rounded-xl md:flex md:space-x-2 space-y-2 md:space-y-0">
        <input 
            type="text" 
            placeholder="Código Postal o Ciudad" 
            className="w-full md:w-1/2 px-4 py-3 rounded-lg bg-white text-dark-text placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-highlight"
        />
        <select className="w-full md:w-1/2 px-4 py-3 rounded-lg bg-white text-dark-text focus:outline-none focus:ring-2 focus:ring-highlight">
            <option>Aventureros (4–9)</option>
            <option>Conquistadores (10–15)</option>
            <option>Guía Mayor (líderes)</option>
        </select>
        <button type="submit" className="w-full md:w-auto bg-accent hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 transition-transform transform hover:scale-105">
            <SearchIcon className="w-5 h-5"/>
            <span>Buscar Club</span>
        </button>
    </form>
);

const StepsSection: React.FC = () => {
    const steps = [
        { title: "Únete a tu club", description: "Vincula tu cuenta con tu club físico (código o aprobación del director)." },
        { title: "Aprende y practica", description: "Especialidades con lecciones, guías y checklist de evidencias." },
        { title: "Envía evidencias", description: "Fotos, archivos o cuestionarios; todo queda en tu portafolio." },
        { title: "Recibe certificado", description: "Un líder valida y obtienes tu certificado digital (folio y sello)." }
    ];
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-primary mb-12">¿Cómo funciona?</h2>
                <div className="grid md:grid-cols-4 gap-8 text-center">
                    {steps.map((step, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-accent text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">{index + 1}</div>
                            <h3 className="text-xl font-semibold text-dark-text mb-2">{step.title}</h3>
                            <p className="text-gray-600">{step.description}</p>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                    <a href="https://conquistadores.app/signup" target="_blank" rel="noopener noreferrer" className="bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 inline-block">
                        Probar la App
                    </a>
                </div>
            </div>
        </section>
    );
};

const BenefitsSection: React.FC = () => (
    <section className="py-16 bg-light-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-primary mb-6">Para familias y miembros</h3>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" /><span>Especialidades 24/7 con evaluaciones claras.</span></li>
                        <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" /><span>Portafolio automático con insignias y certificados.</span></li>
                        <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" /><span>Comunidad segura por club y por especialidad.</span></li>
                        <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" /><span>Metas visibles con recordatorios y progreso.</span></li>
                    </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-md">
                    <h3 className="text-2xl font-bold text-accent mb-6">Para líderes</h3>
                    <ul className="space-y-4 text-gray-700">
                        <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" /><span>Aprobaciones en 1 clic (rúbricas y comentarios).</span></li>
                        <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" /><span>Creación de contenidos (plantillas de especialidades).</span></li>
                        <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" /><span>Reportes por unidad/miembro/especialidad.</span></li>
                        <li className="flex items-start"><CheckCircleIcon className="w-6 h-6 text-accent mr-3 mt-1 flex-shrink-0" /><span>Trazabilidad de cada certificado emitido.</span></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
);

const CommunitySection: React.FC = () => (
    <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <UsersIcon className="w-16 h-16 mx-auto text-highlight mb-4"/>
            <h2 className="text-3xl font-bold mb-4">Comunidad Online Segura</h2>
            <p className="max-w-3xl mx-auto text-gray-300">
                Foros por club y programa, retos mensuales (servicio/naturaleza/Biblia), eventos en vivo y moderación por líderes. Recordatorios de protección infantil y normas de convivencia.
            </p>
        </div>
    </section>
);

const CertificatesSection: React.FC = () => (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 md:flex items-center gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
                 <CertificateIcon className="w-24 h-24 text-primary mx-auto md:mx-0 mb-4"/>
                <h2 className="text-3xl font-bold text-primary mb-4">Certificados Digitales Válidos</h2>
                <p className="text-lg text-gray-600 mb-6">Tus logros, reconocidos oficialmente y siempre a tu alcance.</p>
                <ul className="space-y-3 text-gray-700">
                    <li><strong>Qué incluyen:</strong> nombre, especialidad, fecha/hora, club, folio único y rol del aprobador.</li>
                    <li><strong>Dónde viven:</strong> en tu Portafolio digital, siempre descargable y compartible.</li>
                    <li><strong>Quién autoriza:</strong> el director o instructor de tu club (según políticas locales).</li>
                </ul>
            </div>
            <div className="md:w-1/2">
                <img src="https://picsum.photos/600/400?random=1" alt="Certificado digital de especialidad" className="rounded-lg shadow-xl" />
            </div>
        </div>
    </section>
);

const TestimonialsSection: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % TESTIMONIALS.length);
        }, 5000);
        return () => clearTimeout(timer);
    }, [currentIndex]);

    return (
        <section className="py-16 bg-light-bg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl font-bold text-primary mb-12">Lo que dice nuestra comunidad</h2>
                <div className="relative max-w-2xl mx-auto h-48">
                    {TESTIMONIALS.map((testimonial, index) => (
                         <div key={testimonial.id} className={`absolute w-full transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <p className="text-xl italic text-gray-700">"{testimonial.text}"</p>
                            <p className="mt-4 font-semibold text-dark-text">{testimonial.author}</p>
                            <p className="text-sm text-gray-500">{testimonial.role}</p>
                        </div>
                    ))}
                </div>
                 <div className="flex justify-center space-x-2 mt-4">
                    {TESTIMONIALS.map((_, index) => (
                        <button key={index} onClick={() => setCurrentIndex(index)} className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-primary' : 'bg-gray-300'}`}></button>
                    ))}
                </div>
            </div>
        </section>
    );
};

const FAQSummarySection: React.FC = () => (
    <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-primary mb-8">Preguntas Frecuentes</h2>
            <div className="max-w-3xl mx-auto">
                {FAQS.slice(0, 5).map(faq => (
                    <FAQAccordion key={faq.id} question={faq.question} answer={faq.answer} />
                ))}
            </div>
            <div className="text-center mt-8">
                <Link to="/preguntas" className="text-accent font-semibold hover:underline">
                    Ver todas las preguntas →
                </Link>
            </div>
        </div>
    </section>
);

const FinalCTASection: React.FC = () => (
    <section className="bg-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Lleva tu club al siguiente nivel</h2>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="https://conquistadores.app/signup" target="_blank" rel="noopener noreferrer" className="bg-accent hover:bg-green-600 text-white font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 w-full sm:w-auto">
                    Crear mi cuenta
                </a>
                <a href="https://admin.conquistadores.app/login" target="_blank" rel="noopener noreferrer" className="bg-highlight hover:bg-yellow-400 text-primary font-bold py-3 px-8 rounded-lg transition-transform transform hover:scale-105 w-full sm:w-auto">
                    Demo para líderes
                </a>
            </div>
        </div>
    </section>
);

const HomePage: React.FC = () => {
    return (
        <>
            <HeroSection />
            <StepsSection />
            <BenefitsSection />
            <CommunitySection />
            <CertificatesSection />
            <TestimonialsSection />
            <FAQSummarySection />
            <FinalCTASection />
        </>
    );
};

export default HomePage;
