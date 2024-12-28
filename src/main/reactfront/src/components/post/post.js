import React, {useEffect, useRef, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import {useParams} from "react-router";
import siteExample from '../../assets/img/site/siteExample.jpg';
import KakaoMap from '../util/kakaoMap';

const Post = () => {
    const [siteInfo, setSiteInfo] = useState(null);
    const [siteRentalInfo, setSiteRentalInfo] = useState(null);
    const {postId} = useParams(); // url에서 동적으로 가져올때 씀
    const isFetched = useRef(false);
    let cnt = 0;
    useEffect(() => {
        if (!isFetched.current) {
            isFetched.current = true;
            axios.get(`/post/${postId}`)
                .then((response) => {
                        setSiteRentalInfo(response.data.siteRentalList);
                        setSiteInfo(response.data.sitePost);
                    }
                )
                .catch((error) => console.error('데이터 조회 실패:', error));
        }
    }, []);

    // 데이터를 기다리는 동안 로딩 메시지 표시
    if (!siteInfo || !setSiteRentalInfo) {
        return <div>로딩 중...</div>;
    }

    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="check2" viewBox="0 0 16 16">
                    <path
                        d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                </symbol>
                <symbol id="circle-half" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
                </symbol>
                <symbol id="moon-stars-fill" viewBox="0 0 16 16">
                    <path
                        d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/>
                    <path
                        d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                </symbol>
                <symbol id="sun-fill" viewBox="0 0 16 16">
                    <path
                        d="M8 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                </symbol>
            </svg>

            <div className="dropdown position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle">
                <button className="btn btn-bd-primary py-2 dropdown-toggle d-flex align-items-center"
                        id="bd-theme"
                        type="button"
                        aria-expanded="false"
                        data-bs-toggle="dropdown"
                        aria-label="Toggle theme (auto)">
                    <svg className="bi my-1 theme-icon-active" width="1em" height="1em">
                        <use xlinkHref="#circle-half"></use>
                    </svg>
                    <span className="visually-hidden" id="bd-theme-text">테마 변경</span>
                </button>
                <ul className="dropdown-menu dropdown-menu-end shadow" aria-labelledby="bd-theme-text">
                    <li>
                        <button type="button" className="dropdown-item d-flex align-items-center"
                                data-bs-theme-value="light" aria-pressed="false">
                            <svg className="bi me-2 opacity-50" width="1em" height="1em">
                                <use xlinkHref="#sun-fill"></use>
                            </svg>
                            라이트
                            <svg className="bi ms-auto d-none" width="1em" height="1em">
                                <use xlinkHref="#check2"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" className="dropdown-item d-flex align-items-center"
                                data-bs-theme-value="dark"
                                aria-pressed="false">
                            <svg className="bi me-2 opacity-50" width="1em" height="1em">
                                <use xlinkHref="#moon-stars-fill"></use>
                            </svg>
                            다크
                            <svg className="bi ms-auto d-none" width="1em" height="1em">
                                <use xlinkHref="#check2"></use>
                            </svg>
                        </button>
                    </li>
                    <li>
                        <button type="button" className="dropdown-item d-flex align-items-center active"
                                data-bs-theme-value="auto" aria-pressed="true">
                            <svg className="bi me-2 opacity-50" width="1em" height="1em">
                                <use xlinkHref="#circle-half"></use>
                            </svg>
                            시스템
                            <svg className="bi ms-auto d-none" width="1em" height="1em">
                                <use xlinkHref="#check2"></use>
                            </svg>
                        </button>
                    </li>
                </ul>
            </div>


            <svg xmlns="http://www.w3.org/2000/svg" className="d-none">
                <symbol id="aperture" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"
                        strokeWidth="2" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="10"/>
                    <path
                        d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/>
                </symbol>
                <symbol id="cart" viewBox="0 0 16 16">
                    <path
                        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </symbol>
                <symbol id="chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </symbol>
            </svg>

            <main className="container">
                <div className="p-4 p-md-5 mb-4 rounded text-body-emphasis bg-body-secondary">
                    <div className="">
                        <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={siteExample}/>
                    </div>
                </div>
                <div className="row g-5">
                    <div className="col-md-8">

                        <article className="blog-post">
                            <h2 className="display-5 link-body-emphasis mb-1">{siteInfo.site.siteName}</h2>
                            <p className="blog-post-meta">{siteInfo.postDate}</p>

                            <p>{siteInfo.postTitle}</p>

                            <hr/>
                            <p>{siteInfo.postContent}</p>

                            <h2>주의사항</h2>
                            <Cautions cautions={siteInfo.cautions}/>

                        </article>

                        <br/>
                        <br/>
                        <br/>
                        <br/>
                        <hr/>
                        <KakaoMap/>

                    </div>

                    <div className="col-md-4">
                        <div className="position-sticky" style={{top: 2 + 'rem'}}>
                            <div className="p-4 mb-3 bg-body-tertiary rounded">
                                <h4 className="fst-italic">환불 정책</h4>
                                <p className="mb-0">7일 전: 100% 환불<br/>
                                    6일 전: 90% 환불<br/>
                                    5일 전: 60% 환불<br/>
                                    4일 전: 50% 환불<br/>
                                    3일 전: 30% 환불<br/>
                                    2일 전: 환불 불가<br/>
                                </p>
                            </div>

                            <div>
                                <h4 className="fst-italic">합주실 선택</h4>
                                <ul className="list-unstyled">
                                    <Rooms siteRentalInfo={siteRentalInfo}/>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </main>

            <footer className="py-5 text-center text-body-secondary bg-body-tertiary">
                <p className="mb-0">
                    <a xlinkHref="#">Back to top</a>
                </p>
            </footer>
            <script src="/docs/5.3/dist/js/bootstrap.bundle.min.js"
                    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
                    crossOrigin="anonymous"></script>

        </>
    )

};



const Cautions = ({cautions}) => {

    return (
        <>
            {cautions.map(caution => (
                    <li key={caution.cautionOrder}>
                        <b>{caution.cautionOrder}</b>
                        <div>{caution.cautionContent}</div>

                    </li>
                )
            )}
        </>
    )
}

const Rooms = ({siteRentalInfo}) => {
    return (

        <>
            {siteRentalInfo.map(siteRentalInfo => (
                <li key={siteRentalInfo.rentalId}>
                    <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top">
                        <svg className="bd-placeholder-img" width="100%" height="96"
                             xmlns="http://www.w3.org/2000/svg" aria-hidden="true"
                             preserveAspectRatio="xMidYMid slice" focusable="false">
                            <rect width="100%" height="100%" fill="#777"/>
                        </svg>
                        <div className="col-lg-8">
                            <h6 className="mb-0">합주실명: {siteRentalInfo.roomName}</h6>
                            <h6 className="mb-0">인원 제한: {siteRentalInfo.limit}</h6>
                            <small className="text-body-secondary">{siteRentalInfo.dtlContent}</small>
                        </div>
                    </a>
                </li>
            ))}
        </>
    );

};


export default Post;
