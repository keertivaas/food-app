
import React, { useState } from 'react';
import { useEffect } from 'react';
import Shimmer from './Shimmer';
import { StyleCard } from "../utils/constants.js";
import SingleRestDescUI from '../utils/SingleRestDescUI.js';
import { IMG_URL_PREFIX, DESC_URL_PREFIX } from '../utils/constants.js';
import { useParams } from 'react-router-dom';

const RestDescription = () => {
  const [resInfo, setResInfo] = useState(null);
  const {resId} = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async() => {
    const data = await fetch(DESC_URL_PREFIX + resId);
    const jsonData = await data.json();
    setResInfo(jsonData?.data?.cards[2]?.card?.card?.info);
  }

  return (
    <div className="restaurant-menu">
      <h2>Menu</h2>
      {
        !resInfo && <Shimmer StyleCard={StyleCard}/>
      }
      {
        resInfo && 
        <React.Fragment>
            <SingleRestDescUI name={resInfo?.name} cost={resInfo?.costForTwoMessage} rating={resInfo?.avgRating} image={IMG_URL_PREFIX + resInfo?.cloudinaryImageId || "default-image.jpg"} cuisines={resInfo?.cuisines.join(', ')}/>
        </React.Fragment>
      }
    </div>
  );
};

export default RestDescription;
