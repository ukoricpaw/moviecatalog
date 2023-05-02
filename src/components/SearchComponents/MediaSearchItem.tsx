import React, { FC } from 'react'
import styles from "../../styles/Search.module.css"
import noImage from "../../assets/images/noimage.png"
import { MediaItemsTypeWithPerson } from '../../types/MediaTypes'

interface MediaSearchItemProps {
  media: MediaItemsTypeWithPerson;
}

const MediaSearchItem: FC<MediaSearchItemProps> = ({ media }) => {


  return (
    <div className={media.media_type !== "person" ? styles.mediaContainer : styles.mediaContainerPerson}>
      <div className={media.media_type !== "person" ? styles.imageWrapper : styles.imageWrapperPerson}>
        <img className={media.media_type !== "person" ? styles.mediaImage : styles.mediaImagePerson} src={
          media.media_type !== "person" ? (media.data.poster_path ? `https://image.tmdb.org/t/p/original/${media.data.poster_path}` : noImage) :
            (media.data.profile_path ? `https://image.tmdb.org/t/p/original/${media.data.profile_path}` : noImage)} loading="lazy" alt="backdrop" />
      </div>
      <div className={styles.infoWrapper}>
        <h3 className={styles.mediaTitle}>{media.media_type === "tv" || media.media_type === "person" ? media.data.name : media.data.title}</h3>
        <p className={styles.date}>{media.media_type !== "person" ? (media.media_type === "movie" ? media.data.release_date : media.data.first_air_date) :
          media.data.known_for_department}</p>
        <p className={styles.overview}>{media.media_type !== "person" ? media.data.overview : media.data.known_for.map(known_for =>
          <span key={known_for.id} className={styles.known_for}>
            {known_for.media_type === "movie" ? known_for.title : known_for.name}</span>
        )}</p>
      </div>
    </div>
  )
}

export default MediaSearchItem