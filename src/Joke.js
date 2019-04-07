import React from "react";
import { useFetch } from "./Hooks";

const Joke = () => {
  const { setup, punchline } = useFetch(
    "https://official-joke-api.appspot.com/jokes/random",
    {}
  );

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
