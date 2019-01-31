import { observable } from 'mobx'

export default class {
  @observable entities = []
  @observable count = 1
  @observable offset = 0
  @observable limit = 10
  @observable next = null
  @observable previous = null
  @observable loaded = false
  @observable error = false
}
