import Conditional from "../componets/condition";
import FavoriteColor from "../componets/useState";
import Timer from "../componets/useEffect";
import {GetData} from "../handler/api";

const Home = () => {
    return (
        <>
           <div className="container">
               <GetData />
           </div>
        </>
    )
}

export default Home;