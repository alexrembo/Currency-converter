import React, { Component } from 'react'
import './style.scss'
import {findMax} from './utils/max'
import {findMin} from './utils/min'
import {findAverageAndLength} from './utils/average'
import {findFromAverage} from './utils/amountDays'
import {findCorrelation} from './utils/correlation'
import {loadData} from './api/loadData'
import {obj} from 'api/loadData'
import {saveData} from './api/saveData'

export default class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      currency: '',
      visibleMin: false,
      visibleMax: false,
      visibleAverage: false,
      visible: false,
      corelValue: 'USD',
      message: {infoHead : '', infoBody: ''}
    };
  }
  // load exchange rates
  loadData (e) {
    this.setState({currency: e.target.value, visibleMax: false, 
    visibleMin: false, visibleAverage: false, visible: true})
    setTimeout( () => {
      let {currency}  = this.state;
      loadData(currency);
      this.setState({message: {infoHead: 'Please wait a few seconds, "' + currency + '" is loading...', infoBody: ''} })
    }, );
  }
  findMax () {
    let {currency} = this.state;
    findMax(currency);
    this.setState({visibleMax: true})
    this.setState({message: {infoHead: 'Parameter: "max rate" was counted' + '(' + currency + ')', 
    infoBody: 'Max: ' + obj[currency].max.value + ', Date: ' + obj[currency].max.date} })
  }
  findMin () {
    let {currency} = this.state;
    findMin(currency);
    this.setState({visibleMin: true})
    this.setState({message: {infoHead: 'Parameter: "min rate" was counted' + '(' + currency + ')', 
    infoBody: 'Min: ' + obj[currency].min.value + ', Date: ' + obj[currency].min.date.join('\n')} })
  }
  findAverageAndLength () {
    let {currency} = this.state;
    findAverageAndLength(currency);
    this.setState({visibleAverage: true})
    this.setState({message: {infoHead: 'Parameter: "average rate" was counted' + '(' + currency + ')', 
    infoBody: 'Average: ' + obj[currency].average} })
  }
  //Find amount days when the exchange rate was withing 5% on the average exchange rate
  findFromAverage () {
    let {currency} = this.state;
    findFromAverage(currency);
    this.setState({message: {infoHead: 'Parameter: "amount days" was counted' + '(' + currency + ')', 
    infoBody: 'Amount days the exchange rate was ' + 'withing 5% on the average exchange rate: ' + obj[currency].amountDays} })
  }
  saveData() {
  saveData();
  this.setState({message: {infoHead: 'Data sent to the server and stored in "json" file', 
    infoBody: ''} })
  }
  // select two pairs of currencies USD/EUR or CHF/EUR
  selectForCorrelation (e) {
    console.log(e.target.value);
    this.setState({corelValue: e.target.value});
  }
  findCorrelation () {
    let {currency, corelValue} = this.state;
    findCorrelation(currency, corelValue);
    this.setState({message: {infoHead: 'Parameter: "correlation" was counted' + '(' + currency + ')', 
    infoBody: 'deviationX: ' + obj[currency].deviationX + ', deviationY: ' + obj[currency].deviationY +
    ', Coletiance: ' + obj[currency].coletiance + ', Correlation: ' + obj[currency].correlation} })
  } 
  info () {
    let {visibleMax, visibleMin, visibleAverage, visible, message} = this.state;
    return <div>
      <div className='modal fade' id='myModal' role='dialog' aria-labelledby='myModalLabel' aria-hidden='true'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <button type='button' className='close' data-dismiss='modal' aria-hidden='true'>&times;</button>
              <h4 className='modal-title' id='myModalHead'>{message.infoHead}</h4>
            </div>
            <div id='myModalBody' className='modal-body'>
            {message.infoBody}
            </div>
            <div className='modal-footer'>
              <button type='button' className='btn btn-default' data-dismiss='modal'>Закрыть</button>
            </div>
          </div>
        </div>
      </div>
      <div className='row text-center content'>
        <div className='col-xs-4 col-xs-offset-4 col-md-4 col-md-offset-4'>
          <p>Download the data from the official website of the NBU:
          (Pre-need adjustment in the code)</p>
          <button className='button btn btn-danger' onClick={this.saveData} data-toggle='modal' 
            data-target='#myModal'>Save Data</button>
        </div>
      </div>  
      <div className='row text-center'>
        <div className='col-xs-6 col-xs-offset-3 col-md-6 col-md-offset-3'>
          <h1 >Currency converter</h1>
          <p>Here we collected all the information about the currency exchange rate from 1999 to 2016.
          This information will help you to the following:</p>
        </div>
      </div>  
      <div className='row text-center col-xs-offset-2 col-md-offset-2'>
        <div className='col-xs-3 col-md-3'>
          <h3 className='step'>First step</h3>
          <p>Please set currency</p>
          <div className='btn-group'>
            <button type='button' className='btn btn-default' value='USD' onClick={::this.loadData} data-toggle='modal' 
            data-target='#myModal'>USD</button>
            <button type='button' className='btn btn-default' value='EUR' onClick={::this.loadData} data-toggle='modal' 
            data-target='#myModal'>EUR</button>
            <button type='button' className='btn btn-default' value='CHF' onClick={::this.loadData} data-toggle='modal' 
            data-target='#myModal'>CHF</button>
          </div>
        </div>
        <div className='col-xs-3 col-md-3'>
          <h3 className='step'>Second step</h3>
          <p>Find value of the course for the entire period</p>
          <button className='button btn btn-info' value='min' onClick={::this.findMin} data-toggle='modal' 
          data-target='#myModal' disabled={'' + (visible  ? '': 'disabled')}>Find minimum</button>
          <button className='button btn btn-info' value='max' onClick={::this.findMax} data-toggle='modal' 
          data-target='#myModal' disabled={'' + (visible  ? '': 'disabled')}>Find maximal</button>
          <button className='button btn btn-info' value='average' onClick={::this.findAverageAndLength} data-toggle='modal' 
          data-target='#myModal' disabled={'' + (visible  ? '': 'disabled')}>Find average and length</button>
        </div>
        <div className='col-xs-3 col-md-3'>
          <h3 className='step'>Third step</h3>
            <p>How long in days the exchange rate was withing 5% on the average exchange rate </p>
            <button className='button btn btn-success' onClick={::this.findFromAverage} 
            disabled={'' + (visibleAverage  ? '': 'disabled')} data-toggle='modal' 
            data-target='#myModal'>Find</button>
            <p className='step'>Attention!!! Before starting it is necessary to calculate all the coefficients of all currencies</p>
            <p>Find correlation between 
            <button type='button' className='btn btn-default button' value='USD' onClick={::this.selectForCorrelation}>USD/EUR</button>
            , and 
              <button type='button' className='btn btn-default' value='CHF' onClick={::this.selectForCorrelation}>CHF/EUR</button> 
            from 1999-01-01 until today </p>
            <button className='button btn btn-success' onClick={::this.findCorrelation} 
            disabled={'' + (visibleMax && visibleMin && visibleAverage ? '': 'disabled')} data-toggle='modal' 
            data-target='#myModal'>Find</button>
        </div>
      </div>
    </div>
  }
  render () {
    return <div>
      {this.info()}
    </div>  
  }
}
