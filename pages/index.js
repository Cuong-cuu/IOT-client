import styles from '../styles/Home.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faParking} from '@fortawesome/free-solid-svg-icons';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();
  const moveToParkingList = () => {
    router.push('/parking-locations');
  }

  return ( 
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className = {styles.welcome}><FontAwesomeIcon className={styles.main_icon} icon={faParking} />Welcome to <span>QUICK PARKING</span></h1>
        <div className = {styles.sub_container}>
          <h2 className = {styles.instruction}>Find and Book Parking Quickly</h2>
          <button className = {[styles.button, styles.blue].join(" ")} onClick={moveToParkingList}>QUICK VIEW</button>
          <button className = {[styles.button, styles.green].join(" ")} >BOOK PARKING</button>
        </div>
      </div>
    </div>
  );
}
 
export default Home;