import React from 'react';
import { useParams } from 'react-router-dom';
import './Detail.scss';

const Detail = ({office}) => {
  const {id} = useParams();
  return(
    <div className='Detail'>
      <div className='images'>
        <div className='image-black' />
        <img className='image' src='../images/office01.jpg' alt='이미지 불러오기 실패'/>
        <div className='title-content'>
          <h4 className='title'>{office[id]?.title}</h4>
          <p className='content'>{office[id]?.special}</p>
        </div>
        <div className='map-homepage'>
          <div><a className='map' href={office[id]?.place_url} target="_blank" rel="noopener noreferrer">지도보기</a></div>
          <div><a className='homepage' href={office[id]?.page_url} target="_blank" rel="noopener noreferrer">홈페이지</a></div>
        </div>
      </div>
      <div className='places'>
        <h4 className='places-head-title'>지점</h4>
        {
          office[id]?.place.map(({place_title, place_address}) => {
            return (
              <div className='place col-md-4' key={place_title}>
                <p className='place-title'>{place_title}</p>
                <p className='place-address'>{place_address}</p>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Detail;
