import { fetchServices } from "@/pages/home/services";
import { useQuery } from "react-query";
import servicesStyles from '@/assets/styles/home/services.module.scss'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import SingleService from "../../services/components/SingleService";

const GenericSkeleton = () => (
    <SkeletonTheme baseColor="#202020" highlightColor="#444" >
        <p>
            <Skeleton count={4} />
        </p>
    </SkeletonTheme> 
)

const GenericError = () => <p className="error">Error occured while trying to fetch service data, referesh the page and try again</p>

const Services = () => {

    const { data, isLoading, status } = useQuery('services', fetchServices, {
        refetchOnWindowFocus: true
    })

    if(isLoading) return <GenericSkeleton />

    if(status === "error") return <GenericError />

    return (
        <div className={servicesStyles.services_grid_wrapper}>
            <div className={servicesStyles.services_grid}>
            { data?.map(service => (
                <SingleService key={service.id} service={service}  />
            ))}
            </div>
        </div>
    )
}

export default Services;