import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose } from 'recompose'
import { Input } from 'antd'

const Search = ({ searchStore: { fireSearch } }) => (
  <Input.Search
    placeholder="Input pokemon name"
    onSearch={fireSearch}
    style={{ width: '100%' }}
  />
)

export default compose(
  inject('searchStore'),
  observer,
)(Search)
