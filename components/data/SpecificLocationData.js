import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from '../../styles/SpecificLocation.module.css';
import { useRouter } from 'next/router';

const ParkingAreasData = ({areas}) => {
    const router = useRouter();

    const moveToArea = (id) => {
        router.push('/parking-area/' + id);
    }

    return ( 
        <div className={styles.sub_container}>
            {areas.map(area => (
                <div key={area.name} className={styles.area}>
                    <h3>{area.name}</h3>
                    <p>empty: {area.empty}</p>
                    <button onClick={() => moveToArea(area.id)}>Details<FontAwesomeIcon className={styles.sub_icon} icon={faChevronRight} /></button>
                </div>
            ))}
        </div>
    );
}
 
export default ParkingAreasData;