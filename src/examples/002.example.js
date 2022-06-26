const url1 =
  '/healthMonitor/sites/39a16c8b-bb6a-ea11-99e5-0003ff711164/servers/V1qg-fAaTfWewV_t9YWkBQ'
const url2 = '/healthMonitor'
const url3 = '/otherStuff/other'

console.log(url1.split('/healthMonitor'))
console.log(url2.split('/healthMonitor'))
console.log(url3.split('/healthMonitor'))

console.log(url2.match(/healthMonitor/i))
