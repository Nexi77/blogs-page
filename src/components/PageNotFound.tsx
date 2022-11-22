import errorPage from '@/assets/styles/404.module.scss'
import { faSadTear } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function PageNotFound(){
    return (
        <section className={errorPage.section}>
            <h2 className="sr-only">
                Page you are currently on cannot be found in this app, go back to Home Page
            </h2>
            <div className={errorPage.text}>
                <h2>404</h2>
                <p>
                    Page you are currently on doesn't exists <FontAwesomeIcon icon={ faSadTear } />
                </p>
                <Link to="/" className={errorPage.link}>Home</Link>
            </div>
        </section>
    )
}

export default PageNotFound;