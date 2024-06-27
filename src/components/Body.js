import RestroCard from "./RestaurantCard";
import { resList } from "./resList";
import { useState } from "react";

const Body = () => {

  let [restr, setRestr] = useState(resList);
  return (
  <div className="body">
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
          imgLink={element.imgLink}
        />
      ))}
    </div>
  </div>
)};

export default Body;
