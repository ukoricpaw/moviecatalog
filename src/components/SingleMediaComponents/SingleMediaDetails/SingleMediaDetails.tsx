import React, { FC } from 'react'
import styles from "../../../styles/Single/SingleMedia.module.css"
import SingleMediaPoster from './SingleMediaPoster'
import Info from './SingleMediaInfo'

const SingleMediaDetails: FC = () => {
  return (
    <div className={styles.singleDetails}>
      <SingleMediaPoster />
      <Info />
    </div>
  )
}

export default SingleMediaDetails