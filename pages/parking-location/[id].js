import SpecificLocationData from '../../components/data/SpecificLocationData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import styles from '../../styles/SpecificLocation.module.css';

const SpecificParkingLocation = () => {
    const [areas, setAreas] = useState([
        {id:1, name: "Khu A", empty: 3},
        {id:2, name: "Khu B", empty: 0},
        {id:3, name: "Khu C", empty: 0},
        {id:4, name: "Khu D", empty: 7}
    ])

    return ( 
        <div className="body_wrapper">
            <p className={styles.logo}><FontAwesomeIcon className={styles.icon} icon={faParking} />QUICK PARKING</p>
            <div className={styles.header}>
                <h2>Parking Location:</h2>
                <p>48 Tố Hữu, Nam Từ Liêm, Hà Nội</p>
            </div>
            <div className={styles.container}>
                <SpecificLocationData areas={areas}/>
            </div>
        </div>
    );
}
 
export default SpecificParkingLocation;