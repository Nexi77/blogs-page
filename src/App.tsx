import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import LayoutHeader from '@/components/LayoutHeader';

function App() {
  return (
    <div className="App" style={{ overflowX: 'hidden' }}>
      <LayoutHeader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default App
