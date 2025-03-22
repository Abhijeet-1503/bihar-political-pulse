import React, { useState } from "react";
import "./App.css"
const App = () => {
    const [name, setName] = useState("");
    const [party, setParty] = useState("");
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch("http://localhost:5000/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, party, description }),
        });

        const data = await response.json();
        setMessage(data.message);
    };

    return (
        <div>
            <h2>Bihar Political Pulse</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Apna Naam"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <select value={party} onChange={(e) => setParty(e.target.value)}>
                    <option value="">Party Select Karein</option>
                    <option value="BJP">BJP</option>
                    <option value="Congress">Congress</option>
                    <option value="RJD">RJD</option>
                </select>
                <textarea
                    placeholder="Aapka Opinion"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Submit</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default App;
