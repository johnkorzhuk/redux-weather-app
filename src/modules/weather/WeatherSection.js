import React from 'react'
import { connect } from 'react-redux'

import { fetchWeather } from './actions'
import SearchBar from './components/SearchBar'
import Loader from './components/Loader'

let WeatherSection = ({
  weather: { loading },
  fetchWeather
}) => (
  <div>
    <SearchBar fetchWeather={fetchWeather} />

    { loading && <Loader /> }
  </div>
)

export default connect(
  state => ({
    weather: state.weather
  }),
  { fetchWeather }
)(WeatherSection)
