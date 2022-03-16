import React from "react";
import styles from "../../css/body.module.css";
import ReviewData from "../../helper/reviewDummy";
import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }


const ReviewCard = () => {
  //   React Slick Settings
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 910,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="py-5">
        <p>HOW IT WORKS</p>
        <h1 style={{ color: "red" }}>it's not rocket science.</h1>
        <p>But it’s definitely scientific and safe. Let’s go step by step.</p>

        {/* <div className="container row"> */}
        <div className="container">
          <Slider {...settings}>
            {ReviewData.map((ele, index) => (
              <div
                class={`card text-white ${ele.color}`}
                style={{ width: "16rem",height:'16rem' }}
              >
                <div class="card-body">
                  <p class={`card-text ${styles.reviewCardBody}`}>
                    {ele.description}
                  </p>
                </div>
                <div className={`card-footer ${styles.reviewCardFooter}`}>
                  <h5>{ele.name}</h5>
                  <p>{ele.source}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ReviewCard;
