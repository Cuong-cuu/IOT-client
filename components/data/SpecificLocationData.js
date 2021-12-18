import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/SpecificLocation.module.css';
import { useRouter } from 'next/router';

const ParkingAreasData = ({locationData}) => {
    const router = useRouter();

    const moveToArea = (id) => {
        router.push('/parking-area/' + id);
    }

    return ( 
        <div className={styles.sub_container}>
            {locationData.listArea.map(area => (
                <div key={area._id} className={styles.area}>
                    <h3>{area.areaName}</h3>
                    <p>Empty: {area.totalEmpty}</p>
                    <button onClick={() => moveToArea(area._id)}>Details<FontAwesomeIcon className={styles.sub_icon} icon={faChevronRight} /></button>
                </div>
            ))}
        </div>
    );
}
 
export default ParkingAreasData;