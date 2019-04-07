import React from "react";
import { useFetch } from "./Hooks";

const Stories = () => {
  const stories = useFetch(
    "https://news-proxy-server.appspot.com/topstories",
    []
  );

  return (
    <div className="Stories">
      <h1>Stories</h1>
      {stories.map(story => {
        const { id, by, time, title, url } = story;

        return (
          <div key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              <h2>{title}</h2>
            </a>
            <div>
              <h3>
                {by} - {new Date(time * 1000).toLocaleString()}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
