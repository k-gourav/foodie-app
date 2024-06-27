const RestroCard = ({resName, cuisine, ratings, eta, imgLink}) => (
    <div className="res-card">
        <img className="res-logo" src={imgLink} alt="restro-image" />
        <h3>{resName}</h3>
        <h4>{cuisine}</h4>
        <h4>{ratings} ⭐</h4>
        <h4>{eta}</h4>
    </div>
)

export default RestroCard;