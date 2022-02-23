import styles from '../../styles/SpecificArea.module.css';

const SpecifcAreaData = ({areaData}) => {
    return ( 
        <div className={styles.sub_container}>
            {areaData.map(slot => (
                <div key={slot._id} className={(slot.state === 0) ? styles.empty : (slot.state === 1 ) ? styles.full: styles.warning}>
                    <h3>{slot.positionNumber}</h3>
                </div>    
            ))}
        </div>
    );
}
 
export default SpecifcAreaData;