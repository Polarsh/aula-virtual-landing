import BackgroundComponent from '../../components/Background'
import { useApp } from '../../context/AppContext'

export default function QualityPolicyPage() {
  const { qualityPolicyList } = useApp()

  return (
    <div>
      {/* Título */}
      <BackgroundComponent>
        <h1 className='text-4xl text-center font-bold tracking-tight text-white sm:text-6xl'>
          Políticas de calidad
        </h1>
      </BackgroundComponent>
      {/* Descripción */}
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='mt-16 sm:mt-10'>
          <div className='mx-auto lg:mx-0'>
            <p className='mt-6 text-lg leading-8 text-gray-600 text-justify'>
              En Renuevate, estamos comprometidos con la excelencia en la
              entrega de productos/servicios de alta calidad que satisfagan y
              superen las expectativas de nuestros clientes. Nuestro objetivo es
              ser reconocidos como líderes en nuestro sector, ofreciendo
              soluciones innovadoras y confiables que impulsen el éxito de
              nuestros clientes y contribuyan al crecimiento sostenible de la
              empresa.
            </p>
          </div>
        </div>
      </div>

      {/* Políticas */}
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        {qualityPolicyList.map((qualityPolicy, index) => (
          <div key={qualityPolicy.title} className='mt-16 sm:mt-10'>
            <div className='mx-auto lg:mx-0'>
              {/* Titulos */}
              <h2 className='mt-6 text-lg font-bold leading-8 text-gray-600 text-justify'>
                {qualityPolicy.title}
              </h2>
              <div className='mt-2 text-lg leading-8 text-gray-600 text-justify'>
                {/* Textos */}
                {qualityPolicy.descriptionList.map((description, index) => (
                  <p key={index} className='mb-2'>
                    {description}
                  </p>
                ))}
                {/* Lista */}
                <ul className='list-disc pl-6'>
                  {qualityPolicy.list &&
                    qualityPolicy.list.map((value, index) => (
                      <li key={index} className='mb-2'>
                        {value}
                      </li>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
