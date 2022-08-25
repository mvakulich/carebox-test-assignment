
export interface IStateMetadata {
  state: string;
  notes: string;
  covid19Site: string;
  covid19SiteSecondary: string;
  covid19SiteTertiary: string;
  covid19SiteQuaternary: string;
  covid19SiteQuinary: string;
  twitter: string;
  covid19SiteOld: string;
  covidTrackingProjectPreferredTotalTestUnits: string;
  covidTrackingProjectPreferredTotalTestField: string;
  totalTestResultsField: string;
  pui: string;
  pum: boolean;
  name: string;
  fips: string;
}

export interface IStateCurrentData {
  date: number;
  state: string;
  positive: number;
  probableCases: number | null;
  negative: number | null;
  pending: number | null;
  totalTestResultsSource: "totalTestsViral";
  totalTestResults: 1731628;
  hospitalizedCurrently: 33;
  hospitalizedCumulative: 1293;
  inIcuCurrently: number | null;
  inIcuCumulative: number | null;
  onVentilatorCurrently: number;
  onVentilatorCumulative: null;
  recovered: number | null;
  lastUpdateEt: string;
  dateModified: string;
  checkTimeEt: string;
  death: number;
  hospitalized: number;
  hospitalizedDischarged: null;
  dateChecked: string;
  totalTestsViral: number;
  positiveTestsViral: number;
  negativeTestsViral: number;
  positiveCasesViral: number | null;
  deathConfirmed: number | null;
  deathProbable: number | null;
  totalTestEncountersViral: number | null;
  totalTestsPeopleViral: number | null;
  totalTestsAntibody: number | null;
  positiveTestsAntibody: number | null;
  negativeTestsAntibody: number | null;
  totalTestsPeopleAntibody: number | null;
  positiveTestsPeopleAntibody: number | null;
  negativeTestsPeopleAntibody: number | null;
  totalTestsPeopleAntigen: number | null;
  positiveTestsPeopleAntigen: number | null;
  totalTestsAntigen: number | null;
  positiveTestsAntigen: number | null;
  fips: string;
  positiveIncrease: number;
  negativeIncrease: number;
  total: number;
  totalTestResultsIncrease: number;
  posNeg: number;
  dataQualityGrade: number | null;
  deathIncrease: number;
  hospitalizedIncrease: number;
  hash: string;
  commercialScore: number;
  negativeRegularScore: number;
  negativeScore: number;
  positiveScore: number;
  score: number;
  grade: string;
}

export type ICovidStateData = IStateMetadata & IStateCurrentData;