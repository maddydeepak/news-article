import React from "react";
import { Link } from "react-router-dom";

const NewsCard = ({ newsData }) => {
  return (
    <div className="h-72 w-64 m-2 border border-black text-xs rounded-lg bg-white hover:animate-pulse">
      <a href={newsData.link} target="_blank">
        <img
          className="p-2 h-36 w-full"
          src={newsData.parselyMeta["parsely-image-url"]}
          alt="news-image"
        />
        <div className="font-bold p-2">
          {newsData.title.rendered.substr(0, 70) + "..."}
        </div>
        <div className="p-2">
          {newsData.primary_category.description.substr(0, 100) +
            "...Read More"}
        </div>
        <div className="font-bold p-2">Published on : {newsData.date}</div>
      </a>
    </div>
  );
};

export default NewsCard;

// date, link , title, excerpt, image, creator
