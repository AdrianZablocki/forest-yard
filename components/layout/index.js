'use client'

import { usePathname } from 'next/navigation'
import { Inria_Sans, Montserrat } from 'next/font/google'

import Tree from '@/components/tree'

import styles from './layout.module.css'

const inria = Inria_Sans({ subsets: ['latin'], weight: ['400'] })
const monserat = Montserrat({ subsets: ['latin'], weight: ['400'] })

const Layout = ({ children }) => {
  const pathname = usePathname();
  const isMainPage = pathname === '/';

  return (
    <main>
      <div className={`${styles.header}`}>
        <h1 className={`${styles.logo} ${inria.className}`}>
          <a href="/">
            {isMainPage 
              ? <>działk<Tree dimension="18" rootColor="black" leafColor="black" /> <span className={styles.logoSmall}>za</span> lasem</>
              : <div className={styles.link}>Powrót do strony głównej</div>
            }
          </a>
        </h1>
        <nav className={styles.navigation}>
          <li className={monserat.className}><a href='/contact' className={styles.link}>Kontakt</a></li>
        </nav>
      </div>
      <div className={styles.wrapper}>
        { children }
      </div>
    </main>    
  )
}

export default Layout
