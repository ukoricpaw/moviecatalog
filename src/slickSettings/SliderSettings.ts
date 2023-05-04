const settings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 6,
  slidesToScroll: 6,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 380,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
};

export default settings