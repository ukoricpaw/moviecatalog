import React, { FC } from 'react'
import styles from '../../../styles/Single/SingleMedia.module.css'


interface OverviewProps {
  overview: string;
}

const Overview: FC<OverviewProps> = ({ overview }) => {

  return (
    <div className={styles.overview}>
      <p className={styles.overviewTitle}>Overview</p>
      <p className={styles.overviewBody}>{overview}</p>
    </div>
  )
}

export default Overview