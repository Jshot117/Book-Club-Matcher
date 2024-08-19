import react, { useState } from 'react';

export default function loginForm() {
    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("should now send to backend for authentication", inputText);
        setInputText("");
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputText} onChange={(e) => setInputText(e.target.value)} placeholder="Enter username"></input>

                <button type="submit">submit</button>
            </form>
        </div>
    );

}