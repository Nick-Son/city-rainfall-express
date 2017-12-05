import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { fetchResults, fetchCityData } from './api/wtr'
import './bootstrap-4.0.0-beta.2-dist/css/bootstrap.css';

class App extends Component {
  state = {
    records: null,
    cities: null,
    melbourneData: null,
    displayCityData: false
  }

  componentDidMount() {
    this.loadResults()
  }

  toggleCityData = () => {
    this.setState((prevState) => {
      const cityDataDisplay = prevState.displayCityData;
      return {
        displayCityData: !cityDataDisplay
      }
    })
  }

  loadResults = () => {
    const { records, cities, melbourneData } = this.state

    fetchResults()
      .then((results) => {
        console.log(results);
        this.setState({
          records: results
        })
      })

    fetchCityData('melbourne')
      .then((result) => {
        console.log(result)
        this.setState({
          melbourneData: result
        })
      })
  }

  render() {
    const records = this.state.records;
    const melbourneData = this.state.melbourneData;
    const displayCityData = this.state.displayCityData;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Built With</h1>
        </header>
        <div className="container">
          <table className="table table-stripped">
            <thead>
              <tr>
                <th>Date</th>
                <th>Location</th>
                <th>Rainfall</th>
              </tr>
            </thead>
            <tbody>
              {
                !!records ? (
                  records.map((record) => {
                    return (
                      <tr>
                        <td> { record.date } </td>
                        <td className="text-link" onClick={ (event) => {
                          this.toggleCityData()
                          } }>
                          { record.name }
                          {
                            record.name === 'Australia/Melbourne' && !!displayCityData ? (
                              (
                              <ul className="text-center container small text-muted">
                                <li>Monthly Average: {Math.round(melbourneData.average * 1000) / 1000}</li>
                                <li>Monthly Maxmimum: {melbourneData.max}</li>
                                <li>Monthly Median: {melbourneData.median}</li>
                              </ul>
                              )
                            ) : (null)
                          }
                        </td> 
                        <td> { record.rainFall } </td>                    
                      </tr>
                    )
                  }) 
                  ) : (null)
              }
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
