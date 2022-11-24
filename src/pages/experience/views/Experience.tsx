import service from '@/assets/styles/services/services_article.module.scss';
import GenericDiv from '@/components/GenericAnimatedDiv'
import GenericP from '@/components/GenericAnimatedParagraph'
import { useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

const Experience = () => {

    const section = useRef<HTMLElement>(null);
    const { hash } = useLocation();
    useLayoutEffect(() => {
        if(hash)
            section.current?.scrollIntoView()
    })
    
    return (
        <section className={service.service_section} id="experience" ref={section}>
            <h2 className="sr-only">
                Text about my experience I got through my journey as frontend dev
            </h2>
            <div className="container">
                <GenericDiv className={service.text_section}>
                    <h3>Experience</h3>
                    <h2>Lorem ipsum</h2>
                    <div className={service.column_grid}>
                        <div>
                            <GenericP>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim ut tenetur itaque nulla cum quasi, modi deleniti et possimus aperiam! In quidem iure, maiores vel soluta vitae eius eligendi!
                                Odit magnam neque ea quasi! Deleniti voluptas hic omnis nemo cupiditate quisquam, doloribus explicabo laudantium perferendis? Inventore officia modi sunt molestiae? Repudiandae sequi quia qui numquam eius illo necessitatibus delectus?
                                Mollitia voluptatem distinctio maiores nulla, beatae consequuntur. Eveniet aperiam natus atque aspernatur similique recusandae necessitatibus debitis? Eos accusantium provident sequi necessitatibus exercitationem, tenetur, error ratione ut eaque veritatis incidunt architecto!
                            </GenericP>
                            <GenericP>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim ut tenetur itaque nulla cum quasi, modi deleniti et possimus aperiam! In quidem iure, maiores vel soluta vitae eius eligendi!
                                Odit magnam neque ea quasi! Deleniti voluptas hic omnis nemo cupiditate quisquam, doloribus explicabo laudantium perferendis? Inventore officia modi sunt molestiae? Repudiandae sequi quia qui numquam eius illo necessitatibus delectus?
                                Mollitia voluptatem distinctio maiores nulla, beatae consequuntur. Eveniet aperiam natus atque aspernatur similique recusandae necessitatibus debitis? Eos accusantium provident sequi necessitatibus exercitationem, tenetur, error ratione ut eaque veritatis incidunt architecto!
                            </GenericP>
                            <GenericP>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim ut tenetur itaque nulla cum quasi, modi deleniti et possimus aperiam! In quidem iure, maiores vel soluta vitae eius eligendi!
                                Odit magnam neque ea quasi! Deleniti voluptas hic omnis nemo cupiditate quisquam, doloribus explicabo laudantium perferendis? Inventore officia modi sunt molestiae? Repudiandae sequi quia qui numquam eius illo necessitatibus delectus?
                                Mollitia voluptatem distinctio maiores nulla, beatae consequuntur. Eveniet aperiam natus atque aspernatur similique recusandae necessitatibus debitis? Eos accusantium provident sequi necessitatibus exercitationem, tenetur, error ratione ut eaque veritatis incidunt architecto!
                            </GenericP>
                        </div>
                        <div>
                            <GenericP>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim ut tenetur itaque nulla cum quasi, modi deleniti et possimus aperiam! In quidem iure, maiores vel soluta vitae eius eligendi!
                                Odit magnam neque ea quasi! Deleniti voluptas hic omnis nemo cupiditate quisquam, doloribus explicabo laudantium perferendis? Inventore officia modi sunt molestiae? Repudiandae sequi quia qui numquam eius illo necessitatibus delectus?
                                Mollitia voluptatem distinctio maiores nulla, beatae consequuntur. Eveniet aperiam natus atque aspernatur similique recusandae necessitatibus debitis? Eos accusantium provident sequi necessitatibus exercitationem, tenetur, error ratione ut eaque veritatis incidunt architecto!
                            </GenericP>
                            <GenericP>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim ut tenetur itaque nulla cum quasi, modi deleniti et possimus aperiam! In quidem iure, maiores vel soluta vitae eius eligendi!
                                Odit magnam neque ea quasi! Deleniti voluptas hic omnis nemo cupiditate quisquam, doloribus explicabo laudantium perferendis? Inventore officia modi sunt molestiae? Repudiandae sequi quia qui numquam eius illo necessitatibus delectus?
                                Mollitia voluptatem distinctio maiores nulla, beatae consequuntur. Eveniet aperiam natus atque aspernatur similique recusandae necessitatibus debitis? Eos accusantium provident sequi necessitatibus exercitationem, tenetur, error ratione ut eaque veritatis incidunt architecto!</GenericP>
                            <GenericP>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. At, enim ut tenetur itaque nulla cum quasi, modi deleniti et possimus aperiam! In quidem iure, maiores vel soluta vitae eius eligendi!
                                Odit magnam neque ea quasi! Deleniti voluptas hic omnis nemo cupiditate quisquam, doloribus explicabo laudantium perferendis? Inventore officia modi sunt molestiae? Repudiandae sequi quia qui numquam eius illo necessitatibus delectus?
                                Mollitia voluptatem distinctio maiores nulla, beatae consequuntur. Eveniet aperiam natus atque aspernatur similique recusandae necessitatibus debitis? Eos accusantium provident sequi necessitatibus exercitationem, tenetur, error ratione ut eaque veritatis incidunt architecto!
                            </GenericP>
                        </div>
                    </div>
                </GenericDiv>
            </div>
        </section>
    )
}

export default Experience;