import LoadingGif from "../../assets/preloader.gif"
import styles from "../../styles/ForPreloader.module.css"

const Preloader = () => {
  return (
    <div className={styles.preloaderContainer}>
      <img className={styles.preloaderGif} src={LoadingGif} />
    </div>
  )
}

export default Preloader