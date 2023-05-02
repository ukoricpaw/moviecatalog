import React, { FC } from 'react'
import styles from "../../styles/Search.module.css"
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks/reduxHooks';

interface FilterProps {
  movies: number;
  tvShows: number;
  people: number
}

const FilterComponent: FC<FilterProps> = ({ movies, tvShows, people }) => {

  const { searchField } = useAppSelector(state => state.SearchReducer)

  return (
    <div className={styles.leftSection}>
      <Link to={`/search/movie?query=${searchField}&page=1`}><p className={styles.leftSection_el}>Movies <span className={styles.total}>{movies}</span></p></Link>
      <Link to={`/search/tv?query=${searchField}&page=1`}><p className={styles.leftSection_el}>TV Shows <span className={styles.total}>{tvShows}</span></p></Link>
      <Link to={`/search/person?query=${searchField}&page=1`}><p className={styles.leftSection_el}>People <span className={styles.total}>{people}</span></p></Link>
    </div>
  )
}

export default React.memo(FilterComponent)