function List({data}) {
    return (
        <>
            <div className="card m-3">
                <div className="card-body">
                    <img src={data.image} alt={data.title} width="100" />
                    <h5 className="card-title">{data.title}</h5>
                    <p className="card-text">{data.description}</p>
                </div>
            </div>
        </>
    )
}

export default List;