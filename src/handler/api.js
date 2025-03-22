import {useEffect, useState} from "react";
import List from "../componets/list";

function GetData() {

    const [result, setResult] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => {
                setResult(data);
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

function GetOneData(props) {
    // const [result, setResult] = useState(null);
    //
    // useEffect(() => {
    //     fetch('https://fakestoreapi.com/products')
    //         .then(res => res.json())
    //         .then(data => {
    //             setResult(data);
    //         })
    //         .catch(error => console.error("Error fetching data:", error));
    // }, []);
    // return (
    //     <>
    //         <h1>Get API</h1>
    //         {result ? (
    //             result.map((item) => (
    //                 <List data={item} key={item.id} />
    //             ))
    //         ) : (
    //             <p>Loading...</p>
    //         )}
    //     </>
    // );
}

export {GetData, GetOneData};
export default class Api {
}