import React, { useState } from 'react'
import Button from '../Button'
import Dropdown from '../Dropdown'
import styles from './Modal.module.scss'

const Modal = ({ open, setOpen, modalRef, setAllHeaders, reportingColumns, masterColumns }) => {
  const [masterHeaders, setHeaders] = useState([])
  const [reportingHeaders, setReportingHeaders] = useState([])

  const setMasterHeader = (theaders) => {
    setHeaders(theaders)
  }
  const setReportingHeader = (theaders) => {
    setReportingHeaders(theaders)
  }

  function handleClickSubmit() {
    setAllHeaders(masterHeaders.concat(reportingHeaders))
    console.log('I was clicked')
  }

  return (
    <div className={`${styles.overlay} ${styles.animated} ${open ? styles.show : ''}`}>
      <div className={styles.modal} ref={modalRef}>
        <h3>Reporting Columns</h3>
        <div className={styles.dropdowns}>
          <Dropdown title={'Master Data'} data={masterColumns} setMasterHeader={setMasterHeader} />
          <Dropdown
            title={'Reporting Data'}
            data={reportingColumns}
            setReportingHeader={setReportingHeader}
          />
        </div>

        <div className={styles.buttons}>
          <Button onClick={() => setOpen(false)}>cancel</Button>
          <Button onClick={handleClickSubmit}>submit</Button>
        </div>
      </div>
    </div>
  )
}

export default Modal
