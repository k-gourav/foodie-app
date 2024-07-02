import RestroCard from "./RestaurantCard";
import { resList } from "./resList";
import { useEffect, useState } from "react";

const Body = () => {

  let [restr, setRestr] = useState(resList);
  // useEffect(()=>{
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   const jsonData = await data.json();
  //   setRestr(jsonData.data.cards[2].data.data.cards)
  // }
 

  return (
  <div className="main">
    <div className="filter">
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = restr.filter((res) => res.ratings > 4);
          setRestr(filteredList)
        }}
      >
        Top Rated Restaurant
      </button>
       
    </div>
    <div className="restro-container">
      {restr.map((element) => (
        <RestroCard
          key={element.id}
          resName={element.resName}
          cuisine={element.cuisine}
          ratings={element.ratings}
          eta={element.eta}
          price={element.price}
          imgLink={element.imgLink}
        />
      ))}
    </div>
  </div>
)};

export default Body;
