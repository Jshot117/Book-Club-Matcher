import react, { useState } from 'react';

export default function CreateAccount() {
    const [username, setUsername] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("should now send to backend for registering the account", username);
        setUsername("");
    }
    return(
        <div>
            <h1>Create Account</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter username"></input>
                <button type="submit">submit</button>
            </form>
        </div>
    );
};