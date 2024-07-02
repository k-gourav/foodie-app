const RestroCard = ({resName, cuisine, ratings, eta, price, imgLink}) => (
    <div className="res-card">
        <img className="res-logo" src={imgLink} alt="restro-image" />
        <p>{resName}</p>
        <p>{cuisine}</p>
        <p>{ratings} ⭐</p>
        <p>₹{price}</p>
        <p>{eta}</p>
    </div>
)

export default RestroCard;