import LocationListData from "../components/data/LocationListData";
import SearchParkingLocation from "../components/searchFields/SearchParkingLocation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import styles from '../styles/LocationList.module.css'; 

const ParkingLocations = () => {
    const [parkingLots, setParkingLots] = useState([
        {id: 1, address: "48 Tố Hữu, Nam Từ Liêm, Hà Nội"},
        {id: 2, address: "51 ngõ 204 Lê Thanh Nghị, Hà Nội"},
        {id: 3, address: "582 Việt Hòa, Việt Hòa, Hải Dương"},
        {id: 4, address: "45 Vĩnh Tuy, Hai Bà Trưng, Hà Nội"},
        {id: 5, address: "54 Quân 1, Thành phố Hồ Chí Minh"},
        {id: 6, address: "48 Tố Hữu, Nam Từ Liêm, Hà Nội"},
        {id: 7, address: "51 ngõ 204 Lê Thanh Nghị, Hà Nội"},
        {id: 8, address: "582 Việt Hòa, Việt Hòa, Hải Dương"},
        {id: 9, address: "45 Vĩnh Tuy, Hai Bà Trưng, Hà Nội"},
        {id: 10, address: "54 Quân 1, Thành phố Hồ Chí Minh"}
    ]);

    return ( 
        <div className="body_wrapper">
            <p className={styles.logo}><FontAwesomeIcon className={styles.icon} icon={faParking} />QUICK PARKING</p>
            <div className={styles.header}>
                <h2>Parking Locations</h2>
                <SearchParkingLocation parkingLots={parkingLots} setParkingLots={(e) => {
                    setParkingLots(e)
                }}/>
            </div>
            <div className={styles.container}>
                <LocationListData parkingLots={parkingLots} />
            </div>  
        </div>
    );
}
 
export default ParkingLocations;