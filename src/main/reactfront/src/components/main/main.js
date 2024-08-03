import styles from './main.module.scss'
import {FaLocationDot} from "react-icons/fa6";
import {FaCalendarAlt} from "react-icons/fa";
import {MdGroups} from "react-icons/md";
import {CiSquareMinus, CiSquarePlus} from "react-icons/ci";
import {useState} from "react";


function Main() {

    const [number, setNumber] = useState("");
    const onChange = (e) => {
        setNumber(e.target.value);
    };
    const onReset = () => {
        setNumber("");
    };

    return <div className={styles.mainContainer}>
        <div className={styles.searchContainer}>
            <span>합주실을 검색하세요</span>
            <div className={styles.searchBarContainer}>
                <FaLocationDot className={styles.icon}/>
                <div className={styles.searchBar}></div>
            </div>
            <div className={styles.searchBarContainer}>
                <FaCalendarAlt className={styles.icon}/>
                <div className={styles.searchBar}></div>
            </div>
            {/*<div className={styles.searchBarContainer}>*/}
            {/*    <MdGroups className={styles.icon}/>*/}
            {/*    <div className={styles.numberOfPerson}>*/}
            {/*        <CiSquarePlus className={styles.iconControl}/>*/}
            {/*        <input className={styles.nameBox} value={number}/>*/}
            {/*        <CiSquareMinus className={styles.iconControl}  />*/}


            {/*    </div>*/}
            {/*</div>*/}
        </div>


        <div className={styles.siteContainer}>
            <div className={styles.site}></div>
            <div className={styles.site}></div>
            <div className={styles.site}></div>
            <div className={styles.site}></div>
            <div className={styles.site}></div>
            <div className={styles.site}></div>
        </div>

    </div>
}

export default Main;