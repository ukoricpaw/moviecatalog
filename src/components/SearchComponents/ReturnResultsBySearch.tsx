import React, { FC } from 'react'
import styles from "../../styles/Search.module.css"
import { useAppSelector } from '../../hooks/reduxHooks'
import { Link, useNavigate } from 'react-router-dom'
import MediaSearchItem from './MediaSearchItem'
import { MediaItemsTypeWithPerson } from '../../types/MediaTypes'
import { Pagination, PaginationItem } from '@mui/material';

interface MovieType {
  media: "movie",
  type: "Movies"
}
interface TvType {
  media: "tv",
  type: "TVs"
}
interface PersonType {
  media: "person",
  type: "People"
}

export type ReturnResultsProps = MovieType | TvType | PersonType

const ReturnResultsBySearch: FC<ReturnResultsProps> = ({ media, type }) => {

  const { results, searchField } = useAppSelector(state => state.SearchReducer)
  const navigate = useNavigate()


  return (
    <>
      <div className={styles.rightSection}>
        {results[type].results.length !== 0 ?
          results[type].results.map(result => <Link key={result.id} to={`/${media}/${result.id}`}>
            <MediaSearchItem media={{ media_type: media, data: result } as MediaItemsTypeWithPerson} /></Link>)
          : <div>There are no results</div>
        }

        <div className={styles.pagination}>
          {!results[type].results || results[type].results.length == 0 ? <></> :
            <Pagination
              sx={{ color: "white" }}
              page={results[type].page}
              count={results[type].total_pages}
              onChange={(_, num) => {
                navigate(`/search/${media}?query=${searchField}&page=${num}`)
              }}
              renderItem={
                (item) => (
                  <PaginationItem
                    {...item}
                  />
                )
              }
            />}
        </div>
      </div>
    </>
  )
}

export default ReturnResultsBySearch