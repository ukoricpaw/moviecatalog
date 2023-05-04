import { FC } from 'react'
import styles from ".././../../styles/Home/Home.module.css"
import Carousel from './Carousel'
import HeaderItem from './HeaderItem'
import { useAppSelector } from '../../../hooks/reduxHooks'
import SearchField from '../../SearchComponents/SearchField'


export const Header: FC = () => {

  const trendingFilms = useAppSelector(state => state.HomeReducer.data.tredingFilms);

  return (
    <header className={styles.header}>
      <div className={styles.carouselWrapper}>
        <Carousel>
          <HeaderItem details={trendingFilms[0]} />
          <HeaderItem details={trendingFilms[1]} />
          <HeaderItem details={trendingFilms[2]} />
        </Carousel>
        <SearchField />
      </div>
    </header>
  )
}
