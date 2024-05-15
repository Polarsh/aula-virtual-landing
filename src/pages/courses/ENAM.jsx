import { Link, useLocation } from 'react-router-dom'
import { useApp } from '../../context/AppContext'
import BackgroundComponent from '../../components/Background'
import { UserGroupIcon } from '@heroicons/react/20/solid'

const enrollmentSteps = [
  {
    name: 'Registrarse',
    description:
      'Inicia tu viaje registrándote en nuestra plataforma. Es fácil y rápido. ¡Solo toma unos minutos!',
    icon: UserGroupIcon,
    imagePath: '/enrollmentSteps/step_1.png',
    imageAlt: 'Registrarse',
  },
  {
    name: 'Realizar el pago',
    description:
      'Después de registrarte, procede a realizar el pago para confirmar tu inscripción. Aceptamos diversas formas de pago para mayor comodidad.',
    icon: UserGroupIcon,
    imagePath: '/enrollmentSteps/step_2.png',
    imageAlt: 'Realizar el pago',
  },
  {
    name: 'Acceso al contenido',
    description:
      'Una vez completado el pago, obtendrás acceso completo al contenido del curso. ¡Comienza a aprender y mejorar tus habilidades de inmediato!',
    icon: UserGroupIcon,
    imagePath: '/enrollmentSteps/step_3.png',
    imageAlt: 'Acceso al contenido',
  },
]

export default function CourseDetailPage() {
  const { coursesList } = useApp()
  const location = useLocation()

  const currentCourse = coursesList.find(
    course => course.to === location.pathname
  )

  return (
    <div>
      {/* Título */}
      <BackgroundComponent>
        <h1 className='text-4xl text-center font-bold tracking-tight text-white sm:text-6xl'>
          {currentCourse.name}
        </h1>
      </BackgroundComponent>
      {/* Descripción */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mt-16 sm:mt-10'>
          <div className='mx-auto lg:mx-0'>
            <p className='mt-6 text-lg leading-8 text-gray-600 text-center'>
              {currentCourse.description}
            </p>
          </div>
        </div>
      </div>

      {/* Metodología */}
      <div className='mx-auto mt-24 max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8'>
          <div className='lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Metodología
            </h2>
            <p className='mt-6 text-xl leading-8 text-gray-600 text-justify'>
              Duis aliquip culpa minim fugiat dolor labore magna Lorem laboris
              do dolor reprehenderit culpa eiusmod. Eiusmod veniam laborum
              aliqua ex cillum reprehenderit ullamco ullamco labore pariatur sit
              eiusmod commodo. Irure ea reprehenderit adipisicing amet cillum
              voluptate commodo elit dolore qui commodo labore. Mollit pariatur
              proident irure aliqua nostrud commodo sunt ad. Commodo dolor
              voluptate culpa laboris adipisicing ex occaecat ipsum. Quis elit
              nostrud do commodo ad.
            </p>
            <div className='mt-10 flex gap-x-6'>
              <Link
                href='#'
                className='rounded-md bg-my-primary text-white px-3.5 py-2.5 text-sm font-semibold shadow-sm hover:bg-my-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'>
                Matricúlate ahora
              </Link>
              <Link
                href='#'
                className='text-sm font-semibold leading-6 text-black flex items-center hover:text-my-primary'>
                Descarga el brochure<span aria-hidden='true'>→</span>
              </Link>
            </div>
          </div>
          <div className='flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents'>
            <div className='w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end'>
              <img
                src='https://i.stack.imgur.com/5ykYD.png'
                alt=''
                className='w-[32rem] max-w-none rounded-2xl bg-gray-50 object-cover'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contenido */}
      <div className='mx-auto mt-24 max-w-7xl px-6 lg:px-8'>
        <div className='mt-16 sm:mt-10'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Contenido del curso.
            </h2>
            <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600'>
              Aprende con nuestro completo y detallado contenido diseñado para
              ayudarte a dominar cada aspecto relevante de la materia.
            </p>
            <div className='w-full mt-6 flex items-center justify-center lg:ml-auto lg:w-auto'>
              <img
                src='https://i.stack.imgur.com/5ykYD.png'
                alt=''
                className='w-[32rem] max-w-none rounded-2xl bg-gray-50 object-cover'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Inversión */}
      <div className='mx-auto mt-24 max-w-7xl px-6 lg:px-8'>
        <div className='mt-16 sm:mt-10'>
          <div className='mx-auto max-w-2xl text-center'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Inversión.
            </h2>
            <div className='w-full mt-6 flex items-center justify-center lg:ml-auto lg:w-auto'>
              <img
                src='https://i.stack.imgur.com/5ykYD.png'
                alt=''
                className='w-[32rem] max-w-none rounded-2xl bg-gray-50 object-cover'
              />
            </div>
          </div>
        </div>
      </div>

      {/* Matrícula */}
      <div className='mt-16 sm:mt-10 '>
        <BackgroundComponent borders={true}>
          <div className='mx-auto lg:mx-0 text-center text-white px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              Proceso de matrícula
            </h2>
            <p className='mt-6 text-lg leading-8'>
              Descubre cómo inscribirte en nuestros cursos de forma sencilla y
              rápida. Te guiaremos en cada paso para que puedas comenzar tu
              aprendizaje sin complicaciones.
            </p>
          </div>
          {/* Iconos */}
          <div className='mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-none'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3'>
              {enrollmentSteps.map(step => (
                <div key={step.name} className='flex flex-col items-center'>
                  <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                    <div className='p-2 rounded-lg text-center text-white flex flex-col items-centers'>
                      <step.icon
                        className=' h-48 w-48 text-my-primary mb-4 mx-auto'
                        aria-hidden='true'
                      />
                      <div className=' font-bold text-lg'>{step.name}</div>
                      <div className=' text-base'>{step.description}</div>
                    </div>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </BackgroundComponent>
      </div>

      {/* CTA */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mt-16 sm:mt-10'>
          <div className='px-6 py-24 sm:px-6 sm:py-32 lg:px-8'>
            <div className='mx-auto max-w-2xl text-center'>
              <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
                Impulsa tu carrera médica.
                <br />
                Matricúlate en nuestros cursos hoy.
              </h2>
              <p className='mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600'>
                Comienza tu camino hacia el éxito con nuestros cursos completos
                diseñados para ayudarte a destacarte en tu carrera médica.
              </p>
              <div className='mt-10 flex items-center justify-center gap-x-6'>
                <a
                  href='#'
                  className='rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                  Matricúlate ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
