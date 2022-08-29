db.createCollection("covid_tests_results", {
  timeseries: {
    timeField: "timestamp",
    metaField: "metadata",
    granularity: "hours"
  }
})
