import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBars, faHandHoldingHeart, faBrain, faComment, faHouse } from '@fortawesome/free-solid-svg-icons'
import logo from '@/assets/images/global/logo.png'
import styles from '@/assets/styles/main-layout/header.module.scss'
import { useToggle } from '@/hooks/useToggle'

const Nav = () => {

    const { state , setToFalse, toggle} = useToggle()

    return (
      <header>
        <div className="container">
          <div className={`${styles.nav_wrapper}`}>
            <Link to="/">
                <img src={logo} alt="Logo of my portfolio site" className={styles.logo} />
            </Link>
            <nav 
              role="navigation" 
              aria-label="main-navigation" 
              className={`${styles.main_nav} ${state ? styles.show : ''}`}>
              <ul className={styles.link_list}>
                <li>
                  <NavLink to="/" className={styles.link} onClick={() => setToFalse()}>
                      <FontAwesomeIcon icon={ faHouse } className={styles.icon} />
                      Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="services#services" className={styles.link} onClick={() => setToFalse()}>
                      <FontAwesomeIcon icon={ faHandHoldingHeart } className={styles.icon} />
                      Services
                  </NavLink>
                </li>
                <li>
                  <NavLink to="experience#experience" className={styles.link} onClick={() => setToFalse()}>
                      <FontAwesomeIcon icon={ faBrain } className={styles.icon} />
                      Experience
                  </NavLink>
                </li>
                <li>
                  <a href="#comments" className={`${styles.link} btn btn-link`} onClick={() => setToFalse()}>
                      <FontAwesomeIcon icon={ faComment } className={styles.icon} />
                      Comments
                  </a>
                </li>
              </ul>
            </nav>
            <button 
              type='button' 
              aria-label="toggle mobile menu" 
              className={styles.menu_toggle}
              onClick={() => toggle()}
            >
              <FontAwesomeIcon icon={faBars} aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>
    )
}

export default Nav;