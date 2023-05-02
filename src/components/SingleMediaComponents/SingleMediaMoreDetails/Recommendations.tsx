import React from 'react'
import styles from "../../../styles/Single/MoreInfo.module.css"
import { useAppSelector } from '../../../hooks/reduxHooks'
import SliderComponent from '../../SliderComponents/SliderComponent'

const Recommendations = () => {

  const rec = useAppSelector(state => state.MediaReducer.data.recommendations)

  if (rec.results.length == 0) {
    return <section className={styles.rec} id="recommendations">
      <h2 className={styles.recTitle}>Recommendations</h2>
      <div style={{ textAlign: "center", margin: "30px 0" }}>There are no recommendations</div>
    </section>
  }

  return (
    <section className={styles.rec} id="recommendations">
      <div className={styles.recWrapper}>
        <h2 className={styles.recTitle}>Recommendations</h2>
        <SliderComponent slidesToScroll={2} slidesToShow={6} dots={false} data={{ media_type: "recommendations", items: rec.results }} />
      </div>
    </section>
  )
}

export default Recommendations