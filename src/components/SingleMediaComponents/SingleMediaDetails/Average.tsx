import React, { FC } from 'react'
import styles from '../../../styles/Single/SingleMedia.module.css'
import starIcon from "../../../assets/icons/PinClipart.com_clipart-start_166209.png"

interface AverageProps {
  vote_average: number;
}

const Average: FC<AverageProps> = ({ vote_average }) => {
  return (
    <div className={styles.voteAverage}>
      <div className={styles.voteAverageImg}>
        <img className={styles.starIcon} src={starIcon} alt="Rate" />
      </div>
      <div className={styles.average}>{vote_average}</div>
    </div>
  )
}

export default Average