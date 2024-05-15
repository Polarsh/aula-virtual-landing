import { UserGroupIcon } from '@heroicons/react/20/solid'

import { createContext, useContext, useState } from 'react'

// Se usa en Home y Services
const servicesList = [
  {
    name: 'Aula virtual',
    description:
      'Nuestros servicios de desarrollo de software están diseñados para impulsar la innovación y el crecimiento de tu empresa en el mundo digital. Desde el diseño de aplicaciones personalizadas hasta la implementación de soluciones empresariales, nuestro equipo experto te acompaña en cada etapa del proceso, asegurando productos de calidad que satisfacen tus necesidades y objetivos comerciales.',
    to: '/contacto',
    icon: UserGroupIcon,
    imagePath: '/services/develop.png',
    imageAlt: 'Aula virtual',
  },
  {
    name: 'Videoclases',
    description:
      'Ofrecemos una amplia gama de servicios de tecnología de la información diseñados para optimizar y mejorar la eficiencia de tu empresa. Desde soporte técnico hasta soluciones de infraestructura, estamos aquí para cubrir todas tus necesidades tecnológicas.',
    to: '/contacto',
    icon: UserGroupIcon,
    imagePath: '/services/servicios-ti.jpg',
    imageAlt: 'Texto de imagen de Servicios de TI',
  },
  {
    name: 'Videoteca',
    description:
      'Nuestros expertos en ciberseguridad trabajan incansablemente para proteger tus datos y sistemas contra amenazas digitales. Con soluciones avanzadas y un enfoque proactivo, garantizamos la integridad y confidencialidad de tu información.',
    to: '/contacto',
    icon: UserGroupIcon,
    imagePath: '/services/cyber.jpg',
    imageAlt: 'Texto de imagen de Ciberseguridad',
  },
  {
    name: 'Simulacros',
    description:
      'Aprovecha al máximo el poder y la flexibilidad de la nube con nuestras soluciones de computación en la nube. Desde la migración de datos hasta la gestión de plataformas, te ayudamos a impulsar la innovación y la escalabilidad de tu negocio.',
    to: '/contacto',
    icon: UserGroupIcon,
    imagePath: '/services/cloud.png',
    imageAlt: 'Texto de imagen de Cloud Computing',
  },
  {
    name: 'Metodología',
    description:
      'Nuestros servicios de cableado de red garantizan una infraestructura de comunicaciones sólida y confiable para tu empresa. Desde la planificación y diseño hasta la implementación y mantenimiento, nos aseguramos de que tu red esté optimizada para satisfacer las demandas de tu negocio, ofreciendo conexiones seguras y velocidades de transferencia de datos eficientes.',
    to: '/contacto',
    icon: UserGroupIcon,
    imagePath: '/services/cableado.jpg',
    imageAlt: 'Texto de imagen de Soluciones de cableado de red',
  },
  {
    name: 'Manuales',
    description:
      'Diseñamos y gestionamos infraestructuras tecnológicas sólidas y confiables que impulsan el crecimiento y la competitividad de tu empresa. Desde redes hasta servidores, nos encargamos de todos los aspectos para garantizar un rendimiento óptimo y una disponibilidad constante.',
    to: '/contacto',
    icon: UserGroupIcon,
    imagePath: '/services/develop.png',
    imageAlt: 'Texto de imagen de Infraestructura',
  },
  {
    name: 'IA',
    description:
      'Diseñamos y gestionamos infraestructuras tecnológicas sólidas y confiables que impulsan el crecimiento y la competitividad de tu empresa. Desde redes hasta servidores, nos encargamos de todos los aspectos para garantizar un rendimiento óptimo y una disponibilidad constante.',
    to: '/contacto',
    icon: UserGroupIcon,
    imagePath: '/services/develop.png',
    imageAlt: 'Texto de imagen de Infraestructura',
  },
  {
    name: 'Descuentos',
    description:
      'Diseñamos y gestionamos infraestructuras tecnológicas sólidas y confiables que impulsan el crecimiento y la competitividad de tu empresa. Desde redes hasta servidores, nos encargamos de todos los aspectos para garantizar un rendimiento óptimo y una disponibilidad constante.',
    to: '/contacto',
    icon: UserGroupIcon,
    imagePath: '/services/develop.png',
    imageAlt: 'Texto de imagen de Infraestructura',
  },
  {
    name: 'Mentoring',
    description:
      'Nuestros servicios de cableado de red garantizan una infraestructura de comunicaciones sólida y confiable para tu empresa. Desde la planificación y diseño hasta la implementación y mantenimiento, nos aseguramos de que tu red esté optimizada para satisfacer las demandas de tu negocio, ofreciendo conexiones seguras y velocidades de transferencia de datos eficientes.',
    to: '/contacto',
    icon: UserGroupIcon,
    imagePath: '/services/cableado.jpg',
    imageAlt: 'Texto de imagen de Soluciones de cableado de red',
  },
  {
    name: 'Aplicación Móvil',
    description:
      'Diseñamos y gestionamos infraestructuras tecnológicas sólidas y confiables que impulsan el crecimiento y la competitividad de tu empresa. Desde redes hasta servidores, nos encargamos de todos los aspectos para garantizar un rendimiento óptimo y una disponibilidad constante.',
    to: '/contacto',
    icon: UserGroupIcon,
    imagePath: '/services/develop.png',
    imageAlt: 'Texto de imagen de Infraestructura',
  },
  {
    name: 'Promociones',
    description:
      'Diseñamos y gestionamos infraestructuras tecnológicas sólidas y confiables que impulsan el crecimiento y la competitividad de tu empresa. Desde redes hasta servidores, nos encargamos de todos los aspectos para garantizar un rendimiento óptimo y una disponibilidad constante.',
    to: '/contacto',
    icon: UserGroupIcon,
    imagePath: '/services/develop.png',
    imageAlt: 'Texto de imagen de Infraestructura',
  },
  {
    name: 'Banqueo',
    description:
      'Diseñamos y gestionamos infraestructuras tecnológicas sólidas y confiables que impulsan el crecimiento y la competitividad de tu empresa. Desde redes hasta servidores, nos encargamos de todos los aspectos para garantizar un rendimiento óptimo y una disponibilidad constante.',
    to: '/contacto',
    icon: UserGroupIcon,
    imagePath: '/services/develop.png',
    imageAlt: 'Texto de imagen de Infraestructura',
  },
]

