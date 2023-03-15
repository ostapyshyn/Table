import React, { useEffect, useRef, useState } from 'react'
import useScrollLock from '../../hooks/useScrollLock'
import Button from '../Button'
import Dropdown from '../Dropdown'
import styles from './Modal.module.scss'

const Modal = ({ open, setOpen, setAllHeaders, reportingColumns, masterColumns }) => {
  const [masterHeaders, setHeaders] = useState([])
  const [reportingHeaders, setReportingHeaders] = useState([])
  const { unlockScroll } = useScrollLock()

  let modalRef = useRef()
  useEffect(() => {
    let handler = (e) => {
      if (!modalRef.current.contains(e.target)) {
        unlockScroll()
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  const setMasterHeader = (theaders) => {
    setHeaders(theaders)
  }
  const setReportingHeader = (theaders) => {
    setReportingHeaders(theaders)
  }

  function handleClickSubmit() {
    setAllHeaders(masterHeaders.concat(reportingHeaders))
  }
  function handleClickCancel() {
    unlockScroll()
    setOpen(false)
  }

  return (
    <section className={`${styles.overlay} ${styles.animated} ${open ? styles.show : ''}`}>
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
          <Button onClick={handleClickCancel}>cancel</Button>
          <Button onClick={handleClickSubmit}>submit</Button>
        </div>
      </div>
    </section>
  )
}

export default Modal
