import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jsonList: [],
    };
  };



  componentDidMount() {
    fetch('http://api.gios.gov.pl/pjp-api/rest/station/findAll', {
      method: 'GET',
      mode: "cors", // no-cors, cors, *same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "include", // include, same-origin, *omit
      headers: {
          'Access-Control-Allow-Origin':'*'
     },
    

    })
    .then(response => response.json()) // parses response to JSON
      .then(json => {
        console.log(json)
       

      })
      .catch(error => {
        console.log(error)
      });
  }
  render() {
      return <h1>Hi</h1>
    }
}

export default App;
