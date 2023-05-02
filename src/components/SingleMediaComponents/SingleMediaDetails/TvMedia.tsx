import React, { FC } from 'react'
import styles from "../../../styles/Single/SingleMedia.module.css"
import ImageOfSingleMedia from './ImageOfSingleMedia'
import SingleMediaDetails from './SingleMediaDetails'
import { SingleGeneralMediaDataType } from '../../../types/ForSingleMedia'

interface TvProps {
  data: SingleGeneralMediaDataType
}

const TvMedia: FC<TvProps> = ({ data }) => {
  return (
    <div className={styles.singleWrapper}>
      <ImageOfSingleMedia image={data.ownInfo.backdrop_path as string} />
      <SingleMediaDetails />
    </div>
  )
}

export default TvMedia