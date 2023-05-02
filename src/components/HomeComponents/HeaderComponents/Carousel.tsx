import React, { useState, FC } from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import "../../../styles/Slider/Slider.css"

interface CarouselType {
  children: React.ReactNode[];
}

const Carousel: FC<CarouselType> = ({ children }) => {
  const [current, setCurrent] = useState<number>(0)
  const length: number = children.length;


  if (length <= 0) {
    return <div>There are no images</div>;
  }

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  return (
    <section className="slider">
      {length <= 1 ? "" : <IoIosArrowBack fill='white' className="leftarrow" onClick={prevSlide} />}
      {children.map((child, index) => {
        return <div key={index} className={index === current ? 'active' : 'non-active'}>{
          index === current && child
        }</div>
      })}

      {length <= 1 ? "" : <IoIosArrowForward fill='white' className="rightarrow" onClick={nextSlide} />}
    </section>
  )
}

export default Carousel