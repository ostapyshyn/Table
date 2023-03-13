import React, { useEffect, useRef, useState } from 'react'
import DynamicTable from '../DynamicTable'
import Spinner from '../Spinner/Spinner'
import useFetch from '../../hooks/useFetch'
import Modal from '../Modal'
import Button from '../Button/Button'
import styles from './Table.module.scss'

import {
  renameObjects,
  renameColumns,
  filterMasterColumns,
  removeKeys,
} from '../../helpers/utils.js'
import { CSVLink } from 'react-csv'

const Table = () => {
  const [open, setOpen] = useState(false)
  const [allHeaders, setAllHeaders] = useState([])

  const {
    data: columns,
    loading: c_loading,
    error: c_error,
  } = useFetch('https://dynamicreport.azurewebsites.net/api/GetReportingColumns')

  const {
    data: table,
    loading,
    error,
  } = useFetch('https://dynamicreport.azurewebsites.net/api/GetReportingData')

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

  if (c_loading || loading) {
    return <Spinner />
  }
  if (c_error || error) {
    return <h1>Error fetching data</h1>
  }
  if (columns.length === 0 || table.length === 0) {
    return <h1>No data</h1>
  }

  return (
    <main>
      <section className={styles.top}>
        <div className={styles.buttons}>
          {allHeaders.length !== 0 && (
            <CSVLink className={styles.download_btn} data={removeKeys(table, allHeaders)}>
              DOWNLOAD
            </CSVLink>
          )}

          <Button onClick={() => setOpen(true)}>
            {allHeaders.length === 0 ? 'SELECT' : `SELECTED(${allHeaders.length})`}
          </Button>
        </div>
      </section>

      {allHeaders.length === 0 && <h1>Press the Select button and choose columns to show</h1>}
      {allHeaders.length !== 0 && <DynamicTable tableData={removeKeys(table, allHeaders)} />}

      <Modal
        open={open}
        setOpen={setOpen}
        modalRef={modalRef}
        setAllHeaders={setAllHeaders}
        reportingColumns={renameColumns(columns)}
        masterColumns={filterMasterColumns(
          Object.keys(renameObjects(table)[0]),
          renameColumns(columns),
        )}
      />
    </main>
  )
}

export default Table
