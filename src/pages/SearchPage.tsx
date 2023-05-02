import React, { FC } from 'react'
import styles from "../styles/Search.module.css"
import SearchField from '../components/SearchComponents/SearchField'
import SearchQueryComponent from '../components/SearchComponents/SearchQueryComponent'

const SearchPage: FC = () => {


  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchWrapper}>
        <SearchField />
        <SearchQueryComponent />
      </div>
    </div>
  )
}

export default SearchPage