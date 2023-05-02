import React, { FC } from 'react'
import styles from "../../../styles/Single/MoreInfo.module.css"
import Carousel from '../../HomeComponents/HeaderComponents/Carousel';
import { useAppSelector } from '../../../hooks/reduxHooks';

const ShowImages: FC = () => {

  const images = useAppSelector(state => state.MediaReducer.data.images.backdrops)

  const backdropImages = images.slice(0, 11)

  return (
    <div className={styles.imagesWrapper}>
      <h2 className={styles.imagesTitle}>Media</h2>
      <Carousel>
        {backdropImages.map((image, index) =>
          <div className={styles.imagesContainer} key={index}>
            <img className={styles.image} src={`https://image.tmdb.org/t/p/original${image?.file_path}`} />
          </div>)}
      </Carousel>
    </div>
  )
}

export default ShowImages