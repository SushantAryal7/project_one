import React from 'react'
import "./Button.css"

function Button(props) {
  return (
    <button type={props.type || "button"} onClick={props.onClick}>{props.children}</button>
  )
}

export default Button;