import React from 'react'
import { replace, capitalize } from 'lodash'

export default ({ stats, fontSize = 16 }) => (
  <ul>
    {stats.map(({
      stat: { name },
      base_stat,
    }) => (
      <li key={name}>
        <span style={{ fontSize }}><b>{capitalize(replace(name, '-', ' '))}</b>: {base_stat}</span>
      </li>
    ))}
  </ul>
)
