import React from 'react';
import './ListCard.scss';

const ListCard = () => {

  return (
    <div className='ListCard'>
      <div className='cards'>
        <div className='bedges'>
          <div className='bedge-place'>25개 지점</div>
        </div>
        <div className='title'>스파크플러스</div>
        <div className='promotion'>프로모션 & 이벤트</div>
        <div className='special'>맥주 4종 무제한 제공</div>
        <div className='single'>개인회원</div>
        <div className='corporation'>기업회원</div>
        <div className='selct-button'>
          <button className='place-button'>지점보기</button>
          <button className='homepage-button'>홈페이지</button>
        </div>
      </div>
      <div className='cards'>
        <div className='bedges'>
          <div className='bedge-place'>25개 지점</div>
        </div>
        <div className='title'>스파크플러스</div>
        <div className='promotion'>프로모션 & 이벤트</div>
        <div className='special'>특별한 특징</div>
        <div className='single'>개인회원</div>
        <div className='corporation'>기업회원</div>
        <div className='selct-button'>
          <button className='place-button'>지점보기</button>
          <button className='homepage-button'>홈페이지</button>
        </div>
      </div>
    </div>
  );
}

export default ListCard;