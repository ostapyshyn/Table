import React, { useEffect, useRef } from 'react'
import Button from '../Button/Button'
import styles from './Modal.module.scss'

const Modal = ({ open, setOpen, modalRef }) => {
  return (
    <div className={`${styles.overlay} ${styles.animated} ${open ? styles.show : ''}`}>
      <div className={styles.modal} ref={modalRef}>
        <h3>Reporting Columns</h3>
        <div className={styles.buttons}>
          <Button onClick={() => setOpen(false)}>cancel</Button>
          <Button>submit</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
