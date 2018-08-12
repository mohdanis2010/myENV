import React, {Component} from 'react';
import './App.css';
import Header from './components/Header'
import Weather from './components/Weather'
import Aside from './components/Aside'

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Header/>
        <Aside/>
        <div className="content-wrapper main-default">
          <div className="main-info">
            <div className="env-info clear">
              <Weather/>
              <div className="clear"></div>
              <AppTable/>
              <div className="clear"></div>
              <AppChart/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class AppTable extends Component {
  render() {
    return (
      <div className="env-table">
        <AppPSI/>
        <div className="env-item-split"></div>
        <Rain/>
        <div className="env-item-split"></div>
        <Dengue/>
        <div className="env-item-split"></div>
        <AppItemAdd/>
      </div >
    )
  }
}
// Breakdown into small functional Components
const AppPSI = () => (
  <div className="env-item">
    <div>
      <span>PSI</span>
    </div>
    <div className="psi-data">
      <span>40</span>
    </div>
    <div>
      <span>Good</span>
    </div>
  </div>
)

const Rain = () => (
  <div className="env-item">
    <div>
      RAIN
    </div>
    <div className="env-itemrain-num">
      <span>0</span>
    </div>
    <div>
      mm
    </div>
  </div>
)

const Dengue = () => (
  <div className="env-item">
    <div>
      DENGUE
    </div>
    <div>
      <img src={"./img/dengue.png"} style={{
        height: '40px'
      }}/>
    </div>
    <div></div>
  </div>
)

const AppItemAdd = () => (
  <div className="env-item env-item-add">
    <div className="env-item-addbtn">
      <li
        className="ion-ios-plus-outline"
        data-pack="ios"
        data-tags="add, include, new, invite, +"></li>
    </div>
    <div className="env-item-addword">
      Add
    </div>
  </div>
)

const AppChart = () => (
  <div className="env-chart">
    <div className="env-chart-title">
      <span className="et-tide">Tide</span>

      <div className="env-chart-titlepoint">
        <li className="ion-record" data-pack="default" data-tags="music, circle"></li>
      </div>
      <span className="et-sun">Sunrise &amp; Sunset</span>
    </div>
    <div style={{
      height: "300px",
      width: "1080px"
    }}>
      <canvas id="areaChart" width="1080" height="300"></canvas>
    </div>

  </div>
)

export default App;
