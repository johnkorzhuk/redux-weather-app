import axios from 'axios'

const DARKSKY_KEY = 'e2c0603835aac191fbe931b8d2a209ad'
const GOOGLE_KEY = 'AIzaSyC5_0aZRIIEf-B7_4fgtJqIb2CBpBRnp6A'
const googleURL = q => `https://maps.googleapis.com/maps/api/geocode/json?address=${q}&key=${GOOGLE_KEY}`
const darkskyURL = (lat, lng) => `https://api.darksky.net/forecast/${DARKSKY_KEY}/${lat},${lng}`

export const FETCH_WEATHER = 'weather/FETCH_WEATHER'
export const FETCH_WEATHER_SUCCESS = 'weather/FETCH_WEATHER_SUCCESS'
export const FETCH_WEATHER_ERROR = 'weather/FETCH_WEATHER_ERROR'

export const fetchWeather = query => async dispatch => {
  dispatch({ type: FETCH_WEATHER })

  try {
    const geocode = await axios.get(googleURL(query))
    const address = geocode.data.results[0].formatted_address
    const { lat, lng } = geocode.data.results[0].geometry.location

    const forecast = await axios.get(darkskyURL(lat, lng))
    const data = {
      [address]: forecast.data
    }
    return dispatch({ type: FETCH_WEATHER_SUCCESS, data })
  } catch (e) {
    console.error(e)
    return dispatch({ type: FETCH_WEATHER_ERROR, e })
  }
}
