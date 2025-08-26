import React from 'react'

const Header = ({message}) => {
  return (
    <div>
      <nav style={{backgroundColor : "#c59771bd" , padding : "16px 32px"}}>
        <h1>{message}</h1>
      </nav>
    </div>
  )
}

export default Header