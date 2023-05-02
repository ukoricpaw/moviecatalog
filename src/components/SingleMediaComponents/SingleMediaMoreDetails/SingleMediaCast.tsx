import React from 'react'
import { useAppSelector } from '../../../hooks/reduxHooks'
import styles from "../../../styles/Single/MoreInfo.module.css"
import SliderComponent from '../../SliderComponents/SliderComponent'

const SingleMediaCast = () => {

  const cast = useAppSelector(state => state.MediaReducer.data.credits.cast)

  const ownCast = cast.slice(0, 11)

  return (
    <div className={styles.theCast}>
      <h2 className={styles.CastTitle}>Cast</h2>
      <SliderComponent slidesToScroll={2} slidesToShow={5} data={{ media_type: "cast", items: ownCast }} />
    </div>
  )
}

export default SingleMediaCast