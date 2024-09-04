import {useEffect, useState} from "react";
import AOS from 'aos';
import PureCounter from "@srexi/purecounterjs";
import GLightbox from 'glightbox';
import Swiper from 'swiper';

import worldDottedMap from '../../assets/img/world-dotted-map.jpg';
import heroImg from '../../assets/img/hero-img.png';
import about from '../../assets/img/about.jpg';
import service2 from '../../assets/img/service-2.jpg';
import ctaBg from '../../assets/img/cta-bg.jpg';
import features1 from '../../assets/img/features-1.jpg';
import features2 from '../../assets/img/features-2.jpg';
import features3 from '../../assets/img/features-3.jpg';
import features4 from '../../assets/img/features-4.jpg';
import testimonialsBg from '../../assets/img/testimonials-bg.jpg';
import testimonials1 from '../../assets/img/testimonials/testimonials-1.jpg';
import testimonials2 from '../../assets/img/testimonials/testimonials-2.jpg';
import testimonials3 from '../../assets/img/testimonials/testimonials-3.jpg';
import testimonials4 from '../../assets/img/testimonials/testimonials-4.jpg';
import testimonials5 from '../../assets/img/testimonials/testimonials-5.jpg';
import axios from "axios";


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

            window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
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


                            {/*<div className="row gy-4 aos-init aos-animate" data-aos="fade-up" data-aos-delay="300">*/}
                            {/*    <div className="col-lg-3 col-6">*/}
                            {/*        <div className="stats-item text-center w-100 h-100">*/}
                            {/*            <span data-purecounter-start="0" data-purecounter-end="232"*/}
                            {/*                  data-purecounter-duration="0" className="purecounter">232</span>*/}
                            {/*            <p>Clients</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    /!* End Stats Item *!/*/}

                            {/*    <div className="col-lg-3 col-6">*/}
                            {/*        <div className="stats-item text-center w-100 h-100">*/}
                            {/*            <span data-purecounter-start="0" data-purecounter-end="521"*/}
                            {/*                  data-purecounter-duration="0" className="purecounter">521</span>*/}
                            {/*            <p>Projects</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    /!* End Stats Item *!/*/}

                            {/*    <div className="col-lg-3 col-6">*/}
                            {/*        <div className="stats-item text-center w-100 h-100">*/}
                            {/*            <span data-purecounter-start="0" data-purecounter-end="1453"*/}
                            {/*                  data-purecounter-duration="0" className="purecounter">1453</span>*/}
                            {/*            <p>Support</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    /!* End Stats Item *!/*/}

                            {/*    <div className="col-lg-3 col-6">*/}
                            {/*        <div className="stats-item text-center w-100 h-100">*/}
                            {/*            <span data-purecounter-start="0" data-purecounter-end="32"*/}
                            {/*                  data-purecounter-duration="0" className="purecounter">32</span>*/}
                            {/*            <p>Workers</p>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*    /!* End Stats Item *!/*/}
                            {/*</div>*/}
                        </div>

                        <div className="col-lg-5 order-1 order-lg-2 hero-img aos-init aos-animate" data-aos="zoom-out">
                            <img src={heroImg} className="img-fluid mb-3 mb-lg-0" alt=""/>
                        </div>
                    </div>
                </div>

            </section>
            {/*// <!-- /Hero Section -->*/}

            <section id="featured-services" className="featured-services section">
                <div className="container">
                    <div className="row gy-4">

                        <div className="col-lg-4 col-md-6 service-item d-flex aos-init aos-animate" data-aos="fade-up"
                             data-aos-delay="100">
                            <div className="icon flex-shrink-0">
                                <i className="fa-solid fa-cart-flatbed"></i>
                            </div>
                            <div>
                                <h4 className="title">Lorem Ipsum</h4>
                                <p className="description">Voluptatum deleniti atque corrupti quos dolores et quas
                                    molestias excepturi sint occaecati cupiditate non provident</p>
                                <a href="#" className="readmore stretched-link">
                                    <span>Learn More</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        {/* End Service Item */}

                        <div className="col-lg-4 col-md-6 service-item d-flex aos-init aos-animate" data-aos="fade-up"
                             data-aos-delay="200">
                            <div className="icon flex-shrink-0">
                                <i className="fa-solid fa-truck"></i>
                            </div>
                            <div>
                                <h4 className="title">Dolor Sitema</h4>
                                <p className="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi
                                    ut aliquip ex ea commodo consequat tarad limino ata</p>
                                <a href="#" className="readmore stretched-link">
                                    <span>Learn More</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        {/* End Service Item */}

                        <div className="col-lg-4 col-md-6 service-item d-flex aos-init aos-animate" data-aos="fade-up"
                             data-aos-delay="300">
                            <div className="icon flex-shrink-0">
                                <i className="fa-solid fa-truck-ramp-box"></i>
                            </div>
                            <div>
                                <h4 className="title">Sed ut perspiciatis</h4>
                                <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit
                                    esse cillum dolore eu fugiat nulla pariatur</p>
                                <a href="#" className="readmore stretched-link">
                                    <span>Learn More</span>
                                    <i className="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                        {/* End Service Item */}

                    </div>
                </div>
            </section>

            {/*// <!-- About Section -->*/}
            <section id="about" className="about section">
                <div className="container">
                    <div className="row gy-4">

                        <div
                            className="col-lg-6 position-relative align-self-start order-lg-last order-first aos-init aos-animate"
                            data-aos="fade-up" data-aos-delay="200">
                            <img src={about} className="img-fluid" alt=""/>
                            <a href="https://www.youtube.com/watch?v=Y7f98aduVJ8"
                               className="glightbox pulsating-play-btn"></a>
                        </div>

                        <div className="col-lg-6 content order-last order-lg-first aos-init aos-animate"
                             data-aos="fade-up" data-aos-delay="100">
                            <h3>About Us</h3>
                            <p>
                                Dolor iure expedita id fuga asperiores qui sunt consequatur minima. Quidem voluptas
                                deleniti. Sit quia molestiae quia quas qui magnam itaque veritatis dolores. Corrupti
                                totam ut eius incidunt reiciendis veritatis asperiores placeat.
                            </p>
                            <ul>
                                <li>
                                    <i className="bi bi-diagram-3"></i>
                                    <div>
                                        <h5>Ullamco laboris nisi ut aliquip consequat</h5>
                                        <p>Magni facilis facilis repellendus cum excepturi quaerat praesentium libre
                                            trade</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="bi bi-fullscreen-exit"></i>
                                    <div>
                                        <h5>Magnam soluta odio exercitationem reprehenderi</h5>
                                        <p>Quo totam dolorum at pariatur aut distinctio dolorum laudantium illo direna
                                            pasata redi</p>
                                    </div>
                                </li>
                                <li>
                                    <i className="bi bi-broadcast"></i>
                                    <div>
                                        <h5>Voluptatem et qui exercitationem</h5>
                                        <p>Et velit et eos maiores est tempora et quos dolorem autem tempora incidunt
                                            maxime veniam</p>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>
            {/*// <!-- /About Section -->*/}

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
                        <GetTopSites />
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
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                                    qui officia deserunt mollit anim id est laborum.
                                </p>
                                <a className="cta-btn" href="#">Call To Action</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/*// <!-- /Call To Action Section -->*/}

            {/*// <!-- Features Section -->*/}
            <section id="features" className="features section">
                {/* Section Title */}
                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    <span>Features</span>
                    <h2>Features</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                {/* End Section Title */}

                <div className="container">
                    <div className="row gy-4 align-items-center features-item">
                        <div className="col-md-5 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out"
                             data-aos-delay="100">
                            <img src={features1} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-7 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                            <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <ul>
                                <li><i className="bi bi-check"></i><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                </li>
                                <li><i className="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                                </li>
                                <li><i
                                    className="bi bi-check"></i><span> Ullam est qui quos consequatur eos accusamus.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Features Item */}

                    <div className="row gy-4 align-items-center features-item">
                        <div className="col-md-5 order-1 order-md-2 d-flex align-items-center aos-init aos-animate"
                             data-aos="zoom-out" data-aos-delay="200">
                            <img src={features2} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-7 order-2 order-md-1 aos-init aos-animate" data-aos="fade-up"
                             data-aos-delay="200">
                            <h3>Corporis temporibus maiores provident</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum
                            </p>
                        </div>
                    </div>
                    {/* Features Item */}

                    <div className="row gy-4 align-items-center features-item">
                        <div className="col-md-5 d-flex align-items-center aos-init aos-animate" data-aos="zoom-out">
                            <img src={features3} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-7 aos-init aos-animate" data-aos="fade-up">
                            <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                            <p>
                                Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt
                                saepe odit aut quia voluptatem hic voluptas dolor doloremque.
                            </p>
                            <ul>
                                <li><i className="bi bi-check"></i><span> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</span>
                                </li>
                                <li><i className="bi bi-check"></i><span> Duis aute irure dolor in reprehenderit in voluptate velit.</span>
                                </li>
                                <li><i className="bi bi-check"></i><span> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* Features Item */}

                    <div className="row gy-4 align-items-center features-item">
                        <div className="col-md-5 order-1 order-md-2 d-flex align-items-center aos-init aos-animate"
                             data-aos="zoom-out">
                            <img src={features4} className="img-fluid" alt=""/>
                        </div>
                        <div className="col-md-7 order-2 order-md-1 aos-init aos-animate" data-aos="fade-up">
                            <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                            <p className="fst-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                            </p>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum
                            </p>
                        </div>
                    </div>
                    {/* Features Item */}

                </div>
            </section>
            {/*// <!-- /Features Section -->*/}

            {/*// <!-- Pricing Section -->*/}
            <section id="pricing" className="pricing section">
                {/* Section Title */}
                <div className="container section-title aos-init aos-animate" data-aos="fade-up">
                    <span>Pricing</span>
                    <h2>Pricing</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>
                {/* End Section Title */}

                <div className="container">
                    <div className="row gy-4">
                        <div className="col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="100">
                            <div className="pricing-item">
                                <h3>Free Plan</h3>
                                <h4><sup>$</sup>0<span> / month</span></h4>
                                <ul>
                                    <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                                    <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
                                    <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
                                    <li className="na"><i className="bi bi-x"></i>
                                        <span>Pharetra massa massa ultricies</span></li>
                                    <li className="na"><i className="bi bi-x"></i> <span>Massa ultricies mi quis hendrerit</span>
                                    </li>
                                </ul>
                                <a href="#" className="buy-btn">Buy Now</a>
                            </div>
                        </div>
                        {/* End Pricing Item */}

                        <div className="col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="200">
                            <div className="pricing-item featured">
                                <h3>Business Plan</h3>
                                <h4><sup>$</sup>29<span> / month</span></h4>
                                <ul>
                                    <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                                    <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
                                    <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
                                    <li><i className="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>
                                    <li><i className="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span>
                                    </li>
                                </ul>
                                <a href="#" className="buy-btn">Buy Now</a>
                            </div>
                        </div>
                        {/* End Pricing Item */}

                        <div className="col-lg-4 aos-init aos-animate" data-aos="zoom-in" data-aos-delay="300">
                            <div className="pricing-item">
                                <h3>Developer Plan</h3>
                                <h4><sup>$</sup>49<span> / month</span></h4>
                                <ul>
                                    <li><i className="bi bi-check"></i> <span>Quam adipiscing vitae proin</span></li>
                                    <li><i className="bi bi-check"></i> <span>Nec feugiat nisl pretium</span></li>
                                    <li><i className="bi bi-check"></i> <span>Nulla at volutpat diam uteera</span></li>
                                    <li><i className="bi bi-check"></i> <span>Pharetra massa massa ultricies</span></li>
                                    <li><i className="bi bi-check"></i> <span>Massa ultricies mi quis hendrerit</span>
                                    </li>
                                </ul>
                                <a href="#" className="buy-btn">Buy Now</a>
                            </div>
                        </div>
                        {/* End Pricing Item */}
                    </div>
                </div>
            </section>
            {/*// <!-- /Pricing Section -->*/}

            {/*// <!-- Testimonials Section -->*/}
            <section id="testimonials" className="testimonials section dark-background">
                <img src={testimonialsBg} className="testimonials-bg" alt=""/>

                <div className="container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper">
                        <div className="swiper-wrapper">
                            {/* Testimonial Item */}
                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src={testimonials1}
                                         className="testimonial-img"
                                         alt=""/>
                                    <h3>Saul Goodman</h3>
                                    <h4>Ceo &amp; Founder</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                        className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                        className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                            {/* End Testimonial Item */}

                            {/* Additional Testimonial Items */}
                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src={testimonials2}
                                         className="testimonial-img"
                                         alt=""/>
                                    <h3>Sara Wilsson</h3>
                                    <h4>Designer</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                        className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                        className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src={testimonials3}
                                         className="testimonial-img"
                                         alt=""/>
                                    <h3>Jena Karlis</h3>
                                    <h4>Store Owner</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                        className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                        className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src={testimonials4}
                                         className="testimonial-img"
                                         alt=""/>
                                    <h3>Matt Brandon</h3>
                                    <h4>Freelancer</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                        className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                        className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>

                            <div className="swiper-slide">
                                <div className="testimonial-item">
                                    <img src={testimonials5}
                                         className="testimonial-img"
                                         alt=""/>
                                    <h3>John Larson</h3>
                                    <h4>Entrepreneur</h4>
                                    <div className="stars">
                                        <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                        className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i
                                        className="bi bi-star-fill"></i>
                                    </div>
                                    <p>
                                        <i className="bi bi-quote quote-icon-left"></i>
                                        <span>Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.</span>
                                        <i className="bi bi-quote quote-icon-right"></i>
                                    </p>
                                </div>
                            </div>
                            {/* End Additional Testimonial Items */}
                        </div>

                        <div className="swiper-pagination"></div>
                    </div>
                </div>
            </section>
            {/*// <!-- /Testimonials Section -->*/}

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