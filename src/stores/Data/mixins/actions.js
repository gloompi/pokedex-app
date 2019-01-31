import { action } from 'mobx'
import { pokeServer } from 'Src/helpers'

export default superclass => class extends superclass {
  @action fetch = async (endpoint, options) => {
    try {
      const { data } = await pokeServer.get(endpoint, options)
      const { results, count, next, previous } = data
      const result = await Promise.all(results.map(async ({ name }) => {
        const { data } = await pokeServer.get(`pokemon/${name}`)
        return data
      }))

      this.setData('entities', result)
      this.setData('count', count)
      this.setData('next', next)
      this.setData('previous', previous)
      this.setData('loaded', true)
      this.setData('error', null)
    } catch (error) {
      this.setData('error', error)
      console.log('FETCH ERROR---', error)
    }
  }

  @action setData = (key, value) => {
    this[key] = value
  }
}