const coursesList = [
  {
    name: 'Simulacros nacionales',
    description:
      'Prepárate con nuestros simulacros nacionales para enfrentar con éxito tus exámenes y pruebas de residencia. Obtén acceso a una amplia variedad de preguntas y escenarios que te ayudarán a familiarizarte con el formato y el nivel de dificultad de los exámenes reales.',
    to: '/cursos/simulacros-nacionales',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Simulacros nacionales',
  },
  {
    name: 'Ciencias básicas 2024',
    description:
      'Domina las ciencias básicas con nuestro curso diseñado para estudiantes de medicina. Aprende los conceptos fundamentales de anatomía, fisiología, bioquímica y más, con materiales didácticos de alta calidad y expertos en la materia.',
    to: '/cursos/ciencias-basicas-2024',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Ciencias básicas 2024',
  },
  {
    name: 'Ciencias básicas intensivo 2024',
    description:
      'Intensifica tu preparación con nuestro curso de ciencias básicas intensivo. Con clases dinámicas y prácticas, te ofrecemos una revisión exhaustiva de los temas clave para ayudarte a alcanzar tus objetivos académicos.',
    to: '/cursos/ciencias-basicas-intensivo-2024',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Ciencias básicas intensivo 2024',
  },
  {
    name: 'Curso SERUMS 2024',
    description:
      'Prepárate para tu servicio rural y urbano marginal de salud (SERUMS) con nuestro curso especializado. Obtén los conocimientos y las habilidades necesarias para desempeñarte de manera efectiva en entornos de atención médica desafiante y hacer una diferencia positiva en la vida de las personas.',
    to: '/cursos/curso-serums-2024',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Curso SERUMS 2024',
  },
  {
    name: 'Preinternado Anual 2024',
    description:
      'Prepárate para tu preinternado anual con nuestro curso completo. Aprende de profesionales experimentados y adquiere experiencia práctica en una variedad de especialidades médicas para estar mejor preparado para tu próxima etapa de formación.',
    to: '/cursos/preinternado-anual-2024',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Preinternado Anual 2024',
  },
  {
    name: 'ENAM 2024',
    description:
      'Domina el Examen Nacional de Medicina (ENAM) con nuestro curso especializado. Con material de estudio exhaustivo y simulacros de examen, te ayudamos a prepararte para este desafío crucial en tu carrera médica.',
    to: '/cursos/enam-2024',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'ENAM 2024',
  },
  {
    name: 'Subespecialidad 2024',
    description:
      'Especialízate en el área de tu elección con nuestro curso de subespecialidad. Con un enfoque práctico y personalizado, te ayudamos a desarrollar las habilidades y el conocimiento necesarios para sobresalir en tu campo de especialización.',
    to: '/cursos/subespecialidad-2024',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Subespecialidad 2024',
  },
]

