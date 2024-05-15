import { Outlet } from 'react-router-dom'
import NavBarComponent from './NavBar'
import FooterComponent from './Footer'

export default function PageLayout() {
  return (
    <div className='bg-white'>
      <NavBarComponent />
      <main className='w-full pb-24'>
        <Outlet />
      </main>
      <FooterComponent />
    </div>
  )
}
