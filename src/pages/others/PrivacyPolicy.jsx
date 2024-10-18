/* eslint-disable no-unused-vars */
import BackgroundComponent from '../../components/Background'
import { useApp } from '../../context/AppContext'

export default function PrivacyPolicyPage() {
  const { privacyPolicyData } = useApp()

  return (
    <div>
      {/* Título */}
      <BackgroundComponent>
        <h1 className='text-4xl text-center font-bold tracking-tight text-white sm:text-6xl'>
          Políticas de privacidad
        </h1>
      </BackgroundComponent>
      {/* Descripción */}
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='mt-16 sm:mt-10'>
          <div className='mx-auto lg:mx-0'>
            <p className='mt-6 text-lg leading-8 text-gray-600 text-justify'>
              En Aula Virtual, valoramos y respetamos tu privacidad. Esta Política
              de Privacidad explica cómo recopilamos, usamos y protegemos la
              información personal que nos proporcionas cuando utilizas nuestros
              servicios. Esta compañía está comprometida con la seguridad de los
              datos de sus usuarios. Cuando le pedimos llenar los campos de
              información personal con la cual usted pueda ser identificado, lo
              hacemos asegurando que sólo se empleará de acuerdo con los
              términos de este documento. Sin embargo, esta Política de
              Privacidad puede cambiar con el tiempo o ser actualizada, por lo
              que le recomendamos y enfatizamos revisar continuamente esta
              página para asegurarse que está de acuerdo con dichos cambios.
            </p>
          </div>
        </div>
      </div>

      {/* Políticas */}
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        {privacyPolicyData.privacyPolicyList.map((privacyPolicy, index) => (
          <div key={privacyPolicy.title} className='mt-16 sm:mt-10'>
            <div className='mx-auto lg:mx-0'>
              {/* Titulos */}
              <h2 className='mt-6 text-lg font-bold leading-8 text-gray-600 text-justify'>
                {privacyPolicy.title}
              </h2>
              <div className='mt-2 text-lg leading-8 text-gray-600 text-justify'>
                {/* Textos */}
                {privacyPolicy.descriptionList.map((description, index) => (
                  <p key={index} className='mb-2'>
                    {description}
                  </p>
                ))}
                {/* Lista */}
                <ul className='list-disc pl-6'>
                  {privacyPolicy.list &&
                    privacyPolicy.list.map((value, index) => (
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

      {/* Fecha */}
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        <div className='mt-16 sm:mt-10 text-end text-base leading-8 text-gray-600'>
          Fecha de última actualización: {privacyPolicyData.updateDate}
        </div>
      </div>
    </div>
  )
}
