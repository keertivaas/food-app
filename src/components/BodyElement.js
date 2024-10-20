import React, { useState, useMemo, useEffect } from "react";
import RestCard from "../utils/RestCard";
import SearchBar from "./SearchBar";
import Shimmer from "./Shimmer.js";
import { StyleCard, IMG_URL_PREFIX } from "../utils/constants.js";
import { Link } from "react-router-dom";

export const BodyElement = function () {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurantList, setFilteredRestaurantList] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.89960&lng=80.22090&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurantList(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  }

  function handleFoodLessthan200() {
    const filteredRestaurantList = restaurantList.filter(
      (r) => r?.info?.costForTwo.match(/\d+/g).join("") / 2 < 200
    );
    setFilteredRestaurantList(filteredRestaurantList);
  }

  function filterSearchText() {
    const filteredRestaurantList = restaurantList.filter((r) =>
      (r?.info?.name).toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurantList(filteredRestaurantList);
  }

  function handleAllFood() {
    setFilteredRestaurantList(restaurantList);
  }

  return (
    <React.Fragment>
      {/* <SearchBar /> */}
      <div className="search-filter-container">
        <div className="search">
          <input
            type="text"
            placeholder="Search"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="search-btn" onClick={filterSearchText}>
            Search
          </button>
        </div>
        <button onClick={handleFoodLessthan200}>Price less than 200</button>
        <button onClick={handleAllFood}>Show All</button>
      </div>
      {filteredRestaurantList.length === 0 && restaurantList.length === 0 && (
        <div className="res-container-shimmer">
          <Shimmer StyleCard={StyleCard} />
          <Shimmer StyleCard={StyleCard} />
          <Shimmer StyleCard={StyleCard} />
          <Shimmer StyleCard={StyleCard} />
          <Shimmer StyleCard={StyleCard} />
          <Shimmer StyleCard={StyleCard} />
          <Shimmer StyleCard={StyleCard} />
          <Shimmer StyleCard={StyleCard} />
          <Shimmer StyleCard={StyleCard} />
          <Shimmer StyleCard={StyleCard} />
          <Shimmer StyleCard={StyleCard} />
          <Shimmer StyleCard={StyleCard} />
        </div>
      )}
      {filteredRestaurantList.length != 0 && restaurantList.length != 0 && (
        <div className="res-container">
          {filteredRestaurantList.map((food, index) => {
            return (
              <Link className="noUnderLine" key={food?.info?.id || index} to={`/restaurant/${food?.info?.id || index}`}>
              <RestCard
                name={food?.info?.name || "Unknown"}
                imgSrc={
                  IMG_URL_PREFIX + food?.info?.cloudinaryImageId ||
                  "default-image.jpg"
                }
                desc={food?.info?.cuisines.join(", ") || "No description"}
                price={
                  parseInt(food?.info?.costForTwo.match(/\d+/g).join("")) / 2 ||
                  0
                }
                styles={StyleCard}
              />
              </Link>
            );
          })}
        </div>
      )}

      {filteredRestaurantList.length === 0 && restaurantList.length != 0 && (
        <h3>No Results found</h3>
      )}
    </React.Fragment>
  );
};
