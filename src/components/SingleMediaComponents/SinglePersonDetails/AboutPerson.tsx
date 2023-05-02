import React, { FC } from 'react'
import styles from "../../../styles/Single/SinglePerson.module.css"
import { ownInfoType } from '../../../types/ForPerson'
import { ownInfoOfPerson } from '../../../services/ownInfoOfPerson'

interface AboutPersonProps {
  details: ownInfoType;
}


const AboutPerson: FC<AboutPersonProps> = ({ details }) => {


  const newDetails = ownInfoOfPerson(details)

  return (
    <ul className={styles.about}>
      <li className={styles.listTitle}>Personal Info</li>
      {newDetails.map((detail) => <li key={detail.title} className={styles.aboutItem}>
        <h3 className={styles.title}>{detail.title}</h3>
        <p className={styles.value}>{detail.value}</p>
      </li>)}
    </ul>
  )
}

export default AboutPerson