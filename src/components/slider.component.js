export const SliderComponent = () => {
  const images = [
    {
      url: "https://thumbs.dreamstime.com/z/christian-religious-design-easter-celebration-narrow-horizontal-banner-christian-religious-design-easter-celebration-175124498.jpg",
      title: "First slide label",
      desc: "Some representative placeholder content for the first slide.",
    },
    {
      url: "https://assets.ignitermedia.com/products/37495-holiday-bokeh-welcome-to-church/preview/image",
      title: "First slide label",
      desc: "Some representative placeholder content for the first slide.",
    },
    {
      url: "https://fellowshipflyers.com/wp-content/uploads/2016/09/B2ChurchBanner2.jpg",
      title: "First slide label",
      desc: "Some representative placeholder content for the first slide.",
    },
  ];

  return (
    <div
      id='carouselExampleCaptions'
      className='carousel slide'
      data-bs-ride='carousel'
    >
      <div className='carousel-indicators'>
        {images.map((item, index) => (
          <button
            type='button'
            data-bs-target='#carouselExampleCaptions'
            data-bs-slide-to={index}
            className={index == 0 ? "active" : ""}
            aria-current='true'
            aria-label={`Slide ${index}`}
            key={`slide-nav-${index}`}
          ></button>
        ))}
      </div>
      <div className='carousel-inner'>
        {images.map((item, index) => (
          <div
            key={`slide-${index}`}
            className={`carousel-item ${index == 0 ? "active" : ""}`}
          >
            <img src={item.url} className='d-block w-100' alt='...'></img>
            <div className='carousel-caption d-none d-md-block'>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className='carousel-control-prev'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='prev'
      >
        <span className='carousel-control-prev-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Previous</span>
      </button>
      <button
        className='carousel-control-next'
        type='button'
        data-bs-target='#carouselExampleCaptions'
        data-bs-slide='next'
      >
        <span className='carousel-control-next-icon' aria-hidden='true'></span>
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  );
};
