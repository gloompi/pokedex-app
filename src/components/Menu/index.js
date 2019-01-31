import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, withHandlers } from 'recompose'
import { Menu } from 'antd'

const selectItems = [10, 20, 50]

const MenuList = ({ handleSelect }) => (
  <Menu
    theme="dark"
    mode="horizontal"
    defaultSelectedKeys={['10']}
    style={{ lineHeight: '64px' }}
    onSelect={handleSelect}
  >
    {selectItems.map(key => (
      <Menu.Item key={key}>{key}</Menu.Item>
    ))}
  </Menu>
)

export default compose(
  inject('dataStore'),
  withHandlers({
    handleSelect: ({ dataStore: { fetch, setData, offset } }) => ({ key }) => {
      setData('loaded', false)
      fetch(`pokemon/?offset=${offset}&limit=${key}`)
      setData('limit', key)
    }
  }),
  observer,
)(MenuList)
