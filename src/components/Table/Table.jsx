import React, { useEffect, useRef, useState } from 'react'
import { getReportingColumns, getReportingData } from '../../api'
import Modal from '../Modal'
import Button from '../Button/Button'
import styles from './Table.module.scss'
import DynamicTable from '../DynamicTable'
import { renameObjects, renameColumns, filterMasterColumns } from '../../helpers/utils.js'

const Table = () => {
  const [open, setOpen] = useState(false)
  const [allHeaders, setAllHeaders] = useState([])
  const handleClickDownload = () => console.log('Clicked! Downloading')
  console.log(allHeaders)

  const [reportingColumns, setReportingColumns] = React.useState([])
  const [reportingData, setReportingData] = React.useState([])
  const [error, setError] = React.useState(null)
  const [loading, setLoading] = React.useState(false)

  useEffect(() => {
    loadReportingColumns()
    loadReportingData()
  }, [])

  async function loadReportingColumns() {
    setLoading(true)
    try {
      const data = await getReportingColumns()

      console.log(data, 'Start')
      console.log(renameColumns(data), 'Finish')
      console.log(data, 'Finish')

      console.log(data)
      setReportingColumns(renameColumns(data))
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }
  async function loadReportingData() {
    setLoading(true)
    try {
      const data = await getReportingData()
      console.log(data, 'before')
      console.log(renameObjects(data), 'after')

      setReportingData(renameObjects(data))
    } catch (err) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const output = renameObjects(reportingData).map((node) => {
    const newObj = {}
    allHeaders.forEach((key) => (newObj[key] = node[key]))
    return newObj
  })

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

  if (loading) {
    return <h1>Loading...</h1>
  }
  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }
  if (reportingData.length === 0) {
    return <h1>No data</h1>
  }

  return (
    <main>
      <section className={styles.top}>
        <div className={styles.buttons}>
          <Button onClick={handleClickDownload}>download</Button>
          <Button onClick={() => setOpen(true)}>select</Button>
        </div>
      </section>
      <DynamicTable tableData={output} />
      <section>
        <Modal
          open={open}
          setOpen={setOpen}
          modalRef={modalRef}
          setAllHeaders={setAllHeaders}
          reportingColumns={reportingColumns}
          masterColumns={filterMasterColumns(
            Object.keys(renameObjects(reportingData)[0]),
            reportingColumns,
          )}
        />
      </section>
    </main>
  )
}

export default Table
