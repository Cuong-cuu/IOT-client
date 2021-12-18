import styles from '../../styles/LocationList.module.css';
import React, { useCallback, useState } from 'react';

const SearchParkingLocation = ({locations, setLocationList}) => {
    const [locationName, setLocationName] = useState("");

    const handleSearchLocation = useCallback((value) => {
        setLocationName(value);
        if (value.length == 0 || value.trim() == '') {
            setLocationList(locations);
            return;
        }
        let newLocationList = [];
        for (let i=0;i<locations.length;i++) {
            let lower_name = locations[i].name.toLowerCase();
            if (lower_name.includes(value.toLowerCase())) {
                newLocationList.push(locations[i]);
            }
        }
        setLocationList(newLocationList);
    }, [locationName]);

    return (
        <> 
            <input type="text" className={styles.name} 
                   onChange={(e) => handleSearchLocation(e.target.value)} placeholder="Search location" />
        </>
    );
}
 
export default SearchParkingLocation;