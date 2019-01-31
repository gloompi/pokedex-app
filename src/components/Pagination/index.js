import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, withHandlers, withState } from 'recompose'
import { Pagination } from 'antd'
import history from 'Src/history'

const Paginator = ({
  dataStore: {
    count,
    limit,
  },
  match: {
    params,
  },
  handleOnChange,
}) => (
  <Pagination
    pageSize={parseInt(limit, 10)}
    current={parseInt(params.page, 10)}
    defaultCurrent={1}
    total={count}
    style={{ padding: '50px' }}
    onChange={handleOnChange}
    showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
  />
)

export default compose(
  inject('dataStore'),
  withState('page', 'setPage', 1),
  withHandlers({
    handleOnChange: ({ setPage }) => (page) => {
      history.push(`/pokemons/${page}`)
      setPage(page)
    }
  }),
  observer,
)(Paginator)
