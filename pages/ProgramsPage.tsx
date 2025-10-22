
import React from 'react';
import { PROGRAMS } from '../constants';
import { Program } from '../types';

const ProgramCard: React.FC<{ program: Program }> = ({ program }) => (
    <div className={`flex flex-col justify-between rounded-lg shadow-lg overflow-hidden text-white ${program.color}`}>
        <div className="p-6">
            <h3 className="text-sm font-bold uppercase tracking-wider">{program.age}</h3>
            <h2 className="text-3xl font-bold mt-1">{program.name}</h2>
            <p className="mt-4 text-gray-200">{program.description}</p>
        </div>
        <div className="p-6 bg-black bg-opacity-20">
            <a 
                href={`https://conquistadores.app/signup?program=${program.param}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="font-bold hover:underline"
            >
                Unirme a este programa →
            </a>
        </div>
    </div>
);

const ProgramsPage: React.FC = () => {
    return (
        <div className="bg-white py-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-primary">Nuestros Programas</h1>
                    <p className="mt-2 text-lg text-gray-600">Desde la infancia hasta el liderazgo, un camino de crecimiento y servicio.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-8">
                    {PROGRAMS.map(program => (
                        <ProgramCard key={program.id} program={program} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProgramsPage;
