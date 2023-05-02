import React, { FC } from 'react'
import styles from "../../../styles/Single/SinglePerson.module.css"
import IDIconSelector from './IDIconSelector'

interface IDItemProps {
  social: string;
  id: string;
}

const IDItem: FC<IDItemProps> = ({ social, id }) => {
  return (

    <a target='_blank' href={`https://www.${social}.com/${id}`} className={styles.IdLink}>
      <span className={styles.visitTitle}>Visit {social}</span>
      <IDIconSelector social={social} />
    </a>
  )
}

export default IDItem