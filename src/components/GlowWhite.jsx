import React from 'react'

export const GlowWhite = ({children}) => {
  return (
    <span className={`text-white bg-white drop-shadow-[0_0_0.3rem_#ffffff] bg-clip-text font-bold`}>{children}</span>
  )
}
