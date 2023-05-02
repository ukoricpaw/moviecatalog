import React from 'react'
import styles from "../../../styles/Single/MoreInfo.module.css"
import { Link } from 'react-router-dom'
import { useAppSelector } from '../../../hooks/reduxHooks'

const KeyWords = () => {

  const data = useAppSelector(state => state.MediaReducer.data)
  return (
    <div className={styles.keywords}>
      <p className={styles.keywordTitle}>Keywords</p>
      <div className={styles.keywordsList}>
        {data.media_type === "movie" ?
          data.keywords.keywords.map((keyword, index) => <li key={index} className={styles.keyword}>{keyword.name}</li>)
          : data.keywords.results.map((keyword, index) => <li key={index} className={styles.keyword}>{keyword.name}</li>)}
      </div>
    </div>
  )
}

export default KeyWords