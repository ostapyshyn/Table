export async function getReportingColumns() {
  const res = await fetch('https://dynamicreport.azurewebsites.net/api/GetReportingColumns')
  if (!res.ok) {
    throw {
      message: 'Failed to fetch columns',
      statusText: res.statusText,
      status: res.status,
    }
  }
  const data = await res.json()
  return data
}

export async function getReportingData() {
  const res = await fetch('https://dynamicreport.azurewebsites.net/api/GetReportingData')
  if (!res.ok) {
    throw {
      message: 'Failed to fetch repoting data',
      statusText: res.statusText,
      status: res.status,
    }
  }
  const data = await res.json()
  return data
}
