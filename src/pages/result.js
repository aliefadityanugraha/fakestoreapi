import { useEffect, useState } from 'react';
import tablecss from '../table.css';

function Result() {
    const [data, setData] = useState([]);

    useEffect(() => {
        const dataForm = localStorage.getItem('dataForm');
        if (dataForm) {
            setData(JSON.parse(dataForm));
        }
    }, []);

    return (
        <div className="container">
            <h2>Result Page</h2>

            {data.length > 0 ? (
                <table className={tablecss.table} cellPadding="8" cellSpacing="0">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Name</th>
                        <th>Message</th>
                    </tr>
                    </thead>
                    <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.message}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>Data Kosong</p>
            )}
        </div>
    );
}

export default Result;
