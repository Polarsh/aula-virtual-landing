import BackgroundComponent from '../../components/Background'
import { useApp } from '../../context/AppContext'

export default function FaqsPage() {
  const { faqsList } = useApp()

  return (
    <div>
      {/* Título */}
      <BackgroundComponent>
        <h1 className='text-4xl text-center font-bold tracking-tight text-white sm:text-6xl'>
          Preguntas frecuentes
        </h1>
      </BackgroundComponent>
      <div className='mx-auto max-w-6xl px-6 lg:px-8'>
        {faqsList.map(faqs => (
          <div key={faqs.name} className='mt-16 sm:mt-10'>
            <div className='mx-auto lg:mx-0'>
              {/* Título */}
              <h2 className='text-2xl font-bold leading-10 tracking-tight text-gray-900'>
                {faqs.name}
              </h2>
              {/* Preguntas */}
              <dl className='mt-10 space-y-8 divide-y divide-gray-900/10'>
                {faqs.faqs.map(faq => (
                  <div
                    key={faq.question}
                    className='pt-8 lg:grid lg:grid-cols-12 lg:gap-8'>
                    <dt className='text-base font-semibold leading-7 text-gray-900 lg:col-span-5'>
                      {faq.question}
                    </dt>
                    <dd className='mt-4 lg:col-span-7 lg:mt-0'>
                      <p className='text-base leading-7 text-gray-600'>
                        {faq.answer}
                      </p>
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
