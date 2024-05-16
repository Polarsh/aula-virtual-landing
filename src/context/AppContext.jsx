import { createContext, useContext, useState } from 'react'

import servicesJson from '../json/services.json'
import faqsJson from '../json/faqs.json'
import coursesJson from '../json/courses.json'
import partnershipsJson from '../json/partnerships.json'
import recognitionsJson from '../json/recognition.json'
import objetivesJson from '../json/objetives.json'
import valuesJson from '../json/values.json'
import testimonialsJson from '../json/testimonials.json'

import privacyPolicyJson from '../json/privacyPolicies.json'
import qualityPolicyJson from '../json/qualityPolicies.json'

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
        servicesList: servicesJson.servicesList,
        coursesList: coursesJson.coursesList,
        faqsList: faqsJson.faqsList,
        partnershipsList: partnershipsJson.partnershipsList,
        recognitionsList: recognitionsJson.recognitionsList,
        objetivesList: objetivesJson.objetivesList,
        valuesList: valuesJson.valuesList,
        testimonialsList: testimonialsJson.testimonialsList,
        privacyPolicyData: privacyPolicyJson.privacyPolicyData,
        qualityPolicyList: qualityPolicyJson.qualityPolicyList,
        statsList,
      }}>
      {children}
    </appContext.Provider>
  )
}
