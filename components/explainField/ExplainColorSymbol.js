import styles from '../../styles/SpecificArea.module.css';

const ExplainColorSymbol = () => {
    return (
        <>
            <div className={styles.sub_explain}>
                <div className={[styles.explain_full, styles.div_explain].join(" ")}></div>
                <p>This slot already has a parked car</p>
            </div>
            <div className={styles.sub_explain}>
                <div className={[styles.explain_empty, styles.div_explain].join(" ")}></div>
                <p>This slot is empty</p>
            </div>
            <div className={styles.sub_explain}>
                <div className={[styles.explain_warning, styles.div_explain].join(" ")}></div>
                <p>The sensors of this slot may be broken</p>
            </div>
        </>
    );
}

export default ExplainColorSymbol; 