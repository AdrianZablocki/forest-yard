import Image from 'next/image'
import styles from './offer.module.css'

const Offer = ({ data }) => (
  <div className={`grid gap ${styles.offer}`}>
    <div className={styles.info}>
      <div>
        <p>Informacje o wybranej działce</p>
        <div className={styles.infoDetails}>Numer diałki: 2167/<span className={styles.bigText}>{data.number}</span></div>
        <div className={styles.infoDetails}>Obręb: 0015</div>
        <div className={styles.infoDetails}>Powierzchnia: <span className={styles.bigText}>{data.area} m<sup>2</sup></span></div>
        <div className={styles.infoDetails}>Obwód: {data.circuit} m</div>
        <div className={styles.infoDetails}>Cena: <span className={styles.bigText}>{data.price}</span></div>        
      </div>
      <div className={styles.contact}>
        <span className={`${styles.status} ${data.isFree ? 'green' : 'red'}`}>{data.status}</span> <span>tel. +48 798 682 494</span>
      </div>
    </div>
    
    <Image
      src={data.img}
      width={260}
      height={56}
      layout='responsive'
      alt="mapka"
    />
  
  </div>
)

export default Offer