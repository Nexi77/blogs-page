import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import {  faBars, faHandHoldingHeart, faBrain, faComment } from '@fortawesome/free-solid-svg-icons'
import logo from '@/assets/images/global/logo.png'
import styles from '@/assets/styles/main-layout/header.module.scss'
import { useState } from 'react'

function Nav() {

    const [opened, setOpened] = useState(false)
    const handleToggle = () => {
      setOpened((current) => !current)
    }
    
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
                className={`${styles.main_nav} ${opened ? styles.show : ''}`}>
                <ul className={styles.link_list}>
                  <li>
                    <NavLink to="/" className={styles.link} onClick={() => setOpened(false)}>
                        <FontAwesomeIcon icon={ faHouse } className={styles.icon} />
                        Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="services#services" className={styles.link} onClick={() => setOpened(false)}>
                        <FontAwesomeIcon icon={ faHandHoldingHeart } className={styles.icon} />
                        Services
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="experience#experience" className={styles.link} onClick={() => setOpened(false)}>
                        <FontAwesomeIcon icon={ faBrain } className={styles.icon} />
                        Experience
                    </NavLink>
                  </li>
                  <li>
                    <a href="#comments" className={`${styles.link} btn btn-link`} onClick={() => setOpened(false)}>
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
                onClick={handleToggle}
                >
                <FontAwesomeIcon icon={faBars} aria-hidden="true" />
              </button>
            </div>
          </div>
        </header>
    )
}

export default Nav;