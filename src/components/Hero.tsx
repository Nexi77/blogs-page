import hero from '@/assets/styles/main-layout/hero.module.scss'
import image from '@/assets/images/gallery/model.png'
import { motion } from "framer-motion"
function Hero() {
    return (
        <div className="container">
            <div className={hero.hero_wrapper}>
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className={hero.text_wrapper}>
                    <p>Hello!</p>
                    <h1 className={hero.text_header}>
                        I am <span className={hero.stand_out}>HRS</span> Pathan <br />
                        Creative UI/UX Designer
                    </h1>
                    <ol className={hero.list}>
                        <li>UI/UX Design</li>
                        <li>Product Design</li>
                        <li>Web Design</li>
                        <li>Front-end Design</li>
                    </ol>
                </motion.div>
                <motion.div 
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1}}
                    initial={{ opacity: 0}}
                >
                    <img src={image} className={hero.model} alt='Man looking up with his hand on his chin' />
                </motion.div>
            </div>
        </div>
    )
}

export default Hero;