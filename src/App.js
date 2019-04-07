import React, { useState } from "react";
import Joke from "./Joke";
import Stories from "./Stories";

const App = () => {
  const [userQuery, setUserQuery] = useState("");

  const updateUserQuery = e => {
    console.log("userQuery", userQuery);
    setUserQuery(e.target.value);
  };

  const handleKeyPress = e => {
    if (e.key === "Enter") {
      searchQuery();
    }
  };

  const searchQuery = () => {
    window.open(`https://google.com/search?q=${userQuery}`, "_blank");
  };

  return (
    <div>
      <h1>Syyad the Khandoor</h1>
      <div className="form">
        <input
          value={userQuery}
          onChange={updateUserQuery}
          onKeyPress={handleKeyPress}
        />
        <button onClick={searchQuery}>Search</button>
      </div>
      <hr />
      <Joke />
      <hr />
      <Stories />
    </div>
  );
};

export default App;
