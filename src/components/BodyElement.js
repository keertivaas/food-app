import React from "react";
import { data } from '../utils/mockData.js';
import RestCard from "../utils/RestCard";
import SearchBar from "./SearchBar";
import { StyleCard } from "../utils/constants.js";

export const BodyElement = function(){
    return (
      <React.Fragment>
        <SearchBar/>
        <div className="res-container">
          {
            data.map(food => {
              return(
                <RestCard key={food?.id} name={food?.name} imgSrc={food?.imgSrc} desc={food?.desc} price={food?.price} styles={StyleCard}/>
              )
            })
          }
        </div>
      </React.Fragment>
    )
  }