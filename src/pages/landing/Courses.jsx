import BackgroundComponent from '../../components/Background'
import { useApp } from '../../context/AppContext'

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
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Nuestros cursos
            </h2>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Magna pariatur elit Lorem dolore magna laboris quis cupidatat non
              culpa elit do deserunt irure. Esse magna laboris do ipsum minim
              culpa. Ex dolore reprehenderit dolor ullamco enim adipisicing
              consequat sint sit nulla. Tempor est Lorem do in commodo minim
              cillum enim do. Non sint enim deserunt ex sit sit consectetur
              magna.
            </p>
          </div>
          {/* Contenido */}
          <div className='mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-16 gap-x-8 gap-y-16 text-base leading-7 lg:mx-0 lg:max-w-none'>
            {coursesList.map((course, index) => (
              <div
                key={course.name}
                className='group relative flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white'
                style={{ cursor: 'pointer' }}>
                <div className=' bg-gray-200 sm:aspect-none group-hover:opacity-75 sm:h-56'>
                  <img
                    src={course.imagePath}
                    alt={course.imageAlt}
                    className='h-full w-full object-cover object-center sm:h-full sm:w-full'
                  />
                </div>
                <div className='flex flex-1 flex-col space-y-2 p-4'>
                  <h3 className='text-base font-bold text-gray-900'>
                    <a href={course.href} className=' text-my-primary'>
                      <span aria-hidden='true' className='absolute inset-0' />
                      {course.name}
                    </a>
                  </h3>
                  <p className='text-sm text-gray-500'>{course.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
