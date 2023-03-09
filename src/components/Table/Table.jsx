import React, { useEffect, useRef, useState } from 'react'
import Modal from '../Modal'
import Button from '../Button/Button'
import styles from './Table.module.scss'

const Table = () => {
  const [open, setOpen] = useState(false)
  const handleClickDownload = () => console.log('Clicked! Downloading')

  let modalRef = useRef()
  useEffect(() => {
    let handler = (e) => {
      if (!modalRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return (
    <main>
      <section className={styles.top}>
        <div className={styles.buttons}>
          <Button onClick={handleClickDownload}>download</Button>
          <Button onClick={() => setOpen(true)}>select</Button>
        </div>
      </section>

      <section>
        <Modal open={open} setOpen={setOpen} modalRef={modalRef} />
      </section>
    </main>
  )
}

export default Table
