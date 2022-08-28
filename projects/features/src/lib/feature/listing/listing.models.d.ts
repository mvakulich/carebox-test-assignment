export interface IStateCurrentData {
  _id: string;
  date: number;
  state: string;
  positive: number;
  probableCases: number | null;
  negative: number | null;
  pending: number | null;
  totalTestResults: number;
  hospitalizedCurrently: number;
  hospitalizedCumulative: number;
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

export interface IStateMetadata {
  state: string;
  notes: string;
  _id: string;
}

export type ICovidStateData = IStateCurrentData & {
  metadata: IStateMetadata
};
