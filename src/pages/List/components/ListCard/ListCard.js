import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListCard.scss';

const ListCard = ({officelist}) => {
  const goToDetail = useNavigate();
  return (
    <div className='ListCard'>
      {
        officelist.map(({id}) => {
          return (
            <div className='cards' key={id}>
              <div className='bedges'>
                <div className='bedge-place'>{`${officelist[id - 1]?.place.length}개 지점`}</div>
              </div>
              <div className='title'>{officelist[id - 1]?.title}</div>
              <div className='promotion'>{officelist[id - 1]?.promotion}</div>
              <div className='special'>{officelist[id - 1]?.special}</div>
              <div className='single'><span className='single-bold'>개인회원</span>{`: ${officelist[id - 1]?.single}`}</div>
              <div className='corporation'><span className='corporation-bold'>기업회원</span>{`: ${officelist[id - 1]?.corporation}`}</div>
              <button className='selct-button' onClick={() => {
                goToDetail(`/detail/${id - 1}`)
              }}>
                상세보기
              </button>
            </div>
          )
        })
      }
    </div>
  );
}

export default ListCard;