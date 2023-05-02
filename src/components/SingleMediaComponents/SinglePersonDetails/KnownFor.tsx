import React, { FC } from 'react'
import SliderComponent from '../../SliderComponents/SliderComponent'
import styles from "../../../styles/Single/SinglePerson.module.css"
import mediaCardStyles from "../../../styles/MediaCard.module.css"
import { HomeMovieMedia, HomeTvMedia } from '../../../types/MediaTypes'

interface Credits {
  movie_credits: HomeMovieMedia[],
  tv_credits: HomeTvMedia[],
}


const KnownFor: FC<Credits> = ({ movie_credits, tv_credits }) => {
  return (
    <div className={styles.knownFor}>
      {movie_credits.length !== 0 && <div className={styles.knownForList}>
        <div className={mediaCardStyles.cardWrapper}>
          <h2 className={styles.knownForTitle}>Movie Credits:</h2>
          <SliderComponent data={{ media_type: "movie", items: movie_credits.slice(0, 10) }} dots={false} slidesToScroll={2} slidesToShow={4} />
          {movie_credits.length > 11 && <div className={styles.moreButton}><p className={styles.moreTitle}>More</p></div>}
        </div>
      </div>}
      {tv_credits.length !== 0 && <div className={styles.knownForList}>
        <div className={mediaCardStyles.cardWrapper}>
          <h2 className={styles.knownForTitle}>TV Credits:</h2>
          <SliderComponent data={{ media_type: "tv", items: tv_credits.slice(0, 10) }} dots={false} slidesToScroll={2} slidesToShow={4} />
          {tv_credits.length > 10 && <div className={styles.moreButton}><p className={styles.moreTitle}>More</p></div>}
        </div>
      </div>}
    </div>
  )
}

export default KnownFor