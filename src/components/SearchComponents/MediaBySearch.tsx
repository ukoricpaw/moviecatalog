import React, { FC } from 'react'
import { useParams } from 'react-router-dom'
import ReturnResultsBySearch from './ReturnResultsBySearch'


const MediaBySearch: FC = () => {

  const { media } = useParams();


  switch (media) {
    case "movie":
      return (
        <ReturnResultsBySearch media={media} type="Movies" />
      )
    case "person":
      return (
        <ReturnResultsBySearch media={media} type="People" />
      )
    case "tv":
      return (
        <ReturnResultsBySearch media={media} type="TVs" />
      )
    default:
      return <div>Error</div>
  }
}

export default MediaBySearch