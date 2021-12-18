import LocationListData from "../components/data/LocationListData";
import SearchParkingLocation from "../components/searchFields/SearchParkingLocation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking } from '@fortawesome/free-solid-svg-icons';
import React, {useState} from 'react';
import styles from '../styles/LocationList.module.css'; 
import axios from "axios";

const ParkingLocations = ({locations}) => {
    const [locationList, setLocationList] = useState(locations);

    return ( 
        <div className="body_wrapper">
            <p className="logo"><FontAwesomeIcon className="icon" icon={faParking} />QUICK PARKING</p>
            <div className={styles.header}>
                <h2>Parking Locations</h2>
                <SearchParkingLocation locations={locations} setLocationList={setLocationList}/>
            </div>
            <div className={styles.container}>
                <LocationListData locationList={locationList} />
            </div>  
        </div>
    );
}

export async function getStaticProps() {
    const getLocations = await axios.post('http://localhost:3000/api/places/all',{});

    let locations = [];
    if (getLocations.data.status == 'success') {
        locations = getLocations.data.data.doc;
    }

    return {
        props: {
            locations: locations
        }
    }
}
 
export default ParkingLocations;