import {
  FETCH_WEATHER,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR
} from './actions'

const INITIAL_STATE = {
  data: {},
  error: null,
  loading: false,
  minMaxTemps: {
    min: null,
    max: null
  }
}

const getMinMaxTemp = (state, action) => {
  const newLoc = action.data[Object.keys(action.data)[0]]
  const { min, max } = state
  let newMinMaxTemp = {
    min: newLoc.currently.temperature,
    max: newLoc.currently.temperature
  }

  newLoc.hourly.data.reduce((acc, val) => {
    if (val.temperature < acc.min) acc.min = val.temperature
    else if (val.temperature > acc.max) acc.max = val.temperature
    return acc
  }, newMinMaxTemp)

  if (!min) {
    return newMinMaxTemp
  } else {
    if (min < newMinMaxTemp.min) newMinMaxTemp.min = min
    else if (max > newMinMaxTemp.max) newMinMaxTemp.max = max
    return newMinMaxTemp
  }
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_WEATHER:
      return {
        ...state,
        loading: true
      }

    case FETCH_WEATHER_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          ...state.data,
          ...action.data
        },
        minMaxTemps: getMinMaxTemp(state.minMaxTemps, action)
      }

    case FETCH_WEATHER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    default:
      return state
  }
}
