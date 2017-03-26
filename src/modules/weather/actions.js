import axios from 'axios'

// See api docs for details http://openweathermap.org/forecast5
const API_KEY = 'c62c520512c85a69f02cdab40bd19072'
const COUNTRY_CODE = 'us'
const getURL = q => `http://api.openweathermap.org/data/2.5/forecast?q=${q},${COUNTRY_CODE}&appid=${API_KEY}`

export const FETCH_WEATHER = 'weather/FETCH_WEATHER'
export const FETCH_WEATHER_SUCCESS = 'weather/FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_ERROR = 'weather/FETCH_WEATHER_ERROR'

export const fetchWeather = query => async dispatch => {
  dispatch({ type: FETCH_WEATHER })

  try {
    const { data } = await axios.get(getURL(query))
    return dispatch({ type: FETCH_WEATHER_SUCCESS, data })
  } catch (e) {
    console.error(e)
    return dispatch({ type: FETCH_WEATHER_ERROR, e })
  }
}
