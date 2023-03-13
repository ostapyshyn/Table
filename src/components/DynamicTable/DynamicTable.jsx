function DynamicTable({ tableData }) {
  const columns = Object.keys(tableData[0])

  const getHeaders = () => {
    return columns.map((data, index) => {
      return <th key={index}>{data}</th>
    })
  }

  const getRows = () => {
    return tableData.map((data, index) => {
      return (
        <tr key={index}>
          {columns.map((col) => {
            return <td key={col}>{data[col]}</td>
          })}
        </tr>
      )
    })
  }

  return (
    <section>
      <table>
        <thead>
          <tr>{getHeaders()}</tr>
        </thead>
        <tbody>{getRows()}</tbody>
      </table>
    </section>
  )
}
export default DynamicTable
