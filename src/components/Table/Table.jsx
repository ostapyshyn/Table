import React, { useState } from 'react'
import Button from '../Button/Button'
import styles from './Table.module.scss'

const Table = () => {
  const [open, setOpen] = useState(false)
  const handleClickDownload = () => console.log('Clicked! Downloading')

  return (
    <main>
      <section className={styles.top}>
        <div className={styles.buttons}>
          <Button onClick={handleClickDownload}>download</Button>
          <Button onClick={() => setOpen(true)}>select</Button>
        </div>
      </section>

      <section>
        {open && (
          <div className={styles.overlay}>
            <div className={styles.modal}>
              <Button onClick={() => setOpen(false)}>cancel</Button>
              <Button>submit</Button>
            </div>
          </div>
        )}
      </section>
    </main>
  )
}

export default Table
