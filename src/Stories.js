import React, { useEffect, useState } from "react";

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch("https://news-proxy-server.appspot.com/topstories")
      .then(response => response.json())
      .then(json => {
        setStories(json);
      });
  }, []);

  return (
    <div className="Stories">
      <h2>Stories</h2>
      {stories.map(story => {
        const { id, by, time, title, url } = story;

        return (
          <div key={id}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {title}
            </a>
            <div>
              {by} - {new Date(time * 1000).toLocaleString()}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Stories;
