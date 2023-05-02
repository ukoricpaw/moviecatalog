import React, { FC } from 'react'
import styles from "../../../styles/PersonStyle.module.css"
import personImage from "../../../assets/images/blank-profile-picture-973460__340.webp"

interface SinglePersonCardProps {
  profile_path?: string;
  name: string;
}

const SinglePersonCard: FC<SinglePersonCardProps> = ({ profile_path, name }) => {
  return (
    <section className={styles.cardContainer}>
      <div className={styles.card}>
        <div className={styles.imageContainer}>
          <img className={styles.image} src={profile_path ? `https://image.tmdb.org/t/p/original/${profile_path}` : personImage} alt="" />
        </div>
        <p title={name} className={styles.personsName}>{name}</p>
      </div>
    </section>
  )
}

export default SinglePersonCard