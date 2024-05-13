import { Route, Routes, useLocation } from 'react-router-dom'
import { AppProvider } from './context/AppContext'
import PageLayout from './Layout/PageLayout'
import HomePage from './pages/landing/Home'
import ErrorPage from './pages/landing/Error'
import { useEffect } from 'react'
import AboutPage from './pages/landing/About'
import CoursesPage from './pages/landing/Courses'
import PartnershipsPage from './pages/landing/Partnerships'
import RecognitionPage from './pages/landing/Recognition'

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
          <Route path='cursos' element={<CoursesPage />} />
          <Route path='convenios' element={<PartnershipsPage />} />
          <Route path='reconocimientos' element={<RecognitionPage />} />

          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </AppProvider>
  )
}
