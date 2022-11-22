import { ServiceModel } from "@/pages/home/services";
import servicesStyles from '@/assets/styles/home/services.module.scss'
import SvgIcon from "@/components/SvgIcon";
import { motion } from "framer-motion";

function SingleService({ service }: SingleServiceProps) {
    return (
        <motion.div 
            className={servicesStyles.single_service} 
            initial={{ opacity: 0, scale: 0.5 }} 
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
        >
            <div className={servicesStyles.icon}>
                <SvgIcon iconName={`${service.id}`} svgProp={{ width: 20, height: 20 }} wrapperStyle={`${servicesStyles.icon_wrapper}`} />
            </div>
            <h3>{ service.name }</h3>
            <p>{ service.description }</p>
        </motion.div>
    )
}

interface SingleServiceProps {
    service: ServiceModel
}

export default SingleService;