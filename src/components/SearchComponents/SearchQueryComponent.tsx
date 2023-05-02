import React, { FC, useEffect } from 'react'
import { useAppSelector } from '../../hooks/reduxHooks'
import styles from "../../styles/Search.module.css"
import FilterComponent from './FilterComponent'
import MediaBySearch from './MediaBySearch'
import { useLocation } from 'react-router-dom'
import { useAppDisptach } from '../../hooks/reduxHooks'
import { GetResultsBySearch } from '../../store/actions/GetResultsBySearch'
import queryString from 'query-string'
import { changeField } from '../../store/reducers/SearchReducer'
import Preloader from '../GeneralComponents/Preloader'


const SearchQueryComponent: FC = () => {


  const { error, isLoading, results } = useAppSelector(state => state.SearchReducer)
  const location = useLocation();

  const dispatch = useAppDisptach()

  const myQueryString = queryString.parse(location.search)

  useEffect(() => {
    dispatch(GetResultsBySearch(myQueryString.query ? myQueryString.query as string : "",
      myQueryString.page ?
        Number(myQueryString.page) : 1))
    dispatch(changeField(myQueryString.query ? myQueryString.query as string : ""))
  }, [location])

  if (isLoading) {
    window.scrollTo(0, 0);
    return <Preloader />
  }

  if (error) {
    return <div>{error}</div>
  }



  return (
    <div className={styles.allMediaContainer}>
      <FilterComponent movies={results.Movies.total_results} tvShows={results.TVs.total_results} people={results.People.total_results} />
      <MediaBySearch />
    </div>
  )
}

export default SearchQueryComponent