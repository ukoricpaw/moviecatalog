import React, { FC } from 'react'
import styles from "../../../styles/Single/SinglePerson.module.css"
import IDItem from './IDItem'
import { ExternalIDs } from '../../../types/ForSingleMedia'

interface IDsProps {
  IDs: ExternalIDs
}

const ExternalIDsContainer: FC<IDsProps> = ({ IDs }) => {

  return (
    <div className={styles.IDsContainer}>
      {IDs.facebook_id ? <IDItem social="facebook" id={IDs.facebook_id} /> : <></>}
      {IDs.instagram_id ? <IDItem social="instagram" id={IDs.instagram_id} /> : <></>}
      {IDs.twitter_id ? <IDItem social="twitter" id={IDs.twitter_id} /> : <></>}
      {IDs.youtube_id ? <IDItem social="youtube" id={IDs.youtube_id} /> : <></>}
      {IDs.tiktok_id ? <IDItem social="tiktok" id={IDs.tiktok_id} /> : <></>}
    </div>
  )
}

export default ExternalIDsContainer