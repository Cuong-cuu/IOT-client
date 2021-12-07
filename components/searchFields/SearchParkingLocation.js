import styles from '../../styles/LocationList.module.css';
import React, { useCallback, useState } from 'react';

const SearchParkingLocation = ({parkingLots, setParkingLots}) => {
    const [locations, setLocations] = useState("");

    return (
        <> 
            <input type="text" className={styles.name} 
                   onChange={(value) => setLocations(value)} placeholder="Search location" />
        </>
    );
}
 
export default SearchParkingLocation;