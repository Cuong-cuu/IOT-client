import styles from '../../styles/LocationList.module.css';
import Link from 'next/link';

const ParkingLocationsData = ({parkingLots}) => {
    return ( 
        <div className={styles.sub_container}>
            {parkingLots.map(parkingLot => (
                <Link href={'/parking-location/' + parkingLot.id} key={parkingLot.id}>
                    <a className={styles.single}><h4>{parkingLot.address}</h4></a>
                </Link>
            ))}
        </div>
    );
}
 
export default ParkingLocationsData;