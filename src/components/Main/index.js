import React from 'react'

import List from 'Components/List'
import Pagination from 'Components/Pagination'

export default (props) => (
  <main
    className='main'
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <List {...props} />
    <Pagination {...props} />
  </main>
)
