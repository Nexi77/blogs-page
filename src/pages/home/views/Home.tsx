import Qualifications from '@/pages/home/views/Qualifications';
import Comments from '@/pages/comments/views/Comments';
import Form from '@/pages/comments/views/Form';
import ServicesSection from '@/pages/home/views/ServicesSection';

function Home() {
    return (
        <>
            <ServicesSection />
            <Qualifications />
            <Comments />
            <Form />
        </>
       
    )
}

export default Home;