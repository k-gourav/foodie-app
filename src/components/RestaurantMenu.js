import { useParams } from "react-router-dom";

const RestaurantMenu = () => {
    const {resLinks} = useParams()
    return (
        <div className="menu">
            <h1>{resLinks}</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
                <li>Diet coke</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;