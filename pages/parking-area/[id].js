import SpecificAreaData from '../../components/data/SpecificAreaData';
import styles from '../../styles/SpecificArea.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParkingArea = ({areaData, areaId}) => {
    let emptySlots = [];
    let emptyNumber = 0;

    const [dynamicAreaData, setDynamicAreaData] = useState(areaData);

    useEffect(() => {
        setTimeout(async () => {
            let getAreaData = await axios.get('http://localhost:3000/api/areas/' + areaId);

            let areaDataTest = {};
            if (getAreaData.data.status == "success") {
                areaDataTest = getAreaData.data.data.doc;
            }
            setDynamicAreaData(areaDataTest);
        }, 15000)
    }, [dynamicAreaData])

    dynamicAreaData.data.forEach((data) => {
        if (data.state == 0) {
            emptySlots.push(data.positionNumber);
            emptyNumber++;
        }
    });
    
    return ( 
        <div className="body_wrapper">
            <p className="logo"><FontAwesomeIcon className="icon" icon={faParking} />QUICK PARKING</p>
            <div className={styles.header}>
                <h2>{dynamicAreaData.name}</h2>
                <p>Empty: {emptyNumber}</p>
            </div>
            <div className={styles.container}>
                <SpecificAreaData areaData={dynamicAreaData.data} />
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
            areaData: areaData,
            areaId: areaId
        }
    }
}
 
export default ParkingArea;