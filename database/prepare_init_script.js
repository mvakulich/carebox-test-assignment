const fs = require('fs');

let rawdata = fs.readFileSync('timeseries.json', {encoding: 'UTF-8'}).toString();
const tsData = JSON.parse(rawdata)

const states = tsData.reduce((acc, data) => {
  if (!acc.includes(data.state)) {
    acc.push(data.state)
  }
  return acc;
}, [])

states.forEach((state) => {
  const stateData = tsData.filter(item => item.state === state);
  const sb = [];
  sb.push("db.covid_tests_results.insertMany([")

  const stateTs = stateData.reduce((acc, item) => {
    acc.push([
      'positive', 
      'totalTestResults', 
      'death', 
      'hospitalized', 
      'hospitalizedCumulative', 
      'hospitalizedCurrently', 
      'inIcuCurrently', 
      'inIcuCumulative'
    ].map(type => {
      return `{
        metadata: { state: '${state}', type: '${type}' },
        timestamp: ISODate('${String(item.date).replace(/(\d{4})(\d{2})(\d{2})/, "$1-$2-$3")}T00:00:00.000Z'),
        count: ${item[type]}
      }`
    }))
    return acc;
  }, []);
  sb.push(stateTs.join(','))
  sb.push("])")

  fs.writeFileSync(`./init-db.d/005_${state}.js`, sb.join(''))

})