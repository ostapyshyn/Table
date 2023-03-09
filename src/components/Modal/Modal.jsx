import React from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import styles from './Modal.module.scss'

const masterData = [
  'Organization Id',
  'Organization Name',
  'Tax id',
  'Primary Contact',
  'Created On',
  'Created By',
]
const reportingData = ['Email', 'Insurance Carrier', 'Agency name', 'Fax number']

const Modal = ({ open, setOpen, modalRef }) => {
  return (
    <div className={`${styles.overlay} ${styles.animated} ${open ? styles.show : ''}`}>
      <div className={styles.modal} ref={modalRef}>
        <h3>Reporting Columns</h3>
        <div className={styles.dropdowns}>
          <Dropdown title={'Master Data'} data={masterData} />
          <Dropdown title={'Reporting Data'} data={reportingData} />
        </div>

        <div className={styles.buttons}>
          <Button onClick={() => setOpen(false)}>cancel</Button>
          <Button>submit</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
