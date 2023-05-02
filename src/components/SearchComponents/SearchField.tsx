import React, { FC, useRef, useEffect, useCallback } from 'react'
import styles from "../../styles/Search.module.css"
import { useAppSelector } from '../../hooks/reduxHooks'
import { useAppDisptach } from '../../hooks/reduxHooks'
import { changeField } from '../../store/reducers/SearchReducer'
import { GetResultsBySearch } from '../../store/actions/GetResultsBySearch'
import { useNavigate } from 'react-router-dom'

const SearchField: FC = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const refButton = useRef<HTMLInputElement>(null);
  const dispatch = useAppDisptach()
  const { searchField } = useAppSelector(state => state.SearchReducer)
  const navigate = useNavigate()

  const listener = useCallback((event: KeyboardEvent) => {
    if (event.key === "Enter" && refButton.current !== null) {
      refButton.current.click()
    }
  }, [])

  useEffect(() => {
    if (refInput.current !== null) refInput.current.addEventListener("keyup", listener)
    return (() => {
      refInput.current?.removeEventListener("keyup", listener)
    })
  }, [])



  return (
    <div className={styles.searchField}>
      <input ref={refButton} className={styles.searchButton} value="Search" type="submit" onClick={
        () => {
          dispatch(GetResultsBySearch(searchField))
          navigate(`/search/movie?query=${searchField}`)
        }} />
      <input ref={refInput} placeholder="Search Movies, TV shows, People..."
        className={styles.searchInput} value={searchField} type='text' onChange={(event) => dispatch(changeField(event.target.value))} />
    </div>
  )
}

export default React.memo(SearchField)