import React, { FC } from 'react'
import styles from '../../../styles/Single/SingleMedia.module.css'

interface RuntimeProps {
  runtime: number;
}


const Runtime: FC<RuntimeProps> = ({ runtime }) => {

  return (
    <div className={styles.singleMediaRuntime}>
      {Math.floor(runtime / 60) < 1 ? "" : `${Math.floor(runtime / 60)} h`}
      {runtime % 60 !== 0 ? ` ${runtime % 60} m` : ""}
    </div>
  )
}

export default Runtime