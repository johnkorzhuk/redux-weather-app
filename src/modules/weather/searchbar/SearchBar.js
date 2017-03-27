import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { fetchWeather } from './../actions'

const initState = {
  input: ''
}

const Wrapper = styled.div`
  margin-top: 25px;
`

class SearchBar extends Component {
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
      <Wrapper className='col-md-8 col-md-offset-2'>
        <form
          className='input-group'
          onSubmit={this._handleFormSubmit}>
          <input
            className='form-control'
            type='text'
            placeholder='city or zip'
            value={this.state.input}
            onChange={this._handleCange} />
          <span className='input-group-btn'>
            <button className='btn btn-secondary' type='submit'>Submit</button>
          </span>
        </form>
      </Wrapper>
    )
  }
}

export default connect(
  null,
  { fetchWeather }
)(SearchBar)
