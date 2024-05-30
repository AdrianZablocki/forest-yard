import Tree from '@/components/tree'
import Layout from '@/components/layout'

import styles from './page.module.css'

export default function Home() {
  return (
    <Layout>
      <>
        <div className={styles.content}>

          <div className={styles.contentWrapper}>
            <div>
              <div className={styles.title}>
                Działk<Tree dimension="70" rootColor="#1E1C16" leafColor="#556507" />
                <div>za lasem</div>
              </div>
              <div className={styles.place}>Sobolew, mazowieckie</div>
              <div className={styles.price}>90 zł/m<sup>2</sup></div>
            </div>
            <a href='/more' className={styles.moreButton}>Dowiedz się więcej</a>
          </div>

          <div className={styles.background}></div>
        
        </div>
      </>
      
    </Layout>
  );
}
