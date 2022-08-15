import React from "react";
import ListCard from "./components/ListCard/ListCard";
import './List.scss';


const List = ({office}) => {
  return (
    <div className="List">
      <ListCard officelist={office}/>
    </div>
  )
}
export default List;