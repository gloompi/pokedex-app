import { observable } from 'mobx'

export default class {
  @observable string = ''
  @observable pokemon = {}
  @observable loaded = false
  @observable error = null
}