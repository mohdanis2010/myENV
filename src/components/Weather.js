import React, { Component } from 'react';

export default class Weather extends Component {
  render() {
    return (
        <div className="env-weather">
        <div className="env-weatherleft"><img src="./img/cloudy.png" />
        </div>
        <div className="env-weatherright">
            <div className="env-weathermsg">Cloudy</div>
            <div className="env-weatherdata">
                <img className="env-weatherdata-tem" src="./img/temperature.png" /><span>29.2℃</span>
                <img className="env-weatherdata-wat" src="./img/water.png" /><span>73%</span>
            </div>

        </div>
    </div>);
  }
}
 