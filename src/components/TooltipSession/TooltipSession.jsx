import React from 'react'

import './TooltipSession.scss'

export default function TooltipSession({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <p className="tooltip__text">{payload[0].value} min</p>
      </div>
    )
  }
  return null
}
