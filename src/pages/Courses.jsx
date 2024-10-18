import { Link } from 'react-router-dom'
import BackgroundComponent from '../components/Background'
import { useApp } from '../context/AppContext'

export default function CoursesPage() {
  const { coursesList } = useApp()

  return (
    <div>
      {/* Título */}
      <BackgroundComponent>
        <h1 className='text-4xl text-center font-bold tracking-tight text-white sm:text-6xl'>
          Cursos
        </h1>
      </BackgroundComponent>
      {/* Valores */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mt-16 sm:mt-10'>
          {/* Título */}
          <div className='mx-auto lg:mx-0'>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Explora nuestra amplia gama de cursos diseñados para estudiantes y
              profesionales de la salud. Desde fundamentos básicos hasta
              especializaciones avanzadas, nuestros cursos están diseñados para
              proporcionarte las habilidades y el conocimiento necesarios para
              destacar en tu carrera médica.
            </p>
          </div>
          {/* Contenido */}
          <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-x-8 gap-y-16 text-base leading-7 lg:mx-0 lg:max-w-none'>
            {coursesList.map((course, index) => (
              <Link
                key={course.name}
                to={course.to}
                className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'>
                <div className=' bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-56'>
                  <img
                    src={'course.webp'}
                    alt={course.imageAlt}
                    className='h-full w-full object-cover object-center sm:h-full sm:w-full'
                  />
                </div>
                <div className='flex flex-1 flex-col space-y-2 p-4'>
                  <h3 className='text-base font-bold text-my-primary'>
                    <span aria-hidden='true' className='absolute inset-0' />
                    {course.name}
                  </h3>
                  <p className='text-sm text-gray-500'>{course.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
