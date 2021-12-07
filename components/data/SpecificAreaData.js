import styles from '../../styles/SpecificArea.module.css';

const SpecifcAreaData = () => {
    let data = [
        {position: 1, empty: 1},
        {position: 2, empty: 1},
        {position: 3, empty: 0},
        {position: 4, empty: 0},
        {position: 5, empty: 1},
        {position: 6, empty: 0},
    ];

    return ( 
        <div className={styles.sub_container}>
            {data.map(slot => (
                <div key={slot.position} className={ slot.empty ? styles.empty:styles.full}>
                    <h3>{slot.position}</h3>
                </div>    
            ))}
        </div>
    );
}
 
export default SpecifcAreaData;