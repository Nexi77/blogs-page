import services from '@/assets/styles/home/services.module.scss'
import { motion } from 'framer-motion'
import ServicesGrid from '@/pages/home/views/Services';

function Home() {
    return (
        <section className={services.section}>
            <h2 className='sr-only'>
                Section with Services I can offer to you
            </h2>
            <motion.div 
                className="container"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, staggerChildren: 0.4 }}
                viewport={{ once: true, amount: 0.6 }}
            >
                <motion.div className={services.wrapper}>
                    <h3>What we do</h3>
                    <h2>Better Services For You</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has</p>
                </motion.div>
                <ServicesGrid />
            </motion.div>
        </section>
    )
}

export default Home;