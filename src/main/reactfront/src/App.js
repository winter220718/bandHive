import styles from './App.module.scss';
import './components/common/header/CommonHeader'
import CommonHeader from "./components/common/header/CommonHeader";
import CommonFooter from "./components/common/footer/CommonFooter";
import Main from "./components/main/main";

import './assets/css/main.css'; // Main CSS file
import './assets/vendor/bootstrap/css/bootstrap.min.css'; // Bootstrap CSS
import './assets/vendor/bootstrap-icons/bootstrap-icons.css'; // Bootstrap Icons CSS
import './assets/vendor/aos/aos.css'; // AOS CSS
import './assets/vendor/fontawesome-free/css/all.min.css'; // FontAwesome CSS
import './assets/vendor/glightbox/css/glightbox.min.css'; // GLightbox CSS
import './assets/vendor/swiper/swiper-bundle.min.css'; // Swiper CSS
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Post from "./components/post/post";

export default function App() {

    return (
        <>
            <Router>
                <div className={styles.mainContainer}>
                    <div>
                    <CommonHeader className={styles.header}/>
                    </div>
                    <div className={styles.main}>
                        <Routes>
                            <Route path="/" element={<Main/>}/>
                            <Route path="/post/:postId" element={<Post/>}/>
                        </Routes>
                    </div>
                    <div>
                    <CommonFooter className={styles.footer}/>
                    </div>
                </div>
            </Router>
        </>
    );
}

