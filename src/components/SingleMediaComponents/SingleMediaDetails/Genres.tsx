import React, { FC } from 'react'
import styles from "../../../styles/Single/SingleMedia.module.css"
import { GenreType } from '../../../types/MediaTypes'

interface GenresProps {
  genres: GenreType[];
}


const Genres: FC<GenresProps> = ({ genres }) => {


  return (
    <div className={styles.genres}>
      {genres.map((genre, index) => {
        return <p className={styles.singleMovieGenre} key={index} >{genre.name}</p>
      })}</div>
  )
}

export default Genres