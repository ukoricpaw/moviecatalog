import React from 'react'
import styles from "../../styles/Nav.module.css"
import HomeSvgSelector from '../HomeComponents/HomeSvgSelector'
import movieDbLogo from "../../assets/icons/tmdb.png"
import { Link } from 'react-router-dom'
import { svgS } from '../../types/ForSvg'

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.navigation}>
        <div className={styles.leftSection}>
          <Link to="/">
            <HomeSvgSelector id={svgS.icon} />
          </Link>
          <div className={styles.navTitle}>
            Movie
            <span className={styles.nav__Title}> Catalog</span>
          </div>
        </div>
        <div className={styles.rightSection} >
          <img className={styles.movieDbIcon} loading="lazy" alt="I use this database)" title="I use this database)" src={movieDbLogo} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar