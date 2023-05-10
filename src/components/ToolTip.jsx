import React from 'react'
import "./ToolTip.css"

export default function ToolTip({message}) {
  return (
    <span className="tool-tip">{message}</span>
  )
}
