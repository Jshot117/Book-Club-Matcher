import react, { useState } from 'react';

export default function CreateAccount() {
    const [username, setUsername] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
            const response = await fetch('http://localhost:3000/api/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: username }),
            });

            const data = await response.json();
            console.log(data.message);

            // Reset the input field after submitting
            setUsername("");
        } catch (error) {
            console.error("Error:", error);
        }
        
        console.log("should now send to backend for Creation", username);
    }
    return (
        <div>
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter username"></input>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};