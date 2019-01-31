import { action } from 'mobx'
import { lowerCase } from 'lodash'
import { pokeServer } from 'Src/helpers'
import history from 'Src/history'

export default superclass => class extends superclass {
  @action fireSearch = async (endpoint, options) => {
    endpoint = lowerCase(endpoint)
    history.push(`/pokemon/${endpoint}`)
    try {
      const { data } = await pokeServer.get(`pokemon/${endpoint}`, options)
      this.setData('string', endpoint)
      this.setData('pokemon', data)
      this.setData('loaded', true)
      this.setData('error', null)
    } catch (error) {
      this.setData('error', error)
      console.log('SEARCH ERROR', error)
    }
  }

  @action setData = (key, value) => {
    this[key] = value
  }
} 