import React from 'react'
import RestCard from '../utils/RestCard'

const Shimmer = ({StyleCard}) => {
  return (
    <RestCard
            key={"Loading"}
            name={"Loading"}
            imgSrc={"default-image.jpg"}
            desc={"Loading"}
            price={"Loading"}
            styles={StyleCard}
          />
  )
}

export default Shimmer