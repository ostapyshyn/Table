import React from 'react'
import styles from './Table.module.scss'

const Table = () => {
  return (
    <main>
      <section className={styles.top}>
        <div className={styles.buttons}>
          <button className={styles.button}>DOWNLOAD</button>
          <button className={styles.button}>SELECT</button>
        </div>
      </section>
    </main>
  )
}

export default Table
