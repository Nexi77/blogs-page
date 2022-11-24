import { motion } from 'framer-motion'
import { jumpInVariant } from '@/lib/variants';

interface Props {
    children: React.ReactNode
}

const GenericAnimatedParagraph = ({ children }: Props) => (
    <motion.p  
        variants={jumpInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
    >
        { children }
    </motion.p>
)

export default GenericAnimatedParagraph;