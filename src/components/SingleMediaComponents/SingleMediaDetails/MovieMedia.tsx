import React, { FC } from 'react'
import { SingleGeneralMediaDataType } from '../../../types/ForSingleMedia'
import styles from "../../../styles/Single/SingleMedia.module.css"
import ImageOfSingleMedia from './ImageOfSingleMedia'
import SingleMediaDetails from './SingleMediaDetails'

interface MovieProps {
  data: SingleGeneralMediaDataType;
}

const MovieMedia: FC<MovieProps> = ({ data }) => {
  return (
    <div className={styles.singleWrapper}>
      <ImageOfSingleMedia image={data.ownInfo.backdrop_path as string} />
      <SingleMediaDetails />
    </div>
  )
}

export default MovieMedia