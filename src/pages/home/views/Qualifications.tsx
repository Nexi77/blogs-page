import qual from '@/assets/styles/qualifications/qualifications.module.scss'
import { useQuery } from 'react-query';
import { fetchExperience } from "@/pages/home/services";
import GenericDiv from '@/components/GenericAnimatedDiv'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import SingleQual from '@/pages/experience/components/SingleQual';


const GenericSkeleton = () => (
    <SkeletonTheme baseColor="#202020" highlightColor="#444" >
        <p>
            <Skeleton count={4} />
        </p>
    </SkeletonTheme> 
)

const GenericError = () => <p className="error">Error occured while trying to fetch qualificatons data, referesh the page and try again</p>

const Qualifications = () => {

    const { data, status, isLoading } = useQuery('experience', fetchExperience, {
        refetchOnWindowFocus: true
    })
    
    return (
        <section>
            <h2 className="sr-only">
                Section with my qualifications listed
            </h2>
            <GenericDiv className="container" amount={0.2}>
                <div className={qual.wrapper}>
                    <h3>Qualification</h3>
                    <h2>My Experience</h2>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has</p>
                </div>
                <div className={qual.exp_grid_wrapper}>
                { isLoading && <GenericSkeleton /> }
                { status === "error" && <GenericError /> }
                { data && (
                    <div className={qual.exp_grid}>
                        {data.map(exp => (
                            <SingleQual key={exp.id} exp={exp}  />
                        ))}
                    </div>
                )}
                </div>
            </GenericDiv> 
        </section>
    )
}

export default Qualifications;