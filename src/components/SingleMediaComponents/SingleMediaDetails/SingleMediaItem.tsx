import React, { FC } from 'react'
import styles from "../../../styles/MediaCard.module.css"
import starIcon from "../../.././assets/icons/PinClipart.com_clipart-start_166209.png"
import { MediaItemsType } from '../../../types/MediaTypes'
import noImage from "../../../assets/images/noimage.png"

interface MediaItemProps {
  item: MediaItemsType
}

const SingleMediaItem: FC<MediaItemProps> = ({ item }) => {

  function isValidDate(dateString: string): boolean {
    const date = new Date(dateString);
    return !isNaN(date.getTime()) && dateString === date.toISOString().slice(0, 10);
  }

  return (
    <section className={styles.card}>
      <div className={styles.imageContainer}>
        <img className={styles.image} loading="lazy" src={item.data.poster_path ? `https://image.tmdb.org/t/p/original/${item.data.poster_path}` : noImage} alt="Err" />
        <div className={styles.hiddenInfo}>
          <div className={styles.rating}>
            <div className={styles.starRateContainer}>
              <img className={styles.starIcon} src={starIcon} alt="Rate" />
            </div>
            <p className={styles.rate}>{item.data.vote_average.toString().slice(0, 3)}</p>
          </div>
          <div className={styles.line}></div>
          <p className={styles.releaseDate}>{Intl.DateTimeFormat("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          }).format(item.media_type === "movie" ?
            (isValidDate(item.data.release_date) ? new Date(item.data.release_date) : 2000) :
            (isValidDate(item.data.first_air_date) ? new Date(item.data.first_air_date) : 2000))}</p>
        </div>
      </div>
      <div className={styles.info__Container}>
        <p className={styles.cardTitle} title={item.media_type === "movie" ? item.data.title : item.data.name}>{item.media_type === "movie" ? item.data.title : item.data.name}</p>
      </div>
    </section>
  )
}

export default SingleMediaItem