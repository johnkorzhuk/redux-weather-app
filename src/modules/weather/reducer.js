import {
  FETCH_WEATHER,
  FETCH_WEATHER_SUCCESS,
  FETCH_WEATHER_ERROR
} from './actions'

const INITIAL_STATE = {
  data: [],
  error: null,
  loading: false
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
        data: action.data
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
