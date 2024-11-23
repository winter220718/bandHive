import {useEffect, useState} from "react";
import AOS from 'aos';
import PureCounter from "@srexi/purecounterjs";
import GLightbox from 'glightbox';
import Swiper from 'swiper';

import worldDottedMap from '../../assets/img/world-dotted-map.jpg';
import heroImg from '../../assets/img/hero-img.png';
import service2 from '../../assets/img/service-2.jpg';
import ctaBg from '../../assets/img/cta-bg.jpg';
import axios from "axios";

import Carousel from 'react-bootstrap/Carousel';
import CarouselImage from '../../assets/img/CarouselImage';

import Styles from './main.module.scss';
import features1 from '../../assets/img/features-1.jpg';
import features2 from '../../assets/img/features-2.jpg';
import features3 from '../../assets/img/features-3.jpg';

function MainCarousel() {
    return (
        <Carousel style={{width: '80%', height: '100px', margin: '0 auto',}}>
            <Carousel.Item>
                <CarouselImage src={features1} text="First slide"/>
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src={features2} text="Second slide"/>
                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <CarouselImage src={features3} text="Third slide"/>
                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

// FAQ items data
const faqItems = [
    {
        question: '언제쯤 이 프로젝트를 완성할 수 있을까요..?',
        answer: '하기 나름이라고 생각합니다... 직장 생활하면서 프로젝트 진행하기는 좀 힘들어보이네요.',
        delay: 200
    },
    {
        question: '갑자기 사정이 생겨서 예약을 취소하게 됐어요...',
        answer: '고객센터로 전화 주세요',
        delay: 300
    },
    {
        question: '합주실을 새로 차렸는데 등록하고 싶어요',
        answer: '고객센터로 전화 주세요 ^^',
        delay: 400
    }
];

function GetTopSites() {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("/getTopSites")
            .then(response => {
                setData(response.data); // 데이터 상태 업데이트
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {data.map(item => (
                <div key={item.postId} className="col-lg-4 col-md-6 aos-init aos-animate" data-aos="fade-up"
                     data-aos-delay="200">
                    <div className="card">
                        <div className="card-img">
                            <img src={service2} alt="" className="img-fluid"/>
                        </div>
                        <h3><a href="#" className="stretched-link">{item.site.siteName}</a></h3>
                        <h3>{item.postSubTitle}</h3>
                        <p>{item.postTitle}</p>
                    </div>
                </div>
            ))
            }
        </>
    )
}

function Main() {
    // State to manage which FAQ item is active
    const [activeIndex, setActiveIndex] = useState(null);

    // Toggle FAQ item visibility
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    useEffect(() => {

        // Scroll 관련 기능
        const toggleScrolled = () => {
            const selectBody = document.querySelector('body');
            const selectHeader = document.querySelector('#header');
            if (!selectHeader.classList.contains('scroll-up-sticky') &&
                !selectHeader.classList.contains('sticky-top') &&
                !selectHeader.classList.contains('fixed-top')) return;
            // selectBody.classList.add('scrolled');
            // window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
        };

        window.addEventListener('scroll', toggleScrolled);
        window.addEventListener('load', toggleScrolled);

        //Mobile nav toggle
        const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');
        const mobileNavToogle = () => {
            document.querySelector('body').classList.toggle('mobile-nav-active');
            mobileNavToggleBtn.classList.toggle('bi-list');
            mobileNavToggleBtn.classList.toggle('bi-x');
        };
        mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

        //Same-page/hash link 처리
        const navLinks = document.querySelectorAll('#navmenu a');
        navLinks.forEach(navmenu => {
            navmenu.addEventListener('click', () => {
                if (document.querySelector('.mobile-nav-active')) {
                    mobileNavToogle();
                }
            });
        });

        // FAQ Toggle
        const faqItems = document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle');
        faqItems.forEach(faqItem => {
            faqItem.addEventListener('click', () => {
                faqItem.parentNode.classList.toggle('faq-active');
            });
        });

        // Scroll top 버튼 처리
        const scrollTop = document.querySelector('.scroll-top');
        const toggleScrollTop = () => {
            if (scrollTop) {
                window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
            }
        };
        scrollTop.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        });


        window.addEventListener('scroll', toggleScrollTop);
        window.addEventListener('load', toggleScrollTop);

        // AOS (Animate On Scroll) 초기화
        AOS.init({
            duration: 600,
            easing: 'ease-in-out',
            once: true,
            mirror: false,
        });

        // Pure Counter 초기화
        new PureCounter();

        // GLightbox 초기화
        const glightbox = GLightbox({
            selector: '.glightbox',
        });

        // Swiper 초기화
        const initSwiper = () => {
            document.querySelectorAll('.init-swiper').forEach((swiperElement) => {
                let config = JSON.parse(swiperElement.querySelector('.swiper-config').innerHTML.trim());
                new Swiper(swiperElement, config);
            });
        };

        window.addEventListener('load', initSwiper);

        // Clean up
        return () => {
            window.removeEventListener('scroll', toggleScrolled);
            window.removeEventListener('load', toggleScrolled);
            window.removeEventListener('scroll', toggleScrollTop);
            window.removeEventListener('load', toggleScrollTop);
            mobileNavToggleBtn.removeEventListener('click', mobileNavToogle);
            navLinks.forEach(navmenu => {
                navmenu.removeEventListener('click', mobileNavToogle);
            });
            faqItems.forEach(faqItem => {
                faqItem.removeEventListener('click', () => {
                    faqItem.parentNode.classList.toggle('faq-active');
                });
            });
        };

    }, []);
    return (

        <main className="main">

            {/*// <!-- Hero Section -->*/}
            <section id="hero" className="hero section dark-background">
                <img src={worldDottedMap} alt="" className="hero-bg aos-init aos-animate"
                     data-aos="fade-in"/>

                <div className="container">
                    <div className="row gy-4 d-flex justify-content-between">
                        <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
                            <h2 data-aos="fade-in" className="aos-init aos-animate">
                                합주실 대여 & 공유 플랫폼
                            </h2>
                            <p data-aos="fade-up" data-aos-delay="100" className="aos-init aos-animate">
                                Uh-oh
                                Too spicy
                                You want my A to the Z, but you won't, 어림없지
                                맞혀봐 sweet, 또는 freak, what's hiding underneath? (I see)
                                망설이듯 간 보는 너, 기회는 없어, oh
                                Nah, you won't get it, nah, nah, you won't get it (I say, hey)
                                깜빡 한순간 끌어당겨, you'll be mine (mine)
                                살짝 다가와, can cross my borderline (hey, line, line, line)
                                널 따분하게 했던 everyday (day), 흥미로운 덫을 던져줄게 (게)
                                뛰어들어 봐 just right now
                                'Cause I'm too spicy for your heart (ring the fire alarm)
                                심장을 파고들어 넌 (I'm too spicy)
                                번지는 자극 속에 넌 (바로 그 순간)
                                또 다른 나를 발견해 (I'm too spicy, too, too, I'm too spicy)
                                Don't stop, 겁내지 마 (hey), 뱅뱅, 외쳐봐
                            </p>

                            <form action="#"
                                  className="form-search d-flex align-items-stretch mb-3 aos-init aos-animate"
                                  data-aos="fade-up" data-aos-delay="200">
                                <input type="text" className="form-control"
                                       placeholder="합주실명이나 위치를 검색하세요."/>
                                <button type="submit" className="btn btn-primary">검색</button>
                            </form>

                        </div>

                        <div className="col-lg-5 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-out">
                            <img src={heroImg} className="img-fluid mb-3 mb-lg-0" alt=""/>
                        </div>
                    </div>
                </div>

            </section>
            {/*// <!-- /Hero Section -->*/}

            {/* 캐러셀 */}
            <section className="section">
                <MainCarousel/>
            </section>
            {/* 캐러셀 끝 */}

            {/*// <!-- Services Section -->*/}
            <section id="services" className="services section">

                {/* Section Title */}
                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    {/*<span>합주실 추천<br/></span>*/}
                    {/*<h2>합주실 추천</h2>*/}
                    {/*<p>평점이 좋은 합주실들을 추천해드립니다</p>*/}
                </div>
                {/* End Section Title */}

                <div className="container">
                    <div className="row gy-4">
                        {/* Section Title */}
                        <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                            <span>합주실 추천</span>
                            <h2>합주실 추천</h2>
                            <p>좋은 합주실을 추천합니다.</p>
                        </div>
                        <GetTopSites/>
                    </div>
                </div>
            </section>
            {/*// <!-- /Services Section -->*/}

            {/*// <!-- Call To Action Section -->*/}
            <section id="call-to-action" className="call-to-action section dark-background">
                <img src={ctaBg} alt=""/>

                <div className="container">
                    <div className="row justify-content-center aos-init aos-animate" data-aos="zoom-in"
                         data-aos-delay="100">
                        <div className="col-xl-10">
                            <div className="text-center">
                                <h3>Call To Action</h3>
                                <p>
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                    eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt
                                    in culpa
                                    qui officia deserunt mollit anim id est laborum.
                                </p>
                                <a className="cta-btn" href="#">Call To Action</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*// <!-- /Call To Action Section -->*/}

            <section id="faq" className="faq section">
                {/* Section Title */}
                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    <span>자주 묻는 질문</span>
                    <h2>자주 묻는 질문</h2>
                    <p>자주 묻는 질문들은 제가 이미 답을 해놨습니다.</p>
                </div>
                {/* End Section Title */}

                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="faq-container">
                                {faqItems.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`faq-item ${activeIndex === index ? 'faq-active' : ''} aos-init aos-animate`}
                                        data-aos="fade-up"
                                        data-aos-delay={item.delay}
                                        onClick={() => toggleFAQ(index)}
                                    >
                                        <i className="faq-icon bi bi-question-circle"></i>
                                        <h3>{item.question}</h3>
                                        <div className={`faq-content ${activeIndex === index ? 'show' : ''}`}>
                                            <p>{item.answer}</p>
                                        </div>
                                        <i className={`faq-toggle bi bi-chevron-${activeIndex === index ? 'down' : 'right'}`}></i>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}


export default Main;