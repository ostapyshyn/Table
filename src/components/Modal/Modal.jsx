import React from 'react'
import Button from '../Button/Button'
import styles from './Modal.module.scss'

const Modal = ({ open, setOpen }) => {
  return (
    <div className={`${styles.overlay} ${styles.animated} ${open ? styles.show : ''}`}>
      <div className={styles.modal}>
        <Button onClick={() => setOpen(false)}>cancel</Button>
        <Button>submit</Button>
      </div>
    </div>
  )
}

export default Modal
