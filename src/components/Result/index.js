import React from 'react'
import { inject, observer } from 'mobx-react'
import { compose, lifecycle } from 'recompose'
import { Card } from 'antd'
import { capitalize } from 'lodash'

import Stats from 'Components/List/Stats'

const Result = ({
  searchStore: {
    pokemon,
    loaded,
    error,
  }
}) => {
  if (error) return <h1>error while fetching Pokemon</h1>
  if (!loaded) return <h1>Loading...</h1>
  const {
    sprites: {
      front_default,
    },
    name,
    stats,
  } = pokemon
  return (
    <Card
      title={capitalize(name)}
      style={{
        margin: '25px',
        width: '70%',
        height: '70%',
      }}
    >
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: '100%'
      }}>
        <img
          src={front_default}
          style={{ width: 150 }}
          alt={name}
        />
        <Stats fontSize={25} stats={stats} />
      </div>
    </Card>
  )
}

export default compose(
  inject('searchStore'),
  lifecycle({
    componentDidMount() {
      const { match: { params } } = this.props
      const { fireSearch, loaded } = this.props.searchStore
      if (!loaded) {
        fireSearch(params.name)
      }
    }
  }),
  observer,
)(Result)