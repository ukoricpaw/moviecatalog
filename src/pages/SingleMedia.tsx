import React, { useEffect, FC } from 'react'
import { useAppDisptach, useAppSelector } from '../hooks/reduxHooks'
import { GetSingleData } from '../store/actions/GetSingleMedia'
import { useParams } from "react-router-dom"
import MovieMedia from '../components/SingleMediaComponents/SingleMediaDetails/MovieMedia'
import TvMedia from '../components/SingleMediaComponents/SingleMediaDetails/TvMedia'
import styles from "../styles/Single/SingleMedia.module.css"
import { SingleGeneralMediaDataType } from '../types/ForSingleMedia'
import Credits from '../components/SingleMediaComponents/SingleMediaMoreDetails/Credits'
import MoreInfo from '../components/SingleMediaComponents/SingleMediaMoreDetails/SingleMediaMoreInfo'
import Preloader from '../components/GeneralComponents/Preloader'


const SingleMedia: FC = () => {

  const dispatch = useAppDisptach()

  const { isLoading, data, error } = useAppSelector(state => state.MediaReducer)

  const { id, media } = useParams()


  useEffect(() => {
    dispatch(GetSingleData({ media_type: media as "tv" | "movie", id: id }))
  }, [id])


  if (isLoading) {
    window.scrollTo(0, 0);
    return <Preloader />
  }

  if (error) {
    return <div>{error}</div>
  }

  return (
    <>
      <section className={styles.single_column}>
        {media === "movie" ? <MovieMedia data={data as SingleGeneralMediaDataType} /> : <TvMedia data={data as SingleGeneralMediaDataType} />}
      </section>
      <section className={styles.single_credits}>
        <Credits />
      </section>
      <MoreInfo />
    </>
  )
}

export default SingleMedia