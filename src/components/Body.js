import { Link } from "react-router-dom";
import RestroCard from "./RestaurantCard";
import { resList } from "./resList";
import { useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [restr, setRestr] = useState(resList);
  const [searchText, setSearchText] = useState("");
  const handleSearch = () => {
    const searchedRestro = resList.filter((res) =>
      res.resName.toLowerCase().includes(searchText.toLowerCase())
    );
    searchedRestro.length ? setRestr(searchedRestro) : setRestr([]);
  };

  // useEffect(()=>{
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
  //   const jsonData = await data.json();
  //   setRestr(jsonData.data.cards[2].data.data.cards)
  // }
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return (
    <h1>Looks like you are offline</h1>
  )
  }
  
  return (
    <div className="main">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            name="search-box"
            placeholder="Search"
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = restr.filter((res) => res.ratings > 4);
            setRestr(filteredList);
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
  );
};

export default Body;
{/* <Link to={`/restaurants/${element.resName}`}></Link> */}