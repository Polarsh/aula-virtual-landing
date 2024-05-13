import BackgroundComponent from '../../components/Background'
import LogoComponent from '../../components/Logo'
import { useApp } from '../../context/AppContext'

const values = [
  {
    name: 'Compromiso con la excelencia educativa',
    description:
      'Nos comprometemos a ofrecer soluciones educativas de primer nivel en el campo de la salud. Nuestra búsqueda constante de la excelencia nos permite proporcionarte herramientas y recursos de aprendizaje de alta calidad para tu desarrollo profesional.',
  },
  {
    name: 'Transparencia y ética académica',
    description:
      'Valoramos la transparencia en todas nuestras interacciones académicas. Nos comprometemos a ser honestos y claros en nuestras comunicaciones, proporcionándote la información que necesitas para tener éxito en tu educación en el área de la salud.',
  },
  {
    name: 'Protección de la privacidad del estudiante',
    description:
      'Nos tomamos muy en serio la privacidad de tus datos educativos. Nuestro compromiso es mantener la confidencialidad y la seguridad de la información que nos confías, cumpliendo con los más altos estándares de protección de datos y cumplimiento normativo.',
  },
  {
    name: 'Innovación en la educación continua',
    description:
      'Nos esforzamos por estar a la vanguardia de la tecnología y las mejores prácticas educativas en el área de la salud. Nos comprometemos a buscar constantemente nuevas soluciones y técnicas para mejorar tu experiencia de aprendizaje y mantenerte actualizado en tu campo.',
  },
  {
    name: 'Soporte personalizado al estudiante',
    description:
      'Nuestro equipo está aquí para apoyarte en tu viaje educativo. Nos comprometemos a brindarte un soporte excepcional, respondiendo rápidamente a tus necesidades y ofreciéndote el apoyo necesario para que alcances tus metas académicas en el área de la salud.',
  },
  {
    name: 'Enfoque centrado en el estudiante',
    description:
      'Nos dedicamos a comprender tus necesidades educativas y proporcionarte soluciones personalizadas. Nuestro enfoque centrado en el estudiante nos permite adaptar nuestros servicios para satisfacer tus requisitos específicos y garantizar tu éxito en tu carrera profesional en el área de la salud.',
  },
]

export default function AboutPage() {
  const { objetivesList } = useApp()

  return (
    <div>
      {/* Título */}
      <BackgroundComponent>
        <h1 className='text-4xl text-center font-bold tracking-tight text-white sm:text-6xl'>
          Nosotros
        </h1>
      </BackgroundComponent>

      {/* Quienes somos */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mt-16 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='mx-auto lg:mx-0'>
            <h1 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              ¿Quienes somos?
            </h1>
            <div className='mt-6 flex flex-col gap-x-8 gap-y-20 '>
              <div className='lg:w-full lg:flex-auto'>
                <p className='text-xl text-justify leading-8 text-gray-600'>
                  Do minim est proident veniam enim cupidatat fugiat magna ea
                  dolor consectetur esse. Pariatur veniam proident deserunt
                  exercitation cupidatat veniam magna culpa nisi voluptate
                  voluptate adipisicing excepteur incididunt. Magna ea culpa
                  occaecat ea et ullamco nulla elit. Ullamco exercitation nisi
                  ut velit minim. Qui dolor labore sint eu occaecat deserunt ut
                  nisi anim consequat elit mollit anim velit. Ipsum laborum
                  magna minim et dolor minim occaecat irure laborum consequat
                  Lorem esse est nostrud. Anim qui fugiat nulla velit aliquip ad
                  magna quis sit laboris ex ad incididunt.
                </p>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center'>
            <LogoComponent size={48} />
          </div>
        </div>
      </div>

      {/* Vision / Mision */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mt-16 sm:mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10'>
          <div className='mx-auto lg:mx-0'>
            <h2 className='font-semibold tracking-tight text-gray-900'>
              Visión
            </h2>
            <div className='mt-1 flex flex-col gap-x-8 gap-y-20'>
              <p className='text-base text-justify leading-8 text-gray-600'>
                Elit labore Lorem labore ullamco enim exercitation eu consequat
                Lorem eu amet. Enim ex ex dolor veniam esse laborum. Ea elit
                consequat labore Lorem ipsum officia mollit. Id do aliquip ipsum
                cillum id culpa ut ipsum eu voluptate mollit nisi esse. In magna
                duis ut commodo nulla. Exercitation elit quis ex dolore laborum.
              </p>
            </div>
          </div>
          <div className='mx-auto lg:mx-0'>
            <h2 className='font-semibold tracking-tight text-gray-900'>
              Misión
            </h2>
            <div className='mt-1 flex flex-col gap-x-8 gap-y-20'>
              <p className='text-base text-justify leading-8 text-gray-600'>
                Consequat ea voluptate dolor nostrud nisi ut reprehenderit culpa
                quis eu occaecat. Culpa ut velit pariatur dolor nisi ut
                cupidatat duis. Magna ex reprehenderit proident elit ipsum culpa
                magna sint reprehenderit. Esse in amet sint enim cupidatat.
                Ullamco deserunt pariatur dolore ipsum ex ad elit ad ad eu amet
                ipsum dolore. Consequat amet enim fugiat ex sint laboris veniam
                eiusmod sit. Cillum exercitation consequat culpa irure quis
                labore velit do aute.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Objetivos */}
      <div className='mt-16 sm:mt-10 '>
        <BackgroundComponent borders={true}>
          <div className='mx-auto lg:mx-0 text-center text-white px-6 lg:px-8'>
            <h2 className='text-3xl font-bold tracking-tight sm:text-4xl'>
              Nuestros objetivos
            </h2>
            <p className='mt-6 text-lg leading-8'>
              Magna pariatur elit Lorem dolore magna laboris quis cupidatat non
              culpa elit do deserunt irure. Esse magna laboris do ipsum minim
              culpa. Ex dolore reprehenderit dolor ullamco enim adipisicing
              consequat sint sit nulla. Tempor est Lorem do in commodo minim
              cillum enim do. Non sint enim deserunt ex sit sit consectetur
              magna.
            </p>
          </div>
          {/* Iconos */}
          <div className='mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-16 lg:max-w-none'>
            <dl className='grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4'>
              {objetivesList.map(feature => (
                <div key={feature.name} className='flex flex-col items-center'>
                  <dt className='flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900'>
                    <div className='p-2 rounded-lg text-center text-white'>
                      <feature.icon
                        className=' h-48 w-48 flex-none text-my-primary'
                        aria-hidden='true'
                      />
                      {feature.name}
                    </div>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </BackgroundComponent>
      </div>

      {/* Valores */}
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mt-16 sm:mt-10'>
          <div className='mx-auto lg:mx-0'>
            <h2 className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              Nuestros valores
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
          <dl className='mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'>
            {values.map(value => (
              <div key={value.name}>
                <dt className='font-semibold text-gray-900'>{value.name}</dt>
                <dd className='mt-1 text-gray-600 text-justify'>
                  {value.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
