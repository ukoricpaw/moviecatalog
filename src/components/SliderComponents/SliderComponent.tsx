import React, { FC } from 'react'
import "../../styles/Slider/Slider.css"
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import settings from '../../slickSettings/SliderSettings';
import { TypeForSlider } from '../../types/ForSlider';
import SinglePersonCard from '../SingleMediaComponents/SinglePersonDetails/SinglePersonCard';
import SingleMediaItem from '../SingleMediaComponents/SingleMediaDetails/SingleMediaItem';
import { Link } from 'react-router-dom';
import { MediaItemsType } from '../../types/MediaTypes';

interface NewSettings {
  slidesToScroll: number;
  slidesToShow: number;
  data: TypeForSlider;
  dots?: boolean;
}

const SliderComponent: FC<NewSettings> = ({ slidesToScroll, slidesToShow, data, dots }) => {

  const new_settings = { ...settings, slidesToScroll, slidesToShow, dots }

  switch (data.media_type) {
    case "cast":
      return (<Slider {...new_settings}>
        {data.items.map(item => <Link key={item.id} to={`/person/${item.id}`}><SinglePersonCard profile_path={item.profile_path} name={item.name} /> </Link>)}</ Slider>)
    case "movie":
    case "tv":
      return (<Slider {...new_settings}>
        {data.items.map(item => <Link key={item.id} to={`/${data.media_type}/${item.id}`}><SingleMediaItem item={{
          media_type: data.media_type,
          data: item
        } as MediaItemsType} /></Link>)}
      </ Slider>)
    case "person":
      return (<Slider {...new_settings}>
        {data.items.map(item => <Link key={item.id} to={`/${data.media_type}/${item.id}`}>
          <SinglePersonCard profile_path={item.profile_path} name={item.name} />
        </Link>)}
      </ Slider>)
    case "recommendations":
      return (<Slider {...new_settings}>
        {data.items.map(item => <Link key={item.id} to={`/${item.media_type}/${item.id}`}>
          <SingleMediaItem item={{
            media_type: item.media_type,
            data: item
          } as MediaItemsType} />
        </Link>)}
      </ Slider>)
    default:
      return <div></div>
  }
}

export default SliderComponent