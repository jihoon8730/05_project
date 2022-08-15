import React from 'react';
import MainCarousel from './components/MainCarousel/MainCarousel';
import BeseOfficeSlider from './components/BestOfficeSlider/BestOfficeSlider';
import './Main.scss';

const Main = () => {
  return (
    <>
    <div className='Main'>
      <header className='main-silde'>
        <MainCarousel />
      </header>
      <section className='best-office'>
        <BeseOfficeSlider />
      </section>
      <section className='office-introduction'>
        <h4 className='introduction-title'>공유 오피스를 선택해야 하는 이유</h4>
          <div className='comment-all'>
            <img className='images' src="./images/emoji01.jpeg" alt='emoji01 불러오기 실패' />
            <div className='comment-section'>
              <p className='comment'>쾌적한 공간이 필요한 개인 또는 팀 회원님</p>
            </div>
          </div>
          <div className='comment-all-right'>
            <div className='comment-section'>
              <p className='comment'>사무실이 필요한 예비스타트업 대표님</p>
            </div>
            <img className='images' src="./images/emoji02.jpeg" alt='emoji01 불러오기 실패' />
          </div>
          <div className='comment-all'>
            <img className='images' src="./images/emoji03.jpeg" alt='emoji01 불러오기 실패' />
            <div className='comment-section'>
              <p className='comment'>공유오피스가 답이 될 수 있습니다!</p>
            </div>
          </div>
      </section>
    </div>
    </>
  );
}

export default Main;
