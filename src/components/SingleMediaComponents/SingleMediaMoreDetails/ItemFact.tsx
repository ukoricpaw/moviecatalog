import React, { FC } from 'react'
import styles from "../../../styles/Single/MoreInfo.module.css"


interface ItemFactProps {
  title: string;
  value: string;
}

const ItemFact: FC<ItemFactProps> = ({ title, value }) => {
  return (
    <div className={styles.factItem}>
      <p className={styles.title}>{title}</p>
      <p className={styles.value}>{value}</p>
    </div>
  )
}

export default ItemFact