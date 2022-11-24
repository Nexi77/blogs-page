import services from '@/assets/styles/home/services.module.scss'
import ServicesGrid from '@/pages/home/views/Services';
import GenericDiv from '@/components/GenericAnimatedDiv'

const ServicesSection = () => (
    <section>
        <h2 className='sr-only'>
            Section with Services I can offer to you
        </h2>
        <GenericDiv className="container" amount={0.2}>
            <div className={services.wrapper}>
                <h3>What we do</h3>
                <h2>Better Services For You</h2>
                <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has</p>
            </div>
            <ServicesGrid />
        </GenericDiv>
    </section>
)

export default ServicesSection;