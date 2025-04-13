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