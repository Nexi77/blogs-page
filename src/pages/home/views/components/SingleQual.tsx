import { ExperienceModel } from "@/pages/home/services";
import { motion } from "framer-motion";
import qual from '@/assets/styles/qualifications/qualifications.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBehance, faDribbble } from '@fortawesome/free-brands-svg-icons';
import { formatDate } from "@/lib/utils";

function SingleQual ({ exp }: SingleExpProps) {

    const iconPicker = (company: string) => {
        switch(company) {
            case 'Behancer':
                return faBehance;
            case 'Dribbble':
                return faDribbble;
            default: return faBehance;
        }
    }

    return (
        <motion.div 
            className={qual.single_block} 
            initial={{ opacity: 0, scale: 0.5 }} 
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.6 }}
        >
            <div className={qual.company_row}>
                <div className={qual.icon}>
                    <FontAwesomeIcon icon={iconPicker(exp.company)} />
                </div>
                <div>
                    <h4>{ exp.company }</h4>
                    <span className={qual.time}>{ `${formatDate(exp.from)} - ${formatDate(exp.to)}`}</span>
                </div>
            </div>
            <div className={qual.text}>
                <h4 className={qual.tile_title}>{`${exp.id}. ${exp.company}`}</h4>
                <p className={qual.desc}> { exp.description }</p>
            </div>
        </motion.div>
    )
}

interface SingleExpProps {
    exp: ExperienceModel
}

export default SingleQual;