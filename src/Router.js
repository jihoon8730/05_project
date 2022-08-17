import React, { useState ,useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import axios from 'axios';
import Main from "./pages/Main/Main";
import List from "./pages/List/List";
import Detail from "./pages/Detail/Detail";
import Nav from "./pages/Nav/Nav";

const Router = () => {
  const [office, setOffice] = useState([]);

  useEffect(() => {
    axiosTest();
  },[])
  
  const axiosTest = () => {
    axios.get('http://localhost:3000/data/officeData.json')
    .then(res => {setOffice(res.data.result)})
    .catch(err => console.log(err));
  }
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Main/>}/>
        <Route path='/list' element={<List office={office}/>}/>
        <Route path='/detail' element={<Detail/>}/>
      </Routes>
    </>
  )
}

export default Router;