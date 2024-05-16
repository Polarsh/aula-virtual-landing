import { Route, Routes, useLocation } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import PageLayout from './Layout/PageLayout'
import HomePage from './pages/Home'
import ErrorPage from './pages/Error'
import { useEffect } from 'react'
import AboutPage from './pages/About'
import CoursesPage from './pages/Courses'
import PartnershipsPage from './pages/Partnerships'
import RecognitionPage from './pages/Recognition'
import CourseDetailPage from './pages/courses/ENAM'
import PrivacyPolicyPage from './pages/others/PrivacyPolicy'
import QualityPolicyPage from './pages/others/QualityPolicy'
import FaqsPage from './pages/others/Faqs'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <AppProvider>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<PageLayout />}>
          <Route index element={<HomePage />} />
          <Route path='nosotros' element={<AboutPage />} />
          <Route path='convenios' element={<PartnershipsPage />} />
          <Route path='reconocimientos' element={<RecognitionPage />} />

          {/* Urls de compañia */}
          <Route
            path='politicas-de-privacidad'
            element={<PrivacyPolicyPage />}
          />
          <Route path='politicas-de-calidad' element={<QualityPolicyPage />} />
          <Route path='preguntas-frecuentes' element={<FaqsPage />} />

          {/* Cursos */}
          <Route path='cursos/'>
            <Route index element={<CoursesPage />} />
            <Route
              path='simulacros-nacionales'
              element={<CourseDetailPage />}
            />
            <Route
              path='ciencias-basicas-2024'
              element={<CourseDetailPage />}
            />
            <Route
              path='ciencias-basicas-intensivo-2024'
              element={<CourseDetailPage />}
            />
            <Route path='curso-serums-2024' element={<CourseDetailPage />} />
            <Route
              path='preinternado-anual-2024'
              element={<CourseDetailPage />}
            />
            <Route path='enam-2024' element={<CourseDetailPage />} />
            <Route path='subespecialidad-2024' element={<CourseDetailPage />} />
          </Route>

          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppProvider>
  )
}
