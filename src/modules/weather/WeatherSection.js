import React from 'react'
import { connect } from 'react-redux'

import { fetchWeather } from './actions'
import { SearchBar } from './searchbar/index'


let WeatherSection = ({
  fetchWeather
}) => (
  <div>
    <SearchBar />
  </div>
)

export default connect(
  null,
  { fetchWeather }
)(WeatherSection)
