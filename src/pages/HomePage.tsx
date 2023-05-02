import React, { useEffect } from 'react'
import { useAppDisptach, useAppSelector } from '../hooks/reduxHooks'
import { FetchDataForHome } from '../store/actions/HomeThunk'
import { Header } from '../components/HomeComponents/HeaderComponents/Header'
import SliderComponent from '../components/SliderComponents/SliderComponent'
import styles from "../styles/MediaCard.module.css"
import { ReturnDataForSlider } from '../slickSettings/ReturnDataForSlider'
import { changeField } from '../store/reducers/SearchReducer'
import Preloader from '../components/GeneralComponents/Preloader'

const HomePage = () => {

  const { data, error, loading } = useAppSelector(state => state.HomeReducer)
  const dispatch = useAppDisptach()

  useEffect(() => {
    dispatch(FetchDataForHome())
    dispatch(changeField(""))
  }, [])


  if (loading) {
    window.scrollTo(0, 0);
    return <Preloader />
  }


  if (error) {
    return <div>{error}</div>
  }

  const dataForSlider = ReturnDataForSlider(data);

  return (
    <main>
      <Header />
      {dataForSlider.map(element => {
        return <div key={element.title} className={styles.ownContainer}><div className={styles.cardWrapper}>
          <p className={styles.cardsTitle}>{element.title}</p>
          <SliderComponent slidesToScroll={3} slidesToShow={6} data={element.data} />
        </div>
        </div>
      })}

    </main>
  )
}

export default HomePage