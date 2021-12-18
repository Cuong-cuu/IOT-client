import styles from '../../styles/LocationList.module.css';
import Link from 'next/link';

const ParkingLocationsData = ({locationList}) => {
    return ( 
        <div className={styles.sub_container}>
            {locationList.map(location => (
                <Link href={'/parking-location/' + location._id} key={location._id}>
                    <a className={styles.single}><h4>{location.name}</h4></a>
                </Link>
            ))}
        </div>
    );
}
 
export default ParkingLocationsData;