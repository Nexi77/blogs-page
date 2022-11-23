import { Outlet } from 'react-router-dom';
import Footer from '@/components/Footer';
import Comments from '@/pages/comments/views/Comments';
import LayoutHeader from '@/components/LayoutHeader';
import Form from '@/pages/comments/views/Form';

function App() {
  return (
    <div className="App" style={{ overflowX: 'hidden' }}>
      <LayoutHeader />
      <main>
        <Outlet />
        <Comments />
        <Form />
      </main>
      <Footer />
    </div>
  )
}

export default App
