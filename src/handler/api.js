import {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import List from "../componets/list";

function GetData() {

    const [result, setResult] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setResult(data);
                console.log(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    return (
        <>
            <h1>Get API</h1>
            {result ? (
               result.map((item) => (
                   <List data={item} key={item.id} />
               ))
            ) : (
                <p>Loading...</p>
            )}
        </>
    );
}

function GetOneData() {
    const { id } = useParams();
    const [oneResult, setOneResult] = useState(null);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
            .then(res => res.json())
            .then(data => {
                setOneResult(data);
            })
            .catch(error => console.error("Error fetching data:", error));
    });

    if (!oneResult) return <p>Loading...</p>;

    return (
        <div className="container">
            <h1>Details Product</h1>
            <div className="card m-3">
                <div className="card-body">
                    <img src={oneResult.image} alt={oneResult.title} width="100" />
                    <h4 className="card-title">{oneResult.title}</h4>
                    <h5 className="card-title">Price $ {oneResult.price}</h5>
                    <p className="card-text">{oneResult.description}</p>
                </div>
            </div>
        </div>
    );
}

export {GetData, GetOneData};