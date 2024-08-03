import styles from './CommonFooter.module.scss'


function CommonFooter() {
    return <div className={styles.footer}>
        <div className={styles.left_container}>
            <div className={styles.logo}>BAND HIVE</div>
            <div>사업자 등록번호: 123-12-12312 통신판매업: 2024-경기-1234호<br/>
                    주소: 서울 중구 세종대로 110 이메일: cs@bandhive.co<br/>
                    (주)BAND HIVE는 통신판매중개자로서, 상품의 예약, 이용 및 환불 등과 관련한 의무와 책임은 각 판매자에게 있습니다.<br/>
                    Copyright©2017 BAND HIVE All rights reserved
            </div>
        </div>

        <div className={styles.right_container}>
            <span>대표 번호</span>
            <span>02-123-1234</span>
            <span>문의 시간: 평일 10:00 ~ 16:00</span>
        </div>
    </div>
}

export default CommonFooter;