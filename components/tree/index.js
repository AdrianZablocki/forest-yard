import styles from './tree.module.css'

const Tree = ({ dimension, rootColor, leafColor }) => (
  <div className={styles.tree} style={{ width: `${dimension}px`, height: `${dimension * 1.5}px`}}>
    <div className={styles.root} style={{ backgroundColor: rootColor }}></div>
    <div className={`${styles.leaf} ${styles.leaf1}`} style={{ backgroundColor: leafColor }}></div>
    <div className={`${styles.leaf} ${styles.leaf2}`} style={{ backgroundColor: leafColor }}></div>
    <div className={`${styles.leaf} ${styles.leaf3}`} style={{ backgroundColor: leafColor }}></div>
    <div className={`${styles.leaf} ${styles.leaf4}`} style={{ backgroundColor: leafColor }}></div>
    <div className={`${styles.leaf} ${styles.leaf5}`} style={{ backgroundColor: leafColor }}></div>
    <div className={`${styles.leaf} ${styles.leaf6}`} style={{ backgroundColor: leafColor }}></div>
    <div className={`${styles.leaf} ${styles.leaf7}`} style={{ backgroundColor: leafColor }}></div>
  </div>
)

export default Tree
