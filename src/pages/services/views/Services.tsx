import service from '@/assets/styles/services/services_article.module.scss';
import { motion } from 'framer-motion'

function Services(){
    return (
        <section className={service.service_section}>
            <h2 className="sr-only">
                Text about services I can offer
            </h2>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, staggerChildren: 0.4 }}
                    className={service.text_section}
                >
                    <h3>Services</h3>
                    <h2>Lorem ipsum</h2>
                    <motion.div 
                        className={service.column_grid}>
                        <motion.div>
                            <motion.p
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim ut tenetur itaque nulla cum quasi, modi deleniti et possimus aperiam! In quidem iure, maiores vel soluta vitae eius eligendi!
                                Odit magnam neque ea quasi! Deleniti voluptas hic omnis nemo cupiditate quisquam, doloribus explicabo laudantium perferendis? Inventore officia modi sunt molestiae? Repudiandae sequi quia qui numquam eius illo necessitatibus delectus?
                                Mollitia voluptatem distinctio maiores nulla, beatae consequuntur. Eveniet aperiam natus atque aspernatur similique recusandae necessitatibus debitis? Eos accusantium provident sequi necessitatibus exercitationem, tenetur, error ratione ut eaque veritatis incidunt architecto!
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim ut tenetur itaque nulla cum quasi, modi deleniti et possimus aperiam! In quidem iure, maiores vel soluta vitae eius eligendi!
                                Odit magnam neque ea quasi! Deleniti voluptas hic omnis nemo cupiditate quisquam, doloribus explicabo laudantium perferendis? Inventore officia modi sunt molestiae? Repudiandae sequi quia qui numquam eius illo necessitatibus delectus?
                                Mollitia voluptatem distinctio maiores nulla, beatae consequuntur. Eveniet aperiam natus atque aspernatur similique recusandae necessitatibus debitis? Eos accusantium provident sequi necessitatibus exercitationem, tenetur, error ratione ut eaque veritatis incidunt architecto!
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim ut tenetur itaque nulla cum quasi, modi deleniti et possimus aperiam! In quidem iure, maiores vel soluta vitae eius eligendi!
                                Odit magnam neque ea quasi! Deleniti voluptas hic omnis nemo cupiditate quisquam, doloribus explicabo laudantium perferendis? Inventore officia modi sunt molestiae? Repudiandae sequi quia qui numquam eius illo necessitatibus delectus?
                                Mollitia voluptatem distinctio maiores nulla, beatae consequuntur. Eveniet aperiam natus atque aspernatur similique recusandae necessitatibus debitis? Eos accusantium provident sequi necessitatibus exercitationem, tenetur, error ratione ut eaque veritatis incidunt architecto!
                            </motion.p>
                        </motion.div>
                        <motion.div>
                            <motion.p
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim ut tenetur itaque nulla cum quasi, modi deleniti et possimus aperiam! In quidem iure, maiores vel soluta vitae eius eligendi!
                            Odit magnam neque ea quasi! Deleniti voluptas hic omnis nemo cupiditate quisquam, doloribus explicabo laudantium perferendis? Inventore officia modi sunt molestiae? Repudiandae sequi quia qui numquam eius illo necessitatibus delectus?
                            Mollitia voluptatem distinctio maiores nulla, beatae consequuntur. Eveniet aperiam natus atque aspernatur similique recusandae necessitatibus debitis? Eos accusantium provident sequi necessitatibus exercitationem, tenetur, error ratione ut eaque veritatis incidunt architecto!</motion.p>
                            <motion.p
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: 0.5 }}
                            >Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim ut tenetur itaque nulla cum quasi, modi deleniti et possimus aperiam! In quidem iure, maiores vel soluta vitae eius eligendi!
                            Odit magnam neque ea quasi! Deleniti voluptas hic omnis nemo cupiditate quisquam, doloribus explicabo laudantium perferendis? Inventore officia modi sunt molestiae? Repudiandae sequi quia qui numquam eius illo necessitatibus delectus?
                            Mollitia voluptatem distinctio maiores nulla, beatae consequuntur. Eveniet aperiam natus atque aspernatur similique recusandae necessitatibus debitis? Eos accusantium provident sequi necessitatibus exercitationem, tenetur, error ratione ut eaque veritatis incidunt architecto!</motion.p>
                            <motion.p 
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5, delay: 0.5 }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim ut tenetur itaque nulla cum quasi, modi deleniti et possimus aperiam! In quidem iure, maiores vel soluta vitae eius eligendi!
                            Odit magnam neque ea quasi! Deleniti voluptas hic omnis nemo cupiditate quisquam, doloribus explicabo laudantium perferendis? Inventore officia modi sunt molestiae? Repudiandae sequi quia qui numquam eius illo necessitatibus delectus?
                            Mollitia voluptatem distinctio maiores nulla, beatae consequuntur. Eveniet aperiam natus atque aspernatur similique recusandae necessitatibus debitis? Eos accusantium provident sequi necessitatibus exercitationem, tenetur, error ratione ut eaque veritatis incidunt architecto!</motion.p>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    )
}

export default Services;