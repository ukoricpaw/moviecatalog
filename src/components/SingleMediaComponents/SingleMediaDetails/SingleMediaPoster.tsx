import React, { FC } from 'react'
import styles from "../../../styles/Single/SingleMedia.module.css"
import { useAppSelector } from '../../../hooks/reduxHooks'

const SingleMediaPoster: FC = () => {

  const { poster_path } = useAppSelector(state => state.MediaReducer.data.ownInfo)

  return (
    <div className={styles.single_poster} style={{ backgroundImage: `url("https://image.tmdb.org/t/p/original/${poster_path}")` }}>
    </div>
  )
}

export default SingleMediaPoster