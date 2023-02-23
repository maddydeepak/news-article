import React, { useEffect } from "react";
import NewsCard from "./NewsCard";
import axios from "axios";
import { useState } from "react";

const MainContainer = () => {
  const [newsData, setNewsData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(
        "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed"
      )
      .then((data) => {
        setNewsData(data.data);
        setLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="m-2 p-2 justify-center">
      <div className="font-bold text-4xl underline text-white font-serif text-center">
        News Article
      </div>
      {loading ? (
        <div className="text-4xl text-white">Loading...</div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {newsData.map((item) => (
            <NewsCard newsData={item} key={item.id} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MainContainer;
