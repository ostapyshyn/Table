import React, { useEffect, useRef, useState } from 'react'
import Modal from '../Modal'
import Button from '../Button/Button'
import styles from './Table.module.scss'
import DynamicTable from '../DynamicTable'

const table = [
  {
    id: 1,
    name: 'John',
    age: 25,
    city: 'New York',
  },
  {
    id: 2,
    name: 'Name',
    age: 25,
    city: 'Lviv',
  },
  {
    id: 3,
    name: 'Walter',
    age: 25,
    city: 'Warsaw',
  },
  {
    id: 4,
    name: 'Balter',
    age: 25,
    city: 'Ternopil',
  },
  {
    id: 5,
    name: 'John',
    age: 25,
    city: 'Kharkiv',
  },
]

const Table = () => {
  const [open, setOpen] = useState(false)
  const [allHeaders, setAllHeaders] = useState([])
  const handleClickDownload = () => console.log('Clicked! Downloading')
  console.log(allHeaders)

  const output = table.map((node) => {
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
        <Modal open={open} setOpen={setOpen} modalRef={modalRef} setAllHeaders={setAllHeaders} />
      </section>
    </main>
  )
}

export default Table
