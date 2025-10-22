
import React, { useState, useMemo } from 'react';
import { FAQS } from '../constants';
import FAQAccordion from '../components/FAQAccordion';
import { SearchIcon } from '../components/icons';

const FullFAQPage: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredFAQs = useMemo(() => {
        if (!searchTerm) {
            return FAQS;
        }
        return FAQS.filter(faq => 
            faq.question.toLowerCase().includes(searchTerm.toLowerCase()) || 
            faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
        );
    }, [searchTerm]);

    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary">Preguntas Frecuentes</h1>
                    <p className="mt-2 text-lg text-gray-600">Encuentra respuestas a tus dudas sobre la plataforma.</p>
                </div>

                <div className="max-w-3xl mx-auto mb-8">
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Buscar en preguntas..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        />
                        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400" />
                    </div>
                </div>

                <div className="max-w-3xl mx-auto">
                    {filteredFAQs.length > 0 ? (
                        filteredFAQs.map(faq => (
                            <FAQAccordion key={faq.id} question={faq.question} answer={faq.answer} />
                        ))
                    ) : (
                        <p className="text-center text-gray-600 mt-8">No se encontraron resultados para "{searchTerm}".</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default FullFAQPage;
