import SpecificLocationData from '../../components/data/SpecificLocationData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking } from '@fortawesome/free-solid-svg-icons';
import React, { useState, useEffect } from 'react';
import styles from '../../styles/SpecificLocation.module.css';
import axios from "axios";

const SpecificParkingLocation = ({locationData}) => {

    return ( 
        <div className="body_wrapper">
            <p className="logo"><FontAwesomeIcon className="icon" icon={faParking} />QUICK PARKING</p>
            <div className={styles.header}>
                <h2>Parking Location:</h2>
                <p>{locationData.placeName}</p>
            </div>
            <div className={styles.container}>
                <SpecificLocationData locationData={locationData}/>
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
            locationData: locationData
        }
    }
}
 
export default SpecificParkingLocation;