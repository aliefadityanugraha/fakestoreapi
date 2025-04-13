import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Contact() {
    const [data, setData] = useState({ name: '', message: '' });
    const navigate = useNavigate();

    const handleNameChange = (e) => {
        setData((prev) => ({ ...prev, name: e.target.value }));
    };

    const handleMessageChange = (e) => {
        setData((prev) => ({ ...prev, message: e.target.value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const dataForm = JSON.parse(localStorage.getItem('dataForm')) || [];

        const updatedData = [...dataForm, data];

        localStorage.setItem('dataForm', JSON.stringify(updatedData));

        navigate('/result');
    };

    return (
        <div className="container">
            <h2>Contact</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="name"
                    placeholder="Nama"
                    value={data.name}
                    onChange={handleNameChange}
                    required
                />
                <br/>
                <textarea
                    name="message"
                    placeholder="Pesan"
                    value={data.message}
                    onChange={handleMessageChange}
                    required
                />
                <br/>
                <button>Kirim</button>
            </form>
        </div>
    );
}
