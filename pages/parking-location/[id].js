import SpecificLocationData from '../../components/data/SpecificLocationData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/SpecificLocation.module.css';
import axios from "axios";

const SpecificParkingLocation = ({locationData, locationId}) => {
    const [dynamicLocationData, setDynamicLocationData] = useState(locationData);
    const [didMount, setDidMount] = useState(false);
    
    useEffect(() => {
        setDidMount(true);
        setTimeout(async () => {
            let getLocationData = await axios.get('http://localhost:3000/api/places/' + locationId);

            let locationDataTest = {};
            if (getLocationData.data.status == 'success') {
                locationDataTest = getLocationData.data.data;
            }
            setDynamicLocationData(locationDataTest);
        }, 1000)
        return () => setDidMount(false);
    }, [dynamicLocationData]);

    if(!didMount) {
        return null;
    }

    return ( 
        <div className="body_wrapper">
            <p className="logo"><FontAwesomeIcon className="icon" icon={faParking} />QUICK PARKING</p>
            <div className={styles.header}>
                <h2>Parking Location:</h2>
                <p>{dynamicLocationData.placeName}</p>
            </div>
            <div className={styles.container}>
                <SpecificLocationData locationData={dynamicLocationData}/>
            </div>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    let locationId = ctx.query.id;
    let getLocationData = await axios.get('http://localhost:3000/api/places/' + locationId);

    let locationData = {};
    if (getLocationData.data.status == 'success') {
        locationData = getLocationData.data.data;
    }
    
    return {
        props: {
            locationData: locationData,
            locationId: locationId
        }
    }
}
 
export default SpecificParkingLocation;