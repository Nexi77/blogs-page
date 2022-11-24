import { ServiceModel } from "@/pages/home/services";
import servicesStyles from '@/assets/styles/home/services.module.scss'
import SvgIcon from "@/components/SvgIcon";
import GenericDiv from '@/components/GenericAnimatedDiv'

const SingleService = ({ service }: SingleServiceProps) => (
    <GenericDiv className={servicesStyles.single_service} amount={0.6}>
        <div className={servicesStyles.icon}>
            <SvgIcon iconName={`${service.id}`} svgProp={{ width: 20, height: 20 }} wrapperStyle={`${servicesStyles.icon_wrapper}`} />
        </div>
        <h3>{ service.name }</h3>
        <p>{ service.description }</p>
    </GenericDiv>
)
interface SingleServiceProps {
    service: ServiceModel
}

export default SingleService;