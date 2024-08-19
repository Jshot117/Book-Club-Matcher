import react, { useState } from 'react';

export default function loginForm() {
    const [inputText, setInputText] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();


        try {
            const response = await fetch('http://localhost:3000/api/login', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ username: inputText }),
            });
      
            const data = await response.json();
            console.log(data.message);
      
            // Reset the input field after submitting
            setInputText("");
          } catch (error) {
            console.error("Error:", error);
          }


        console.log("should now send to backend for authentication", inputText);
        //setInputText("");
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