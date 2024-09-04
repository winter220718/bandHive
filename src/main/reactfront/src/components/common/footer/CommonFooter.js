import useScript from "../../../hooks/useScript";


function CommonFooter() {

    const MyComponent = props => {

        // 컴포넌트의 나머지 부분
    }
    // return <div className={styles.footer}>
    //     <div className={styles.left_container}>
    //         <div className={styles.logo}>BAND HIVE</div>
    //         <div>사업자 등록번호: 123-12-12312 통신판매업: 2024-경기-1234호<br/>
    //                 주소: 서울 중구 세종대로 110 이메일: cs@bandhive.co<br/>
    //                 (주)BAND HIVE는 통신판매중개자로서, 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.<br/>
    //                 Copyright©2017 BAND HIVE All rights reserved
    //         </div>
    //     </div>
    //
    //     <div className={styles.right_container}>
    //         <span>대표 번호</span>
    //         <span>02-123-1234</span>
    //         <span>문의 시간: 평일 10:00 ~ 16:00</span>
    //     </div>
    // </div>


    return (
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a href="/" className="mb-3 me-2 mb-md-0 text-body-secondary text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24">
                            <use xlinkHref="#bootstrap"></use>
                        </svg>
                    </a>
                    <span className="mb-3 mb-md-0 text-body-secondary">© 2024 Company, Inc</span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3"><a className="text-body-secondary" href="#">
                        <svg className="bi" width="24" height="24">
                            <use xlinkHref="#twitter"></use>
                        </svg>
                    </a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#">
                        <svg className="bi" width="24" height="24">
                            <use xlinkHref="#instagram"></use>
                        </svg>
                    </a></li>
                    <li className="ms-3"><a className="text-body-secondary" href="#">
                        <svg className="bi" width="24" height="24">
                            <use xlinkHref="#facebook"></use>
                        </svg>
                    </a></li>
                </ul>
            </footer>
            <a href="#" id="scroll-top" className="scroll-top d-flex align-items-center justify-content-center"><i
                className="bi bi-arrow-up-short"></i></a>
            <script src="../../../assets/js/main.js"></script>
            <script src="../../assets/js/main.js"></script>
            <script src="../../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
            <script src="../../assets/vendor/php-email-form/validate.js"></script>
            <script src="../../assets/vendor/aos/aos.js"></script>
            <script src="../../assets/vendor/purecounter/purecounter_vanilla.js"></script>
            <script src="../../assets/vendor/glightbox/js/glightbox.min.js"></script>
            <script src="../../assets/vendor/swiper/swiper-bundle.min.js"></script>

</div>


    )
}

export default CommonFooter;