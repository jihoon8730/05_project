import React from "react";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BestOfficeSlider.scss"

const BestOfficeSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    roof: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
      <div>
        <h2>인기 공유오피스</h2>
        <Slider {...settings} className="wrap">
          <div className="sliders">
            <div className="slider">
              <img className="slider-image" src="./images/wework02.jpeg" alt="위워크 이미지 불러 오기 실패" />
              <div className="slider-title">
                <p>위워크</p>
              </div>
            </div>
          </div>
          <div className="sliders">
            <div className="slider">
              <img className="slider-image" src="./images/fastfive02.png" alt="패스트파이브 이미지 불러 오기 실패" />
              <div className="slider-title">
                <p>패스트파이브</p>
              </div>
            </div>
          </div>
          <div className="sliders">
            <div className="slider">
              <img className="slider-image" src="./images/sparkplus02.jpeg" alt="스파크플러스 이미지 불러 오기 실패" />
              <div className="slider-title">
                <p>스파크플러스</p>
              </div>
            </div>
          </div>
          <div className="sliders">
            <div className="slider">
              <img className="slider-image" src="./images/myworkspace01.jpeg" alt="마이워크스페이스 이미지 불러 오기 실패" />
              <div className="slider-title">
                <p>마이 워크스페이스</p>
              </div>
            </div>
          </div>
          <div className="sliders">
            <div className="slider">
              <img className="slider-image" src="./images/stagenine01.jpeg" alt="스테이지나인 이미지 불러 오기 실패" />
              <div className="slider-title">
                <p>스테이지나인</p>
              </div>
            </div>
          </div>
          <div className="sliders">
            <div className="slider">
              <img className="slider-image" src="./images/tozworkcenter01.jpeg" alt="토즈워크센터 이미지 불러 오기 실패" />
              <div className="slider-title">
                <p>토즈워크센터</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    );
}

export default BestOfficeSlider