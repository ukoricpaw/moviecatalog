import React from 'react'
import LoadingGif from "../../assets/loading-4802.gif"
import styles from "../../styles/ForPreloader.module.css"

const Preloader = () => {
  return (
    <div className={styles.preloaderContainer}>
      <img className={styles.preloaderGif} src={LoadingGif} />
    </div>
  )
}

export default Preloader