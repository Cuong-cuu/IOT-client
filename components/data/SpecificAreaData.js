import styles from '../../styles/SpecificArea.module.css';

const SpecifcAreaData = ({areaData}) => {
    return ( 
        <div className={styles.sub_container}>
            {areaData.map(slot => (
                <div key={slot._id} className={slot.state ? styles.full:styles.empty}>
                    <h3>{slot.positionNumber}</h3>
                </div>    
            ))}
        </div>
    );
}
 
export default SpecifcAreaData;