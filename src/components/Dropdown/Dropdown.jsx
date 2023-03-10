import { useState } from 'react'
import styles from './Dropdown.module.scss'

function Dropdown({ title, data, setMasterHeader, setReportingHeader }) {
  const [isActive, setIsActive] = useState(false)
  const [checkedState, setCheckedState] = useState(new Array(data.length).fill(false))

  const handleOnChange = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item,
    )
    setCheckedState(updatedCheckedState)
    const tableHeaders = updatedCheckedState
      .map((item, index) => (item ? data[index] : undefined))
      .filter((item) => item !== undefined)
    setMasterHeader ? setMasterHeader(tableHeaders) : setReportingHeader(tableHeaders)

    console.log(tableHeaders, 'show in dropdown')
  }

  return (
    <div className={styles.dropdown}>
      <div className={styles['dropdown-btn']} onClick={(e) => setIsActive(!isActive)}>
        {title}
        {isActive ? (
          <span className="fas fa-caret-up"></span>
        ) : (
          <span className="fas fa-caret-down"></span>
        )}
      </div>
      {isActive && (
        <div className={styles['dropdown-content']}>
          <ul className={styles.list}>
            {data.map((name, index) => {
              return (
                <li key={index}>
                  <div className="toppings-list-item">
                    <div className="left-section">
                      <input
                        type="checkbox"
                        id={`custom-checkbox-${index}`}
                        name={name}
                        value={name}
                        checked={checkedState[index]}
                        onChange={() => handleOnChange(index)}
                      />
                      <label htmlFor={`custom-checkbox-${index}`}>{name}</label>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
export default Dropdown
