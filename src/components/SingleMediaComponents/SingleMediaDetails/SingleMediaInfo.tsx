import React, { FC } from 'react'
import styles from "../../../styles/Single/SingleMedia.module.css"
import Genres from './Genres'
import Runtime from './Runtime'
import Average from './Average'
import Overview from './Overview'
import { useAppSelector } from '../../../hooks/reduxHooks'

const Info: FC = () => {

  const data = useAppSelector(state => state.MediaReducer.data)


  return (
    <div className={styles.info}>
      <h1 className={styles.singleTitle}>
        {data.media_type === "movie" ? data.ownInfo.title : data.ownInfo.name}
        <span className={styles.yearOfTitle}>{data.media_type === "movie" ?
          `(${data.ownInfo.release_date.substr(0, 4)})` :
          `(${data.ownInfo.first_air_date.substr(0, 4)})`}
        </span></h1>
      <div className={styles.singleMovieInfo}>
        <p className={styles.singleMovieDate}>{
          data.media_type === "movie" ?
            data.ownInfo.release_date :
            data.ownInfo.first_air_date}</p>&bull;
        <Genres genres={data.ownInfo.genres} />&bull;
        {data.media_type === "movie" ? <Runtime runtime={data.ownInfo.runtime} /> :
          data.ownInfo.last_episode_to_air !== null ?
            <Runtime runtime={data.ownInfo?.last_episode_to_air?.runtime} /> : <Runtime runtime={0} />
        }
      </div>
      <Average vote_average={data.ownInfo.vote_average} />
      <p className={styles.tagline}>{data.ownInfo.tagline}</p>
      <Overview overview={data.ownInfo.overview} />
    </div>
  )

}

export default Info