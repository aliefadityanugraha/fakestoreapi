import { Link } from "react-router-dom";

function List({data}) {
    return (
        <>
            <div className="card m-3">
                <div className="card-body">
                    <img src={data.image} alt={data.title} width="100" />
                    <h4 className="card-title">{data.title}</h4>
                    <h5 className="card-title">Price $ {data.price}</h5>
                    <p className="card-text">{data.description}</p>
                    <Link to={`/details/${data.id}`}>Details</Link>
                </div>
            </div>
        </>
    )
}

export default List;