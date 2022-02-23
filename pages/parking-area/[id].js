import SpecificAreaData from '../../components/data/SpecificAreaData';
import ExplainColorSymbol from '../../components/explainField/explainColorSymbol';
import styles from '../../styles/SpecificArea.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faParking } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ParkingArea = ({areaData, areaId}) => {
    let emptySlots = [];
    let emptyNumber = 0;

    const [dynamicAreaData, setDynamicAreaData] = useState(areaData);
    const [didMount, setDidMount] = useState(false);

    useEffect(() => {
        setDidMount(true);
        setTimeout(async () => {
            let getAreaData = await axios.get('http://localhost:3000/api/areas/' + areaId);

            let areaDataTest = {};
            if (getAreaData.data.status == "success") {
                areaDataTest = getAreaData.data.data.doc;
            }
            setDynamicAreaData(areaDataTest);
        }, 1000)
        return () => setDidMount(false);
    }, [dynamicAreaData])

    dynamicAreaData.data.forEach((data) => {
        if (data.state == 0) {
            emptySlots.push(data.positionNumber);
            emptyNumber++;
        }
    });

    if(!didMount) {
        return null;
    }
    
    return ( 
        <div className="body_wrapper">
            <p className="logo"><FontAwesomeIcon className="icon" icon={faParking} />QUICK PARKING</p>
            <div className={styles.header}>
                <h2>{dynamicAreaData.name}</h2>
                <p>Empty: {emptyNumber}</p>
            </div>
            <div className={styles.container}>
                <SpecificAreaData areaData={dynamicAreaData.data} />
            </div>
            <p>Empty slot(s): {emptySlots.toString()}</p>
            <div className={styles.explain}>
                <ExplainColorSymbol />
            </div>
        </div>
    );
}

export async function getServerSideProps(ctx) {
    let areaId = ctx.query.id;
    let getAreaData = await axios.get('http://localhost:3000/api/areas/' + areaId);

    let areaData = {};
    if (getAreaData.data.status == "success") {
        areaData = getAreaData.data.data.doc;
    }
    
    return {
        props: {
            areaData: areaData,
            areaId: areaId
        }
    }
}
 
export default ParkingArea;