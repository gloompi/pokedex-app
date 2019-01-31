import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle } from 'recompose'
import { Card, Row, Col } from 'antd'
import { capitalize } from 'lodash'

import Stats from './Stats'

const List = ({
  dataStore: {
    loaded,
    error,
    entities,
  },
}) => {
  if (error) return <h2>Something went wrong, while fetching data</h2>
  return (
    <Row>
      {
        loaded
          ? entities.map(({
            sprites: {
              front_default,
            },
            id,
            name,
            stats,
          }) => (
            <Col span={6} key={id}>
              <Card
                title={capitalize(name)}
                style={{ margin: '5px' }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-around',
                }}>
                  <img
                    src={front_default}
                    style={{ width: 100 }}
                    alt={name}
                  />
                  <Stats stats={stats} />
                </div>
              </Card>
            </Col>
          ))
          : <h2>Loading...</h2>
      }
    </Row>
  )
}

export default compose(
  inject('dataStore'),
  lifecycle({
    componentDidMount() {
      const { match: {  params }, dataStore } = this.props
      const {
        fetch,
        loaded,
        limit,
        setData,
      } = dataStore
      const offsetMax = params.page * limit
      const offset = offsetMax - limit
      if (!loaded) {
        fetch(`pokemon/?offset=${offset}&limit=${limit}`)
        setData('offset', offset)
      }
    },
    componentDidUpdate({ match: { params: { page } } }) {
      const {
        dataStore: { fetch, limit, setData },
        match: { params },
      } = this.props
      if (page !== params.page) {
        setData('loaded', false)

        const offsetMax = params.page * limit
        const offset = offsetMax - limit

        fetch(`pokemon/?offset=${offset}&limit=${limit}`)
        setData('offset', offset)
      }
    }
  }),
  observer,
)(List)