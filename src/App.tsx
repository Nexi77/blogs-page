import section from './assets/styles/main-layout/section.module.scss'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App" style={{ overflowX: 'hidden' }}>
      <section className={section.section}>
        <h2 className="sr-only">
          Page navigation and  hero section
        </h2>
        <Nav />
        <Hero />
      </section>
      <Outlet />
    </div>
  )
}

export default App
