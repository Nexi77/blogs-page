import qual from '@/assets/styles/qualifications/qualifications.module.scss'
import { useQuery } from 'react-query';
import { fetchExperience } from "@/pages/home/services";
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import SingleQual from './components/SingleQual';
import { motion } from 'framer-motion';

function Qualifications(){

    const { data, error } = useQuery('experience', fetchExperience, {
        refetchOnWindowFocus: true
    })

    
    return (
        <section className={qual.section}>
            <h2 className="sr-only">
                Section with my qualifications listed
            </h2>
            <motion.div 
                    className="container"
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, staggerChildren: 0.4 }}
                    viewport={{ once: true, amount: 0.2 }}
                >
                    <motion.div className={qual.wrapper}>
                        <h3>Qualification</h3>
                        <h2>My Experience</h2>
                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has</p>
                    </motion.div>
                    <div 
                    className={qual.exp_grid_wrapper}
                >
                    { !data && 
                        <SkeletonTheme baseColor="#202020" highlightColor="#444" >
                            <p>
                                <Skeleton count={4} />
                            </p>
                        </SkeletonTheme> 
                    }
                    <>
                        {
                            error && <p className={qual.error}>Error occured while trying to fetch qualificatons data, referesh the page and try again</p>
                        }
                        { !error && data && (
                            <div className={qual.exp_grid}>
                            { 
                                data.map(exp => (
                                    <SingleQual key={exp.id} exp={exp}  />
                                ))
                            }
                            </div>
                        )}
                    </>
                </div>
            </motion.div> 
        </section>
    )
}

export default Qualifications;