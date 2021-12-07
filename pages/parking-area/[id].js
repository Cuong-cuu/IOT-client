import SpecificAreaData from '../../components/data/SpecificAreaData';
import styles from '../../styles/SpecificArea.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const ParkingArea = () => {
    const area = {id:1, name: "Khu A", empty: 3};

    return ( 
        <div className="body_wrapper">
            <p className={styles.logo}><FontAwesomeIcon className={styles.icon} icon={faParking} />QUICK PARKING</p>
            <div className={styles.header}>
                <h2>{area.name}</h2>
                <p>Empty: {area.empty}</p>
            </div>
            <div className={styles.container}>
                <SpecificAreaData />
            </div>
            <p>Empty slots: 1,2,5</p>
        </div>
    );
}
 
export default ParkingArea;