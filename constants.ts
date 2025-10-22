
import { FAQItem, Testimonial, Program } from './types';

export const FAQS: FAQItem[] = [
  {
    id: 'q1',
    question: '¿Debo pertenecer a un club físico?',
    answer: 'Sí; el módulo digital complementa, no reemplaza, la experiencia invaluable del club presencial, sus actividades y la comunidad.',
  },
  {
    id: 'q2',
    question: '¿Los certificados cuentan para mi investidura?',
    answer: 'Sí. Una vez que tus evidencias son aprobadas por la dirigencia de tu club conforme a los reglamentos de tu Asociación/Misión local, son válidos para tu investidura.',
  },
  {
    id: 'q3',
    question: '¿La plataforma tiene algún costo?',
    answer: 'Los costos asociados a los clubes (licencia de la app, uniforme, eventos, etc.) pueden variar. Consulta con tu director de club local para obtener información específica.',
  },
  {
    id: 'q4',
    question: '¿Cómo protegen la información y seguridad de los menores?',
    answer: 'Nuestra comunidad es moderada por líderes capacitados. Cumplimos con las políticas de protección infantil y seguridad de datos locales e internacionales para garantizar un entorno seguro.',
  },
  {
    id: 'q5',
    question: '¿Puedo cambiarme de club si me mudo?',
    answer: '¡Claro! Tu portafolio digital, con todas tus especialidades y progreso, viaja contigo. Tu nuevo director de club podrá aprobar tu transferencia para que continúes donde te quedaste.',
  },
   {
    id: 'q6',
    question: '¿Qué tipo de evidencias puedo subir?',
    answer: 'Puedes subir fotos, videos cortos, documentos (PDF, Word) y responder cuestionarios interactivos. Todo se guarda de forma organizada en tu portafolio personal.',
  },
  {
    id: 'q7',
    question: '¿Necesito acceso a internet todo el tiempo?',
    answer: 'Necesitas internet para sincronizar tu progreso, descargar materiales y subir evidencias. Sin embargo, muchas guías y lecciones se pueden descargar para consultarlas sin conexión.',
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: 'La app hace que aprender especialidades sea más interactivo y fácil de seguir. ¡A mis hijos les encanta coleccionar las insignias digitales!',
    author: 'Familia Rojas',
    role: 'Miembros, Club Antorcha',
  },
  {
    id: 2,
    text: 'Aprobar evidencias con un clic ha optimizado mi tiempo increíblemente. Los reportes de progreso son claros y muy útiles para la planificación.',
    author: 'Ana Torres',
    role: 'Directora, Club Centurión',
  },
  {
    id: 3,
    text: 'Tener todo mi portafolio de Guía Mayor en un solo lugar es fantástico. Facilita mucho el seguimiento para mi investidura.',
    author: 'Carlos Vega',
    role: 'Guía Mayor en Formación',
  },
];

export const PROGRAMS: Program[] = [
  {
    id: 'aventureros',
    name: 'Aventureros',
    age: '4–9 años',
    description: 'Un ministerio enfocado en la familia que ayuda a los niños a desarrollar una relación con Jesús a través de un currículo activo y divertido basado en "Mi Dios, Yo, Mi Familia, Mi Mundo".',
    param: 'aventureros',
    color: 'bg-sky-600',
  },
  {
    id: 'conquistadores',
    name: 'Conquistadores',
    age: '10–15 años',
    description: 'Un programa global que fomenta el desarrollo integral de los jóvenes a través de la fe, el servicio comunitario, el amor por la naturaleza, las especialidades y el liderazgo.',
    param: 'conquistadores',
    color: 'bg-red-700',
  },
  {
    id: 'guias-mayores',
    name: 'Guía Mayor',
    age: 'Líderes',
    description: 'El nivel más alto de liderazgo dentro de los Conquistadores, enfocado en la formación avanzada, el servicio a la iglesia y la comunidad, y la mentoría de las nuevas generaciones.',
    param: 'gm',
    color: 'bg-yellow-600',
  },
];
