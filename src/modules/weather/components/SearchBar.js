import React, { Component, PropTypes } from 'react'
const { func } = PropTypes
const initState = {
  input: ''
}

export default class SearchBar extends Component {
  static propTypes = {
    fetchWeather: func.isRequired
  }

  state = initState

  _handleCange = e => {
    this.setState({ input: e.target.value })
  }

  _handleFormSubmit = e => {
    e.preventDefault()

    this.props.fetchWeather(this.state.input)

    this.setState(initState)
  }

  render () {
    return (
      <div className='col-md-8 col-md-offset-2'>
        <form
          className='input-group'
          onSubmit={this._handleFormSubmit}>
          <input
            className='form-control'
            type='text'
            placeholder='new york'
            value={this.state.input}
            onChange={this._handleCange} />
          <span className='input-group-btn'>
            <button className='btn btn-secondary' type='submit'>Submit</button>
          </span>
        </form>
      </div>
    )
  }
}
