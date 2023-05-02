import React, { FC, useRef } from 'react'
import styles from "../../../styles/Single/SinglePerson.module.css"

interface BiographyProps {
  biography: string;
}

const PersonBiography: FC<BiographyProps> = ({ biography }) => {

  const partOfBiography = useRef<HTMLParagraphElement>(null);
  const readMoreElement = useRef<HTMLDivElement>(null);

  return (
    <section className={styles.biography}>
      <h2 className={styles.biographyTitle}>Biography</h2>
      <p className={styles.fullBiography}>
        {biography.slice(0, 400).slice(0, biography.slice(0, 400).lastIndexOf(".") + 1)}
      </p>
      <p ref={partOfBiography} className={styles.anotherPartOfBiography}>{biography.slice(biography.slice(0, 400).lastIndexOf(".") + 1)}</p>
      {biography.length > 450 ? <div ref={readMoreElement} className={styles.readMore}
        onClick={() => {
          partOfBiography.current?.classList.toggle(styles.anotherPartOfBiographyNoHidden);
          if (readMoreElement.current !== null) {
            readMoreElement.current?.textContent === "Hide" ?
              readMoreElement.current.textContent = "Read more"
              : readMoreElement.current.textContent = "Hide"
          }
        }}
      >Read more</div> : ""}
    </section>
  )
}

export default PersonBiography