import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from "../../../styles/Single/MoreInfo.module.css"
import SingleMediaCast from './SingleMediaCast'
import KeyWords from './Keywords'
import ShowImages from './ShowImages'
import Recommendations from './Recommendations'
import ExternalIDsContainer from './ExternalIDsContainer'
import { useAppSelector } from '../../../hooks/reduxHooks'
import Facts from './Facts'

const MoreInfo: FC = () => {

  const IDs = useAppSelector(state => state.MediaReducer.data.externalIDs)

  return (
    <section className={styles.moreInfoSection}>
      <div className={styles.moreInfo}>
        <div className={styles.InfoWrapper}>
          <div className={styles.leftSection}>
            <SingleMediaCast />
            <div className={styles.BtnContainer}>
              <Link to={"/"} className={styles.Button}>Full cast & crew</Link>
            </div>
            <ShowImages />
            <div className={styles.BtnContainer}>
              <Link to="/" className={styles.Button}>View all media</Link>
            </div>
          </div>
          <div className={styles.rightSection}>
            <ExternalIDsContainer IDs={IDs} />
            <Facts />
            <KeyWords />
          </div>
        </div>
        <Recommendations />
      </div>
    </section>
  )
}

export default MoreInfo