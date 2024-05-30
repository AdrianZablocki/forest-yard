import Image from 'next/image'

import Layout from '@/components/layout'
import Tree from '@/components/tree'
import Offer from '@/components/offer'
import { offers } from '@/components/offer/offers.config'

import styles from './more.module.css'
import mapImg from '../../public/images/map.webp'
import roadImg from '../../public/images/road.webp'
import yardImg from '../../public/images/yard.webp'
import forestImg from '../../public/images/forest.webp'

const MorePage = () => {
  return (
    <Layout>
      <>
        <div className={styles.title}>
          Działk<Tree dimension="70" rootColor="#1E1C16" leafColor="#556507" />za lasem
        </div>
        <div className={styles.place}>Sobolew, mazowieckie</div>

        <section className={`grid gap ${styles.section}`}>
          <Image
            src={mapImg}
            width={260}
            height={56}
            layout='responsive'
            alt="mapa google"
          />
          <div>
            <h2>Działki budowlane</h2>
            <div>Sobolew pow. garwoliński </div>
            <div>Tel. +48 798 682 494</div>
            <div>z Centrum Warszawy:</div>
            <div>1h 8 min. trasą S17</div>
            <div>1h 30 min. Koleje Mazowieckie</div>
            <div>0h 59 min. IC</div>
            <div>10 działek od 899 m² do 1397 m²</div>
            <div>90 zł/m²</div>
          </div>
        </section>

        <section className={`grid gap ${styles.section}`}>
          <Image
            src={roadImg}
            width={260}
            height={56}
            layout='responsive'
            alt="Droga w lesie"
          />
          <div>
            <div>Okolica</div>
            <ul>
              <li>2 km - centrum z lokalnymi sklepami i dyskontami</li>
              <li>1,9 km - stacja PKP</li>
              <li>2 km - Zespół Szkół w Sobolewie</li>
              <li>2 km - NZOZ “Centrum”</li>
              <li>2,5 km - Publiczne Przedszkole</li>
              <li>7,5 km - trasa S17</li>
              <li>asfaltowa droga dojazdowa</li>
            </ul>
          </div>
        </section>

        <section className={`grid gap ${styles.section}`}>
          <Image
            src={yardImg}
            width={260}
            height={56}
            layout='responsive'
            alt="mapka"
          />
          <div>
            Zgodnie z miejscowym planem zagospodarowania przestrzennego działki przeznaczone są do 
            <b>zabudowy mieszkaniowej jednorodzinnej w zabudowie wolnostojącej lub bliźniaczej</b>. 
            Dojazd do każdej działki – wyznaczony pas drogowy o szerokości 8 m.
          </div>
        </section>

        <section>
          <p className={styles.offerHeader}>Działki w spokojnej okolicy, z wygodnym dojazdem, otoczone lasem, i niewielką ilością zabudowań. </p>
          {offers.map(offer => <Offer key={offer.number} data={offer}/>)}
        </section>

        <figure className={styles.forest}>
          <Image
            src={forestImg}
            width={260}
            height={56}
            layout='responsive'
            alt="Droga w lesie"
          />
          <figcaption>W skład działki nr 1 od strony północno-zachodniej wchodzi kilkumetrowy pas brzóz.</figcaption>
        </figure>
      </>
    </Layout>
  )
}

export default MorePage
