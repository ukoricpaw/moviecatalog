import React, { useState, useEffect } from 'react'
import styles from "../../../styles/Single/SingleMedia.module.css"
import CrewStyles from "../../../styles/Single/Crew.module.css"
import { useAppSelector } from '../../../hooks/reduxHooks'
import { CrewMember } from '../../../types/ForSingleMedia'


const Credits = () => {

  const crew = useAppSelector(state => state.MediaReducer.data.credits.crew)

  const [director, setDirector] = useState<CrewMember[]>([])

  const [ownCrew, setOwnCrew] = useState<CrewMember[]>([])

  useEffect(() => {
    const getOwnDirector = crew.filter(person => person.job === "Director");
    const MyOwnCrew = [];
    let i = 0;
    while (MyOwnCrew.length < 4 && crew[i] !== undefined) {
      if (crew[i].job === "Writer" || crew[i].job === "Screenplay" || crew[i].job === "Story") {
        MyOwnCrew.push(crew[i])
      }
      i++;
    }
    setDirector(getOwnDirector);
    setOwnCrew(MyOwnCrew);
  }, [])

  return (
    <div className={styles.singleWrapper}>
      <div className={CrewStyles.crew}>
        <div className={CrewStyles.directors}>{director.map((person, index) => {
          return <div key={index} className={CrewStyles.single_Director}>
            <div className={CrewStyles.directors_name}>{person.name}</div>
            <div className={CrewStyles.directors_job}>{person.job}</div>
          </div>
        })}
        </div>
        <div className={CrewStyles.otherCrew}>
          {ownCrew.map((person, index) => {
            return <div key={index} className={CrewStyles.single_CrewMember}>
              <div className={CrewStyles.CrewMember_name}>{person.name}</div>
              <div className={CrewStyles.CrewMember_job}>{person.job}</div>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}


export default Credits