import styles from './CommonHeader.module.scss'


function CommonHeader() {
    return <div className={styles.header}>
        <div className={styles.headerBox}>
            <div>고객센터: <b>02-123-1234</b> 또는 <b>cs@bandhive.com</b></div>
        </div>
        <div className={styles.headerBox2}>
                <div className={styles.logo}>
                    <div>BAND HIVE</div>
                    <div className={styles.logoWithText}>합주실 대여 플랫폼</div>
                </div>

                <div className={styles.logIn}>
                    <span>로그인</span>
                    <span>회원가입</span>
                </div>
        </div>
    </div>
}

export default CommonHeader;