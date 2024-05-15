import BackgroundComponent from '../components/Background'
import { useApp } from '../context/AppContext'

export default function PartnershipsPage() {
  const { partnershipsList } = useApp()

  return (
    <div>
      {/* Título */}
      <BackgroundComponent>
        <h1 className='text-4xl text-center font-bold tracking-tight text-white sm:text-6xl'>
          Convenios
        </h1>
      </BackgroundComponent>
      {/* Valores */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mt-16 sm:mt-10'>
          {/* Título */}
          <div className='mx-auto lg:mx-0'>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Descubre nuestras alianzas estratégicas en el ámbito de la salud
              que enriquecen tu experiencia educativa y profesional. Explora
              nuestras colaboraciones con instituciones líderes y accede a
              oportunidades únicas para tu desarrollo académico y personal.
            </p>
          </div>
          {/* Contenido */}
          <div className='grid grid-cols-1 gap-x-6 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
            {partnershipsList.map(course => (
              <div key={course.name} className='group'>
                <div className='aspect-h-1 aspect-w-1 w-full shadow-lg overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 bg-gray-400 h-96'>
                  <img
                    src={course.imagePath}
                    alt={course.imageAlt}
                    className='h-full w-full object-cover object-center group-hover:opacity-75'
                  />
                </div>
                <div className='mt-4 flex items-center justify-center text-base font-medium text-gray-900'>
                  <h3>{course.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
