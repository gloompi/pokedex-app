import { compose } from 'recompose'

import Search from './Search'
import actions from './mixins/actions'

export default compose(
  actions,
)(Search)