const partnershipsList = [
  {
    name: 'Convenio 1',
    description: 'description',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Convenio 1',
  },
  {
    name: 'Convenio 2',
    description: 'description',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Convenio 2',
  },
  {
    name: 'Convenio 3',
    description: 'description',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Convenio 3',
  },
  {
    name: 'Convenio 4',
    description: 'description',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Convenio 4',
  },
  {
    name: 'Convenio 5',
    description: 'description',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Convenio 5',
  },
]

const recognitionsList = [
  {
    name: 'Reconocimiento 1',
    description: 'description',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Reconocimiento 1',
  },
  {
    name: 'Reconocimiento 2',
    description: 'description',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Reconocimiento 2',
  },
  {
    name: 'Reconocimiento 3',
    description: 'description',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Reconocimiento 3',
  },
  {
    name: 'Reconocimiento 4',
    description: 'description',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Reconocimiento 4',
  },
  {
    name: 'Reconocimiento 5',
    description: 'description',
    icon: UserGroupIcon,
    imagePath: 'https://i.stack.imgur.com/5ykYD.png',
    imageAlt: 'Reconocimiento 5',
  },
]

const objetivesList = [
  {
    name: 'Objetivo 1',
    description:
      'Nuestros cursos están diseñados para proporcionarte una experiencia educativa de calidad en el área de la salud. Desde la teoría hasta la práctica, nuestro objetivo es brindarte los conocimientos y habilidades necesarios para destacar en tu campo profesional.',
    icon: UserGroupIcon,
    imagePath: '/objectives/objective_1.png',
    imageAlt: 'Objetivo 1',
  },
  {
    name: 'Objetivo 2',
    description:
      'Nos esforzamos por ofrecerte una plataforma de aprendizaje innovadora y efectiva que se adapte a tus necesidades de formación en el área de la salud. Nuestro objetivo es proporcionarte recursos y herramientas que enriquezcan tu experiencia educativa.',
    icon: UserGroupIcon,
    imagePath: '/objectives/objective_2.png',
    imageAlt: 'Objetivo 2',
  },
  {
    name: 'Objetivo 3',
    description:
      'Nos comprometemos a apoyarte en tu desarrollo profesional en el área de la salud. Nuestro objetivo es ayudarte a alcanzar tus metas académicas y profesionales ofreciéndote cursos y recursos educativos de alta calidad y relevancia.',
    icon: UserGroupIcon,
    imagePath: '/objectives/objective_3.png',
    imageAlt: 'Objetivo 3',
  },
  {
    name: 'Objetivo 4',
    description:
      'Nuestro objetivo es fomentar el aprendizaje continuo y el crecimiento profesional en el campo de la salud. A través de nuestros cursos y programas de capacitación, aspiramos a contribuir al desarrollo y la excelencia en el ejercicio de tu profesión.',
    icon: UserGroupIcon,
    imagePath: '/objectives/objective_4.png',
    imageAlt: 'Objetivo 4',
  },
]

const testimonialsList = [
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
    author: {
      name: 'Leslie Alexander',
      handle: 'lesliealexander',
      imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More testimonials...
]

// Se usa en Home
const statsList = [
  { id: 1, name: 'Estudiantes graduados', value: '+100' },
  { id: 2, name: 'Promedio de calificaciones', value: '17.2' },
  { id: 3, name: 'Colocación laboral', value: '95%' },
  { id: 4, name: 'Programas de estudio completados', value: '10' },
]

export const appContext = createContext()

export const useApp = () => {
  const context = useContext(appContext)
  return context
}

export function AppProvider({ children }) {
  const [alertMessage, setAlertMessage] = useState(null)
  const [loading, setLoading] = useState(false)

  return (
    <appContext.Provider
      value={{
        alertMessage,
        setAlertMessage,
        loading,
        setLoading,
        servicesList,
        coursesList,
        partnershipsList,
        recognitionsList,
        objetivesList,
        testimonialsList,
        statsList,
      }}>
      {children}
    </appContext.Provider>
  )
}
