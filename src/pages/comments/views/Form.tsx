import comments from '@/assets/styles/comments/comments.module.scss';
import { motion } from 'framer-motion';

function Form() {
    return (
        <section>
            <h2 className="sr-only">
                Form to create a new comment
            </h2>
            <div className={comments.comments_container}>
                <h2 className={comments.form_header}>Add comment</h2>
                <motion.form
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, staggerChildren: 0.4 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className={comments.form}
                >
                    <div className={comments.form_row}>
                        <div className={comments.input_wrapper}>
                            <input type="text" placeholder='Your Name' />
                        </div>
                        <div className={comments.input_wrapper}>
                            <input type="email" placeholder='Your email *' />
                        </div>
                    </div>
                    <div className={comments.input_wrapper}>
                        <textarea rows={5}></textarea>
                    </div>
                    <button type="submit" className={`btn ${comments.submit_button}`}>Send</button>
                </motion.form>
            </div>
        </section>
    )
}

export default Form