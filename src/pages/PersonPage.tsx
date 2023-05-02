import React, { useEffect, FC } from 'react'
import { useParams } from 'react-router-dom'
import { GetAllInfoForPerson } from '../store/actions/GetAllInfoForPerson'
import { useAppDisptach, useAppSelector } from '../hooks/reduxHooks'
import styles from "../styles/Single/SinglePerson.module.css"
import ExternalIDsContainer from '../components/SingleMediaComponents/SingleMediaMoreDetails/ExternalIDsContainer'
import AboutPerson from '../components/SingleMediaComponents/SinglePersonDetails/AboutPerson'
import PersonBiography from '../components/SingleMediaComponents/SinglePersonDetails/PersonBiography'
import personImage from "../assets/images/blank-profile-picture-973460__340.webp"
import KnownFor from '../components/SingleMediaComponents/SinglePersonDetails/KnownFor'
import Preloader from '../components/GeneralComponents/Preloader'


const PersonPage: FC = () => {

  const { id } = useParams();
  const dispatch = useAppDisptach()
  const { data, error, isLoading } = useAppSelector(state => state.PersonReducer)

  useEffect(() => {
    dispatch(GetAllInfoForPerson(Number(id)))
  }, [])

  if (isLoading) {
    window.scrollTo(0, 0);
    return <Preloader />
  }

  if (error) {
    return <div>{error}</div>
  }
  return (
    <article className={styles.singlePerson}>
      <div className={styles.singlePersonWrapper}>
        <section className={styles.leftSection}>
          <div className={styles.imageOfPerson}>
            <img className={styles.profileImage} src={data.ownInfo.profile_path ? `https://image.tmdb.org/t/p/original/${data.ownInfo.profile_path}` : personImage} alt="profile" />
          </div>
          <ExternalIDsContainer IDs={data.externalIDs} />
          <AboutPerson details={data.ownInfo} />
        </section >
        <section className={styles.RightSection}>
          <h1 className={styles.name}>{data.ownInfo.name}</h1>
          <PersonBiography biography={data.ownInfo.biography} />
          <KnownFor movie_credits={data.movie_credits.cast} tv_credits={data.tv_credits.cast} />
        </section >
      </div>
    </article>
  )
}

export default PersonPage