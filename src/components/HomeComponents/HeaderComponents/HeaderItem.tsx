import React, { FC } from 'react'
import styles from "../../../styles/Home/Home.module.css"
import { Link } from 'react-router-dom'
import { MovieTvMedia } from '../../../types/MediaTypes'
import { useMediaTypeCheck } from '../../../hooks/useMediaCheck'

interface detailsOfHeaderItem {
  details: MovieTvMedia;
}


const HeaderItem: FC<detailsOfHeaderItem> = ({ details }) => {


  return (
    <Link to={`/${details.media_type}/${details.id}`}>
      <div className={styles.itemOfHeader} >
        <div style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${details?.backdrop_path}")`
        }} className={styles.backgroundImage}>
        </div>
        <div className={styles.itemInfo}>
          <h1 className={styles.title}>{useMediaTypeCheck(details)}</h1>
          <p className={styles.description}>{details.overview}</p>
        </div>
      </div >
    </Link>
  )
}

export default HeaderItem