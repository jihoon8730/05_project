import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const goToListPage = useNavigate();
  const goToHomePage = useNavigate();

  return (
    <div className='Nav'>
      <div className='nav-logo'>
        <p onClick={() => {
          goToHomePage('/')
        }}>05</p>
      </div>
      <div className='nav-content'>
        <p>모든 공유오피스의 정보를 확인 할 수 있습니다</p>
        <button className='nav-search-place' onClick={() => {
          goToListPage('/list');
        }}>공유오피스 리스트</button>
      </div>
    </div>
  );
}

export default Nav;