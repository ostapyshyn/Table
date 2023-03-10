function DynamicTable({ tableData }) {
  const columns = Object.keys(tableData[0])

  const getHeaders = () => {
    return columns.map((data) => {
      return <th key={data}>{data}</th>
    })
  }

  const getRows = () => {
    return tableData.map((data) => {
      return (
        <tr key={data.id}>
          {columns.map((col) => {
            return <td key={col}>{data[col]}</td>
          })}
        </tr>
      )
    })
  }

  return (
    <table className="table">
      <thead>
        <tr>{getHeaders()}</tr>
      </thead>
      <tbody>{getRows()}</tbody>
    </table>
  )
}
export default DynamicTable
