import Image from 'next/image'

import Layout from '@/components/layout'
import mapImg from '@/public/images/map.webp'

import styles from './contact.module.css'

const ContactPage = () => {
  return (
    <Layout>
      <section className="grid">
          <Image
            src={mapImg}
            width={260}
            height={56}
            layout='responsive'
            alt="mapa google"
          />
          <div className={styles.contact}>
            <h2>Dane kontaktowe</h2>
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
    </Layout>
  )
}

export default ContactPage
