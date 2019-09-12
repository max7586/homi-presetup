import React, { Component } from 'react'
import { Button, Input, Required } from '../Utils/Utils'

import AuthApiService from '../../services/auth-api-service'

export default class ListMyPropertyForm extends Component {
  static defaultProps = {
    onRegistrationSuccess: () => {}
  }

  state = { error: null }

  handleSubmit = ev => {
    ev.preventDefault()
    const { full_name, nick_name, user_name, password } = ev.target

     this.setState({ error: null })
     AuthApiService.postUser({
       user_name: user_name.value,
       password: password.value,
       full_name: full_name.value,
       nickname: nick_name.value,
     })
       .then(user => {
    full_name.value = ''
    nick_name.value = ''
    user_name.value = ''
    password.value = ''
    this.props.onRegistrationSuccess()
           })
       .catch(res => {
         this.setState({ error: res.error })
       })
  }


  render() {
    const { error } = this.state
    return (
      <form
        className='ListMyPropertiesForm'
        onSubmit={this.handleSubmit}
      >
        <div role='alert'>
          {error && <p className='red'>{error}</p>}
        </div>
        <div className='Address'>
          <label htmlFor='ListMyPropertiesForm__address'>
            Address <Required />
          </label>
          <Input
            name='Address'
            placeholder='101 street, city, state, ZIP code'
            type='text'
            required
            id='ListMyPropertiesForm__address'>
          </Input>
        </div>
        <div className='img'>
          <label htmlFor='ListMyPropertiesForm__img'>
            Image URL <Required />
          </label>
          <Input
            name='img'
            placeholder= 'https://loremflickr.com.......'
            type='text'
            required
            id='ListMyPropertiesForm__img'>
          </Input>
        </div>
        <div className='description'>
          <label htmlFor='ListMyPropertiesForm__description'>
            Description <Required />
          </label>
          <Input
            name='description'
            placeholder='Detail about house, 560 Sq-Ft 6 Bedrooms 2 Garage 5 Bathroom. FOR RENT'
            type='description'
            required
            id='ListMyPropertiesForm__description'>
          </Input>
        </div>
        <div className='nick_name'>
          <label htmlFor='ListMyPropertiesForm__nick_name'>
            Nickname
          </label>
          <Input
            name='nick_name'
            type='text'
            required
            id='ListMyPropertiesForm__nick_name'>
          </Input>
        </div>
        <Button type='submit'>
          Submit
        </Button>
      </form>
    )
  }
}
