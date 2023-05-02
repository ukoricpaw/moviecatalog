import React, { FC } from 'react'
import tiktok_icon from "../../../assets/icons/tiktok_icon.png"
import facebook_icon from "../../../assets/icons/facebook_icon.webp"
import twitter_icon from "../../../assets/icons/twitter_icon.png"
import youtube_icon from "../../../assets/icons/youtube_icon.png"
import instagram_icon from "../../../assets/icons/instagram_icon.png"
import styles from "../../../styles/Single/SinglePerson.module.css"

interface IDIconSelectorProps {
  social: string;
}

const IDIconSelector: FC<IDIconSelectorProps> = ({ social }) => {
  switch (social) {
    case "facebook":
      return <img className={styles.Idicon} src={facebook_icon} />;
    case "tiktok":
      return <img className={styles.Idicon} src={tiktok_icon} />;
    case "twitter":
      return <img className={styles.Idicon} src={twitter_icon} />;
    case "youtube":
      return <img className={styles.Idicon} src={youtube_icon} />;
    case "instagram":
      return <img className={styles.Idicon} src={instagram_icon} />;
    default: return <></>
  }
}

export default IDIconSelector