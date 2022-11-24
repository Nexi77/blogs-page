import { motion, Variants } from 'framer-motion'
import { jumpInVariant } from '@/lib/variants';

interface Props {
    children: React.ReactNode,
    className: string | undefined,
    variants?: Variants | undefined,
    amount?: number | undefined
}

const GenericAnimatedDiv = ({ children, className, variants, amount }: Props) => (
    <motion.div
        variants={ variants || jumpInVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: amount || 0 }}
        transition={{ duration: 0.4}}
        className={className}
    >
        { children }
    </motion.div>
)

export default GenericAnimatedDiv;