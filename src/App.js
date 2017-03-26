import React, { Component } from 'react'

import WeatherSection from './modules/weather/WeatherSection'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <WeatherSection />
      </div>
    )
  }
}

export default App
