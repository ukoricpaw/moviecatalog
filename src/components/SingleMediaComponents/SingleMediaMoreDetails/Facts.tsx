import React, { FC } from 'react'
import styles from "../../../styles/Single/MoreInfo.module.css"
import { useAppSelector } from '../../../hooks/reduxHooks';
import ItemFact from './ItemFact';
import { returnFactsForMedia } from '../../../services/returnFactsForMedia';

const Facts: FC = () => {
  const data = useAppSelector(state => state.MediaReducer.data)

  const ownFacts = returnFactsForMedia(data)

  return (
    <div className={styles.factsOfSingle}>
      {ownFacts !== undefined ? ownFacts.map(element =>
        <ItemFact key={element.title} title={element.title} value={element.value} />
      ) : ""}
      {data.media_type === "tv" &&
        (
          <>
            <ItemFact title={"Networks"} value='' />
            {data.ownInfo.networks.length > 5 ?
              data.ownInfo.networks.slice(0, 5).map(image => <img key={image.id} className={styles.imageOfNetwork} src={`https://image.tmdb.org/t/p/original${image.logo_path}`} />)
              : data.ownInfo.networks.map(image => <img key={image.id} className={styles.imageOfNetwork} src={`https://image.tmdb.org/t/p/original${image.logo_path}`} />)}
          </>
        )}
    </div>
  )
}

export default Facts