import {obj} from '../api/loadData'
import {determineY} from './correlationFunc/determineY'
import {findColetiance} from './correlationFunc/coletiance'
import {findDeviationAndAverageY} from './correlationFunc/deviationY'
import {determineX} from './correlationFunc/determineX'
import {findUniqueAndEUR} from './correlationFunc/uniqueAndEUR'
import {findParametersA} from './correlationFunc/parametersA'
import {findN} from './correlationFunc/parameterN'
import {findDeviationAndAverageX} from './correlationFunc/deviationX'

export let findCorrelation = (currency, corelValue) => {
  const length = obj['EUR'].length;
  const yMax = obj['EUR'].max.value;
  const yMin = obj['EUR'].min.value;
  const arrEUR = obj['EUR'].data;
  let getBaseLog = y => Math.log(y) / Math.log(10);
  let findGroupingInterval = () => Math.floor((yMax - yMin) / Math.floor((1 + 3.322 * getBaseLog(length))) * 1000000) / 1000000;
  const b = findGroupingInterval();
  let findAmountY = () => {
    const z = Math.ceil((yMax - yMin - b) / (b + 1));
    const amountSegments = z + 1;
    return amountSegments * 2;
  }
  const amountY = findAmountY();
  // identify gaps horizontally(y), our dependencies table
  const y = determineY(amountY, yMin, b);
  const y1 = y[0];
  const y2 = y[1];
  // arrCorel(USD or CHF) - exchange rate which will be calculated the correlation EUR
  const arrCorel = obj[corelValue].data;
   // define the parameters of the vertical
  const x = determineX(arrCorel);
  // find wich a number of the EUR exchange rate corresponds to each parameter x
  const uniqueAndEUR = findUniqueAndEUR(x, arrCorel, arrEUR);
  // define each parameter dependency table (a)
  const a = findParametersA(amountY, uniqueAndEUR, y1, y2);
  // folding parameters "a" horizontal and vertical
  const n = findN(a, amountY);
  const nGor = n[0];
  const nVer = n[1];
  const deviationAndAverageX = findDeviationAndAverageX(nGor, x);
  const nTotal = deviationAndAverageX.nTotal;
  const deviationAndAverageY = findDeviationAndAverageY(nTotal, nVer, amountY, y1, y2);
  const averageX = deviationAndAverageX.averageX;
  const averageY = deviationAndAverageY.averageY;
  // calculated the average value of the parameter y1 and y2
  const newY = deviationAndAverageY.y;
  const coletiance = findColetiance(averageX, averageY, nTotal, x, newY, a);
  const deviationX = deviationAndAverageX.deviationX;
  const deviationY = deviationAndAverageY.deviationY;
  const correlation = Math.floor(coletiance * 100 / (deviationX * deviationY)) / 100;
  obj[currency].deviationX = deviationX;
  obj[currency].deviationY = deviationY;
  obj[currency].coletiance = coletiance;
  obj[currency].correlation = correlation;
}
