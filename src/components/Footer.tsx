import footer from '@/assets/styles/main-layout/footer.module.scss'

function Footer(){
    return (
        <footer className={footer.footer}>
            <span>Copyright &copy; <span style={{ fontWeight: 800}}>2019 Robi-pixel</span> All Rights Reserved.</span>
        </footer>
    )
}

export default Footer;