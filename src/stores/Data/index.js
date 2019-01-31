import { compose } from 'recompose'

import Data from './Data'
import actions from './mixins/actions'

export default compose(
  actions,
)(Data)