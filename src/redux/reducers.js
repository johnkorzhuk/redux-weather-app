import { combineReducers } from 'redux'

import { WeatherReducer } from './../modules/index'

export default combineReducers({
  weather: WeatherReducer
})
