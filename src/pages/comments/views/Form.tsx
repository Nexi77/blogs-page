/* eslint-disable react/jsx-props-no-spreading */
import comments from '@/assets/styles/comments/comments.module.scss';
import { motion } from 'framer-motion';
import { z } from 'zod'
import { SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useMutation } from 'react-query';
import queryClient from '@/config/react-query';
import { postComment } from '@/pages/home/services';
import { jumpInVariant } from '@/lib/variants';

const FormSchema = z.object({
    name: z.string(),
    email: z.string().min(1, { message: 'Email cannot be empty'}).email({ message: 'Invalid email'}),
    content: z.string().min(3, { message: "Must be at least 3 characters long"})
})

export type FormSchemaType = z.infer<typeof FormSchema>

function Form() {

    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormSchemaType>({
        resolver: zodResolver(FormSchema)
    })

    const { isLoading, mutate } = useMutation(postComment, {
        onSuccess: () => {
            queryClient.invalidateQueries('comments')
            reset()
        },
    })

    const onSubmit:SubmitHandler<FormSchemaType> = (data) => {
        mutate(data)
    }

    return (
        <section>
            <h2 className="sr-only">
                Form to create a new comment
            </h2>
            <div className={comments.comments_container}>
                <h2 className={comments.form_header}>Add comment</h2>
                <motion.form
                    variants={jumpInVariant}
                    initial="hidden"
                    whileInView="visible"
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.2 }}
                    className={comments.form}
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className={comments.form_row}>
                        <div className="input_wrapper">
                            <input type="text" placeholder='Your Name' {...register('name')} disabled={isLoading} />
                            { errors.name && <span className="form-error">{ errors.name.message }</span>}
                        </div>
                        <div className='input_wrapper'>
                            <input type="email" placeholder='Your email*' {...register('email')} disabled={isLoading} />
                            { errors.email && <span className="form-error">{ errors.email.message }</span>}
                        </div>
                    </div>
                    <div className='input_wrapper'>
                        <textarea rows={5} placeholder="Your message*" {...register('content')} disabled={isLoading} />
                        { errors.content && <span className="form-error">{ errors.content.message }</span>}
                    </div>
                    <button type="submit" className={`btn ${comments.submit_button}`} disabled={isLoading}>Send</button>
                </motion.form>
            </div>
        </section>
    )
}

export default Form