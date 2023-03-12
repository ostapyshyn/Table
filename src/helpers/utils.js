export function renameObjects(array) {
  const updatedNames = array.map((item) => {
    let newObj = Object.entries(item).reduce((obj, [k, v]) => {
      let newKey = k.replace(/([a-z])([A-Z])/g, '$1 $2').replace(/\b\w/g, (w) => w.toUpperCase())
      obj[newKey] = v
      return obj
    }, {})
    return newObj
  })
  return updatedNames
}

export function renameColumns(array) {
  const updatedNames = array.map((c) => {
    const titleCase = (str) =>
      str
        .replace(/([^A-Z])([A-Z])/g, (_, x, y) => x + ' ' + y.toUpperCase())
        .replace(/^./, (x) => x.toUpperCase())
    return titleCase(c)
  })
  return updatedNames
}

export function filterMasterColumns(master, report) {
  return master.filter((column) => !report.includes(column))
}
