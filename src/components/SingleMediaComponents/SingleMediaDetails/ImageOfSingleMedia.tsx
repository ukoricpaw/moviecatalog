import React, { FC } from 'react'
import styles from "../../../styles/Single/SingleMedia.module.css"

interface Props {
  image: string;
}

const ImageOfSingleMedia: FC<Props> = ({ image }) => {
  return (
    <div className={styles.single}>
      <img className={styles.singleImage} alt="background_image" src={`https://image.tmdb.org/t/p/original/${image}`} />
    </div>
  )
}

export default ImageOfSingleMedia