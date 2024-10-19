import BackgroundComponent from '../components/Background'
import { useApp } from '../context/AppContext'

export default function RecognitionPage() {
  const { recognitionsList } = useApp()

  return (
    <div>
      {/* Título */}
      <BackgroundComponent>
        <h1 className='text-4xl text-center font-bold tracking-tight text-white sm:text-6xl'>
          Reconocimientos
        </h1>
      </BackgroundComponent>
      {/* Valores */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mt-16 sm:mt-10'>
          {/* Título */}
          <div className='mx-auto lg:mx-0'>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Descubre los logros y reconocimientos que respaldan nuestra
              excelencia académica y compromiso con la calidad educativa. En
              Aula virtual, nos enorgullece ser reconocidos por nuestra
              contribución al campo de la educación médica y el éxito de
              nuestros estudiantes y profesionales de la salud.
            </p>
          </div>
          {/* Contenido */}
          <div className='grid grid-cols-1 gap-x-6 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8'>
            {recognitionsList.map(course => (
              <div key={course.name} className='group'>
                <div className='aspect-h-1 aspect-w-1 w-full shadow-lg overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2 bg-gray-400'>
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
