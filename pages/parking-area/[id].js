import SpecificAreaData from '../../components/data/SpecificAreaData';
import styles from '../../styles/SpecificArea.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParkingArea = ({areaData}) => {
    let emptySlots = [];
    let emptyNumber = 0;
    areaData.data.forEach((data) => {
        if (data.state == 0) {
            emptySlots.push(data.positionNumber);
            emptyNumber++;
        }
    });
    
    return ( 
        <div className="body_wrapper">
            <p className="logo"><FontAwesomeIcon className="icon" icon={faParking} />QUICK PARKING</p>
            <div className={styles.header}>
                <h2>{areaData.name}</h2>
                <p>Empty: {emptyNumber}</p>
            </div>
            <div className={styles.container}>
                <SpecificAreaData areaData={areaData.data} />
            </div>
            <p>Empty slot(s): {emptySlots.toString()}</p>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    let areaId = ctx.query.id;
    let getAreaData = await axios.get('http://localhost:3000/api/areas/' + areaId);

    let areaData = {};
    if (getAreaData.data.status == "success") {
        areaData = getAreaData.data.data.doc;
    }
    
    return {
        props: {
            areaData: areaData
        }
    }
}
 
export default ParkingArea;