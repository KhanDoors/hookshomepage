import React, { useEffect, useState } from "react";

const Joke = () => {
  const [joke, setJoke] = useState({});

  useEffect(() => {
    fetch("https://official-joke-api.appspot.com/jokes/random")
      .then(response => response.json())
      .then(json => {
        console.log("joke json", json);
        setJoke(json);
      });
  }, []);

  const { setup, punchline } = joke;

  return (
    <div>
      <h2>Session Joke</h2>
      <h2>{setup}</h2>
      <h3>
        <em>{punchline}</em>
      </h3>
    </div>
  );
};

export default Joke;
