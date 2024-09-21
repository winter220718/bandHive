import React, {useEffect, useState} from 'react';
import 'aos/dist/aos.css'; // AOS 애니메이션 관련 CSS를 포함시킵니다.
import LogIn from '../../logIn/logIn';
import Modal from 'react-bootstrap/Modal';
import {Link} from 'react-router-dom';

function CommonHeader() {
    const [logInModalShow, setLogInModalShow] = React.useState(false);
    const handleClose = () => setLogInModalShow(false);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setIsLoggedIn(!!token);
    })

    const logout = () => {
        localStorage.removeItem('token');
        setIsLoggedIn(false);
    }

    const loginSuccess = () => {
        setIsLoggedIn(true);
        setLogInModalShow(false);
    };

    return (
        <header id="header" className="header d-flex align-items-center fixed-top">
            <div className="container-fluid container-xl position-relative d-flex align-items-center">

                <a href="index.html" className="logo d-flex align-items-center me-auto">
                    <h1 className="sitename">BAND HIVE</h1>
                </a>

                <nav id="navmenu" className="navmenu">
                    <ul>
                        {/*<li><a href="index.html" className="active">홈<br/></a></li>*/}
                        {/*<li><a href="about.html">예약하기</a></li>*/}
                        {/*<li><a href="services.html">Services</a></li>*/}
                        {/*<li><a href="pricing.html">Pricing</a></li>*/}

                        <li><Link to="/post">합주실</Link></li>
                        <li className="dropdown">
                            <a href="#"><span>마이페이지</span>
                                <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                            <ul>
                                <li><a href="#">나의 정보</a></li>
                                <li><a href="#">예약 내역</a></li>
                                <li className="dropdown">
                                    <a href="#"><span>기타</span> <i
                                        className="bi bi-chevron-down toggle-dropdown"></i></a>
                                    <ul>
                                        <li><a href="#">Deep Dropdown 1</a></li>
                                        <li><a href="#">Deep Dropdown 2</a></li>
                                        <li><a href="#">Deep Dropdown 3</a></li>
                                        <li><a href="#">Deep Dropdown 4</a></li>
                                        <li><a href="#">Deep Dropdown 5</a></li>
                                    </ul>
                                </li>

                            </ul>
                        </li>
                        <li><a href="contact.html">회원가입</a></li>

                    </ul>
                    <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
                </nav>

                {isLoggedIn ? (
                        <a className="btn-getstarted" onClick={logout}>로그아웃</a>
                    )
                    :
                    (
                        <a className="btn-getstarted" onClick={(e) => {
                            e.preventDefault();
                            setLogInModalShow(true);
                        }}>로그인</a>
                    )
                }

                <Modal show={logInModalShow} onHide={handleClose}>
                    <LogIn/>
                </Modal>

            </div>
        </header>
    );
}

export default CommonHeader;