import section from '@/assets/styles/main-layout/section.module.scss'
import Hero from '@/components/Hero'
import Nav from '@/components/Nav'

const LayoutHeader = () => (
    <section className={section.section}>
        <h2 className="sr-only">
            Page navigation and  hero section
        </h2>
        <Nav />
        <Hero />
    </section>
)

export default LayoutHeader;